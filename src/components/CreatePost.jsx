import React from 'react';
import Sidebar from './Sidebar';
import Post from './Post';
import TopBar from './TopBar';
import RightSidebar from './RightSidebar';
import {Link} from 'react-router-dom'


const Dashboard = () => {
  return (
    <>
      <TopBar />
      <>
        <Sidebar />
        <Post />
        <RightSidebar />
      </>
    </>
  );
};

export default Dashboard;
