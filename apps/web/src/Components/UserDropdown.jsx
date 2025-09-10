import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BiSolidUser } from "react-icons/bi";

const UserDropdown = () => {
  const [isopen, setIsopen] = useState(false);

  return (
    <div>
      <button className="inline-flex items-center justify-center  w-8 h-8 rounded-md bg-gradient-to-tr  from-blue-200 to-yellow-200 text-blue-700  transition border border-blue-300 cursor-pointer">
        <BiSolidUser size={25} onClick={() => setIsopen((prev) => !prev)} />
      </button>
      {isopen && (
        <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 animate-fade-in overflow-hidden">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200 rounded-t-xl">
            <p className="text-xs text-gray-500">Signed in as</p>
            <p className="text-sm font-semibold text-gray-800 truncate">
              {"userEmail"}
            </p>
          </div>
          <span>
            <button className="w-full text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-red-50 transition cursor-pointer">
              <Link to=""> Statements </Link>
            </button>
          </span>
          <div className="border-t border-gray-100" />
          <button className="w-full text-left px-5 py-3 text-sm text-red-600 hover:bg-red-50 transition cursor-pointer">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
