// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <nav className="bg-white w-64 p-4 shadow-lg">
//         <div className="flex items-center space-x-2 mb-6">
//           <img src="logo.png" alt="Logo" className="w-10 h-10" />
//           <span className="text-xl font-semibold">For U</span>
//         </div>
//         <ul>
//           <li className="mb-4">
//             <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
//               <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18" />
//               </svg>
//               Home
//             </a>
//           </li>
//           <li className="mb-4">
//             <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
//               <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//               Popular
//             </a>
//           </li>
//           <li className="mb-4">
//             <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
//               <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//               </svg>
//               All
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Main content */}
//       <div className="flex-1 p-6">
//         <header className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold">r/developersIndia</h1>
//           <button className="p-2 bg-gray-200 rounded focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </header>
//         <div className="bg-white p-4 rounded shadow-md">
//           <p className="text-gray-700">Hi, I'm Ayush Garg. Cofounder & CTO @ Portkey AI. AMA.</p>
//         </div>
//         <div className="mt-6">
//           <div className="bg-white p-4 rounded shadow-md">
//             <p className="text-gray-700">What's the story behind your longest-running personal project?</p>
//           </div>
//         </div>
//         {/* More content can be added here */}
//       </div>

//       {/* Right Sidebar */}
//       <aside className="hidden lg:block w-64 p-4 bg-gray-50 shadow-md">
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold">The developersIndia Community</h2>
//           <p className="text-gray-700">A wholesome community made by & for software & tech folks in India. Have a doubt? Ask it out.</p>
//         </div>
//         <div className="mb-6">
//           <h3 className="text-md font-semibold">Rules</h3>
//           <ul className="list-decimal list-inside text-gray-700">
//             <li>Search the Internet, this Subreddit and our wiki before posting</li>
//             <li>Always use the right flair for your posts</li>
//             <li>Don't Post Low Quality Posts</li>
//             <li>Don't Post Generic Questions</li>
//           </ul>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import Sidebar from './Sidebar';
import HelpContent from './HelpContent';
import TopBar from './TopBar';
import RightSidebar from './RightSidebar';
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <>
        <Sidebar />
        <HelpContent />
        <RightSidebar />
      </>
    </>
  );
};

export default Dashboard;
