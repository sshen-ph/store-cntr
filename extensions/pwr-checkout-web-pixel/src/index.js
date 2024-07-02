import {register} from "@shopify/web-pixels-extension";

register(({ analytics, browser, init, settings }) => {
    // Bootstrap and insert pixel script tag here

    analytics.subscribe('checkout_completed', (event) => {
      const pwrScript = document.createElement('script')
      pwrScript.src = "https://static.powerreviews.com/t/v1/tracker.js";

      pwrScript.addEventListener('load', () => {

        const checkout = event.data.checkout;
        const lineItems = checkout.lineItems;
        const products = [];

        POWERREVIEWS.tracker.createTracker({merchantGroupId: "<MGID>"});

          lineItems.forEach(item => {
            if (item.variant.price.amount > 0) {
              products.push({
              page_id: item.variant.product.id,
              product_name: item.title,
              quantity: item.quantity,
              unit_price: item.variant.price.amount,
              page_id_variant: item.variant.id
            })
          }
        });

        var orderFeed = {
          merchantGroupId: "<MGID>",
          merchantId: "<MID>",
          locale: "<locale>",
          merchantUserId: checkout.order.customer.id,
          marketingOptIn: true,
          userEmail: checkout.email,
          userFirstName: checkout.billingAddress.firstName,
          userLastName: checkout.billingAddress.lastName,
          orderId: checkout.order.id,
          orderItems: products
        }

        tracker.trackCheckout(orderFeed);
      })

      document.body.appendChild(pwrScript)
    });
});
