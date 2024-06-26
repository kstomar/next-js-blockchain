-- CreateTable
CREATE TABLE "BlockchainTable" (
    "id" SERIAL NOT NULL,
    "filePath" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "currency" VARCHAR(255) NOT NULL,
    "lastTrade" INTEGER NOT NULL,
    "changePercent" VARCHAR(255) NOT NULL,
    "changeValue" VARCHAR(255) NOT NULL,

    CONSTRAINT "BlockchainTable_pkey" PRIMARY KEY ("id")
);
