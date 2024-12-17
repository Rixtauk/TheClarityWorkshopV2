import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto space-y-4">
          <img
            src="https://www.dropbox.com/scl/fi/pyk18qtsbjf7ke5xn7rmi/Main-Logo-Black-V2.png?rlkey=ls326jwilxju7hy08xqnyxckf&st=snot4one&raw=1"
            alt="The Clarity Workshop"
            className="h-6 md:h-8 object-contain"
          />
          <div className="text-gray-600 text-sm md:text-base">
            © The Clarity Workshop 2025
          </div>
        </div>
      </div>
    </footer>
  );
}