'use client';
import React from 'react';

import { CryptoData } from '@/types/interface';
import { CldImage } from 'next-cloudinary';

const BlockchainTable: React.FC<{ cryptoData: CryptoData[] }> = ({ cryptoData }) => {
  const getColorClass = (value: string) => {
    const numberValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));
    if (numberValue < 0) {
      return 'text-red-500';
    } else if (numberValue > 0) {
      return 'text-aqua';
    } else {
      return 'text-gray-600';
    }
  };
  return (
    <div className="relative w-4/6 mx-auto">
      <div className="p-8 bg-black text-white rounded-xl border border-gray-700">
        <table className="w-full text-sm text-left rtl:text-right border-collapse">
          <thead className="uppercase bg-black border-b border-gray-700 dark:border-gray-600">
            <tr className="bg-black">
              <th scope="col" className="text-xl text-white px-6 py-3 sm:text-sm">
                ASSETS
              </th>
              <th scope="col" className="text-xl text-white px-6 py-3 sm:text-sm ">
                LAST TRADE
              </th>
              <th scope="col" className="text-xl text-white px-6 py-3 sm:text-sm">
                24H%
              </th>
              <th scope="col" className="text-xl text-white px-6 py-3 sm:text-sm">
                24H CHANGE
              </th>
              <th scope="col" className="text-xl text-blue px-6 py-3 sm:text-sm">
                MORE {'>'}
              </th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((res: CryptoData, index: number) => (
              <tr key={index} className="bg-black bg-opacity-80 backdrop-blur-md">
                <td className="px-6 py-4 flex flex-row items-center">
                  <CldImage
                    src={res.filePath}
                    width="64"
                    height="64"
                    alt=""
                    crop={{
                      type: 'auto',
                      source: true,
                    }}
                    className="mr-5"
                  />
                  <span className="text-lg font-medium text-white">{res.name}</span>
                  <span className="text-lg font-medium text-white">/</span>
                  <span className="text-lg text-gray-400">{res.currency}</span>
                </td>
                <td className="text-lg font-medium text-white px-6 py-4">${res.lastTrade}</td>
                <td className={`text-lg font-medium px-6 py-4 ${getColorClass(res.changePercent)}`}>
                  {res.changePercent}
                </td>
                <td className={`text-lg font-medium px-6 py-4 ${getColorClass(res.changeValue)}`}>{res.changeValue}</td>
                <td className="text-lg font-medium text-white px-6 py-4">
                  <button className="flex items-center justify-center px-2 py-1 text-green-900 bg-green">Trade</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default BlockchainTable;
