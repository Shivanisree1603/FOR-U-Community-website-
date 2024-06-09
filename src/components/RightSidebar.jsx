import React from 'react';
import {Link} from 'react-router-dom'

const RightSidebar = () => {
  return (
    <div className="fixed top-16 right-0 w-64 bg-white h-screen shadow-md p-4">
      <div className="flex flex-col space-y-4">
        <h2 className="text-sm font-semibold text-gray-700">Recent Posts</h2>
        <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">I just found out about Typer...</a>
        <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">The meaning of LHOST and RHOST?</a>
        {/* Add more recent posts here */}
      </div>
    </div>
  );
};

export default RightSidebar;
