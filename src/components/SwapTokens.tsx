import React from 'react';
import Image from 'next/image';

const SwapTokens = () => {
  return (
    <div className="w-4/6 mx-auto relative mb-12 -mt-28">
      <div className="p-8 bg-black text-white border border-gray-700 rounded-xl">
        <div className="flex flex-wrap justify-between gap-4">
          <h2 className="text-2xl font-bold mb-4">Swap Tokens</h2>
          <div>
            <Image src="/assets/setting_icon.png" width={24} height={24} alt="Picture of the author" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-9 relative">
          <div className="flex-1">
            <div className="px-9 py-7 text-lg bg-darkGray text-white rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-5xl font-semibold">0.00</span>
                  <p className="text-gray-500 mt-1 text-sm font-medium pt-3">$0.00</p>
                </div>
                <div className="text-right">
                  <div className="flex bg-black p-2">
                    <Image src="/assets/btc-bold.png" width={32} height={32} alt="Picture of the author" />
                    <p className="ml-2 text-gray-500">BTC {'>'}</p>
                  </div>
                  <p className="text-sm text-white pt-3">
                    Balance: <span className="text-blue">24,240</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="px-9 py-7 text-lg bg-darkGray text-white rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-5xl font-semibold">0.00</span>
                  <p className="text-gray-500 mt-1  text-sm font-medium pt-3">$0.00</p>
                </div>
                <div className="text-right">
                  <div className="flex bg-black p-2">
                    <Image src="/assets/bnb.png" width={32} height={32} alt="Picture of the author" />
                    <p className="ml-2 text-gray-500">BNB {'>'}</p>
                  </div>
                  <p className="text-sm text-white pt-3">
                    Balance: <span className="text-blue">24,240</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/assets/swap.png"
            width={50}
            height={50}
            alt="Picture of the author"
            className="absolute top-12 left-0 right-0 mx-auto"
          />
        </div>
        <div className="mt-7">
          <button className="block text-center mx-auto p-4 w-64 rounded-tl-lg rounded-br-lg bg-primary uppercase text-white font-medium">
            Swop Tokens
          </button>
          <div className="flex flex-wrap justify-between">
            <div className="mt-4">
              <p className="text-sm text-white">1 BTC = 32.4039 ETH</p>
              <p className="text-sm text-blue">Free exchage</p>
            </div>
            <p className="text-gray-500 mt-10">Updates in 4s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapTokens;
