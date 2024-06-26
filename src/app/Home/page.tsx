'use client';

import { useEffect, useState } from 'react';
import CryptoDataTable from '@/components/CryptoData';
import Headers from '@/components/Header';
import SwapTokens from '@/components/SwapTokens';

const Home = () => {
  const [assets, setAssets] = useState([]);
  useEffect(() => {
    const fetchAssets = async () => {
      const res = await fetch('/api/cryptocurrencyData');
      const { data } = await res.json();
      setAssets(data);
    };
    fetchAssets();
  }, []);
  return (
    <div className="bg-black">
      <Headers />
      <div className="relative bg-cover bg-center bg-banner">
        <div className="flex flex-col justify-center items-center mb-7 mx-auto text-center h-full">
          <div className="mt-7" style={{ width: '777px' }}>
            <h1 className="text-6xl text-white">Easy send and Request Crypto.</h1>
            <p className="text-xl text-white pt-7 pb-7 mx-auto" style={{ maxWidth: '581px' }}>
              Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone
              in between.
            </p>
          </div>
          <CryptoDataTable cryptoData={assets} />
        </div>
      </div>
      <SwapTokens />
    </div>
  );
};
export default Home;
