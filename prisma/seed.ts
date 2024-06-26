import path from 'path';
import { PrismaClient } from '@prisma/client';
import cloudinary from '@/utils/cloudinary';
const prisma = new PrismaClient();
async function uploadImageToCloudinary(imagePath: string) {
  try {
    const result = await cloudinary.v2.uploader.upload(imagePath, {
      folder: 'cryptocurrency',
    });
    return result.secure_url;
  } catch (error) {
    console.error(`Failed to upload image ${imagePath}:`, error);
    throw error;
  }
}
async function main() {
  const assetsToCreate = [
    {
      currencyId: 1,
      filePath: '@/pages/upload/images/btc.png',
      name: 'BTC',
      currency: 'USD',
      lastTrade: 63000.0,
      changePercent: '-2.21%',
      changeValue: '-$1,426.18',
    },
    {
      currencyId: 2,
      filePath: '@/pages/upload/images/eth.png',
      name: 'ETH',
      currency: 'USD',
      lastTrade: 3408.9,
      changePercent: '-0.33%',
      changeValue: '-$11.20',
    },
    {
      currencyId: 3,
      filePath: '@/pages/upload/images/doge.png',
      name: 'DOGE',
      currency: 'USD',
      lastTrade: 0.15,
      changePercent: '+15.75%',
      changeValue: '$0.02',
    },
    {
      currencyId: 4,
      filePath: '@/pages/upload/images/algo.png',
      name: 'ALGO',
      currency: 'USD',
      lastTrade: 0.15,
      changePercent: '+0.00%',
      changeValue: '+0.00%',
    },
    {
      currencyId: 5,
      filePath: '@/pages/upload/images/dot.png',
      name: 'DOT',
      currency: 'USD',
      lastTrade: 5.64,
      changePercent: '+0.00%',
      changeValue: '+0.00%',
    },
    {
      currencyId: 6,
      filePath: '@/pages/upload/images/uni.png',
      name: 'UNI',
      currency: 'USD',
      lastTrade: 9.79,
      changePercent: '+0.00%',
      changeValue: '+0.00%',
    },
    {
      currencyId: 7,
      filePath: '@/pages/upload/images/comp.png',
      name: 'COMP',
      currency: 'USD',
      lastTrade: 45.67,
      changePercent: '-0.95%',
      changeValue: '-0.44%',
    },
  ];
  try {
    const existingAssets = await prisma.blockchainTable.findMany();
    const existingAssetNames = new Set(existingAssets.map((asset) => asset.currencyId));
    const newAssets = assetsToCreate.filter((asset) => !existingAssetNames.has(asset.currencyId));
    for (let asset of newAssets) {
      const imagePath = path.join(process.cwd(), asset.filePath.replace('@/pages', 'src/pages'));
      const uploadedUrl = await uploadImageToCloudinary(imagePath);
      console.log(uploadedUrl, 'imgUrl');
      asset.filePath = uploadedUrl;
    }
    if (newAssets.length > 0) {
      await prisma.blockchainTable.createMany({
        data: newAssets,
      });
      console.log('New assets created successfully!');
    } else {
      console.log('No new assets to add.');
    }
  } catch (error) {
    console.error('Error creating assets:', error);
  } finally {
    await prisma.$disconnect();
  }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
