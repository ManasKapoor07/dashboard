import { useState } from "react";
import profileImage from "../assets/profile.svg";
import languageImage from "../assets/Language.svg";
import expandImage from "../assets/expand_more.svg";
import helpImage from "../assets/help.svg";
import logoutImage from "../assets/logout.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-14 bg-white border-b border-gray-200 flex items-center justify-end px-4 lg:px-6">
      
      <div className="hidden lg:flex items-center gap-8 text-sm text-gray-700">
        <button className="flex items-center gap-2 hover:text-black">
          <img src={helpImage} className="w-5 h-5" />
          <span>How It Works</span>
        </button>

        <button className="flex items-center gap-2 hover:text-black">
          <img src={languageImage} className="w-6 h-6" />
          <span>English</span>
          <img src={expandImage} className="w-2 h-2" />
        </button>

        <button className="flex items-center gap-2 hover:text-black">
          <img src={profileImage} className="w-5 h-5" />
          <span>My Account</span>
        </button>

        <button className="flex items-center gap-2 hover:text-black">
          <img src={logoutImage} className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>

      <div className="lg:hidden relative">
        <button onClick={() => setOpen(prev => !prev)}>
          <img src={profileImage} className="w-6 h-6" />
        </button>

        {open && (
          <div className="absolute right-0 top-10 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <button className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-50">
              <img src={helpImage} className="w-4 h-4" />
              <span>How It Works</span>
            </button>

            <button className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-50">
              <img src={languageImage} className="w-4 h-4" />
              <span>English</span>
            </button>

            <button className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-50">
              <img src={profileImage} className="w-4 h-4" />
              <span>My Account</span>
            </button>

            <button className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-50 text-red-600">
              <img src={logoutImage} className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
