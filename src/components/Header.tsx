import React from 'react';
import Image from 'next/image';

const Headers = () => {
  return (
    <nav className="absolute w-full z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Image src={`/assets/BlockChain-logo.png`} height={14.03} width={193} alt="" />
          </div>
          {/* Centered menu items */}
          <div className="flex justify-center flex-1">
            <div className="hidden sm:flex space-x-4">
              <a href="#" className="px-3 py-2 text-sm font-medium text-white" aria-current="page">
                Exchange
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-white">
                Last Transactions
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-white">
                Invite Friend
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-white">
                Notifications
              </a>
            </div>
          </div>
          {/* Right-aligned buttons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Login button */}
            <button
              type="button"
              className="text-white border border-primary bg-transparent px-3 py-2 rounded-tl-lg rounded-br-lg uppercase text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary">
              Log in
            </button>
            {/* Signup button */}
            <button
              type="button"
              className="ml-4 bg-primary text-white px-3 py-2 rounded-tl-lg rounded-br-lg uppercase text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Headers;
