-- CreateTable
CREATE TABLE "UpcomingIpo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "priceBand" TEXT NOT NULL,
    "openDate" TIMESTAMP(3) NOT NULL,
    "closeDate" TIMESTAMP(3) NOT NULL,
    "issueSize" TEXT NOT NULL,
    "issueType" TEXT NOT NULL,
    "listingDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UpcomingIpo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OngoingIpo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "priceBand" TEXT NOT NULL,
    "openDate" TIMESTAMP(3) NOT NULL,
    "closeDate" TIMESTAMP(3) NOT NULL,
    "issueSize" TEXT NOT NULL,
    "issueType" TEXT NOT NULL,
    "listingDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OngoingIpo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewListedIpo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "priceBand" TEXT NOT NULL,
    "openDate" TIMESTAMP(3) NOT NULL,
    "closeDate" TIMESTAMP(3) NOT NULL,
    "issueSize" TEXT NOT NULL,
    "issueType" TEXT NOT NULL,
    "listingDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewListedIpo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AllSector" (
    "id" TEXT NOT NULL,
    "sectorName" TEXT NOT NULL,
    "sectorDesc" TEXT NOT NULL,
    "sectorType" TEXT NOT NULL,

    CONSTRAINT "AllSector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpecificSector" (
    "id" TEXT NOT NULL,
    "sectorName" TEXT NOT NULL,
    "sectorDesc" TEXT NOT NULL,
    "listingCompanies" JSONB NOT NULL,
    "marketInsights" TEXT NOT NULL,
    "opportunities" TEXT NOT NULL,

    CONSTRAINT "SpecificSector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "publishDate" TIMESTAMP(3) NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AllSharkInvestor" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "sharkName" TEXT NOT NULL,
    "wealth" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "AllSharkInvestor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SharkInvestor" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "netWorth" TEXT NOT NULL,
    "sectorFocus" TEXT NOT NULL,
    "stageFocus" TEXT NOT NULL,
    "notableInvestments" TEXT NOT NULL,
    "achievements" TEXT NOT NULL,

    CONSTRAINT "SharkInvestor_pkey" PRIMARY KEY ("id")
);
