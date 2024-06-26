import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const data = await prisma.blockchainTable.findMany();
  res.status(200).json({ data });
}
