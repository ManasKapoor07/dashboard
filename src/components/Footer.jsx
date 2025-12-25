import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t p-10 border-gray-200">
      <div className=" px-4 text-center">
        
        <p className="text-xs sm:text-sm text-[#262626]">
          © Copyright 2025 NetBramha Studio LLP. All Rights Reserved.
        </p>

        <div className="mt-3 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-x-6 text-xs sm:text-sm text-[#262626]">
          <a href="#" className="underline hover:text-black">
            FAQs
          </a>
          <a href="#" className="underline hover:text-black">
            Terms and Conditions
          </a>
          <a href="#" className="underline hover:text-black">
            Privacy Policy
          </a>
          <a href="#" className="underline hover:text-black">
            Raise a Dispute
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

