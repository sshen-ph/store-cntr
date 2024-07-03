import { json } from "@remix-run/node";
import {
  useActionData,
  Link,
  useNavigate,
  useLoaderData,
} from "@remix-run/react";
import {
  Page,
  Layout,
  IndexTable,
  Thumbnail,
  Text,
  Icon,
  Card,
  EmptyState,
  InlineStack,
} from "@shopify/polaris";
import { useAppBridge } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import { getQRCodes } from "../models/QRCode.server";
import { AlertDiamondIcon, ImageIcon } from "@shopify/polaris-icons";

export const loader = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);
  
  return json({
    qrCodes,
  });
};


export default function Index() {
  
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card padding="0">
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
