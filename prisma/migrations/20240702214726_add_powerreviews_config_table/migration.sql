-- CreateTable
CREATE TABLE "PowerReviewsConfig" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sessionId" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "merchantGroupId" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "PowerReviewsConfig_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PowerReviewsConfig_sessionId_key" ON "PowerReviewsConfig"("sessionId");

-- CreateIndex
CREATE INDEX "PowerReviewsConfig_sessionId_idx" ON "PowerReviewsConfig"("sessionId");
