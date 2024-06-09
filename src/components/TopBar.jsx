import React from 'react';
import {Link} from 'react-router-dom'

const TopBar = () => {
  return (
    <div className="fixed w-full bg-yellow-400 shadow-md p-2 flex justify-between items-center z-10">
      <div className="flex items-center">
        <Link to="/dashboard">
        <img src="images\Logo-y.png" alt="Logo" className="w-15 h-12 ml-3 shadow rounded-lg " />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <input 
          type="text" 
          placeholder="Search" 
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />

        {/* POst */}
        <Link to="/createpost">
        <button className="p-2 bg-black text-white rounded focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
        </Link>
        

        {/* Notification */}
        <button className="p-2 rounded-full focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        </button>
        <Link to="/profile">
        <button className="px-2  rounded-full focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
