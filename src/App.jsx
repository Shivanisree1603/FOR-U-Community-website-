import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import FAQ from './components/FAQ.jsx'
import Dashboard from './components/Dashboard.jsx'
import Sidebar from './components/Sidebar.jsx'
import RightSidebar from './components/RightSidebar.jsx'
import MainContent from './components/MainContent.jsx'
import TopBar from './components/TopBar.jsx'
import CreatePost from './components/CreatePost.jsx'
import Help from './components/Help.jsx';
import Profile from './components/Profile.jsx'

import Register from './components/Register.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
  <BrowserRouter>
    <div>

    <div className="">
          <nav>
            <ul className="">
              <li>
                <Link to="/"></Link>
              </li>  
              <li>
                <Link to="/dashboard"></Link>
              </li>
              <li>
                <Link to="/login"></Link>
              </li> 
               
              <li>
                <Link to="/help"></Link>
              </li> 
              <li>
                <Link to="/FAQ"></Link>
              </li> 
              <li>
                <Link to="/profile"></Link>
              </li> 
              <li>
                <Link to="/createpost"></Link>
              </li>
              <li>
                <Link to="/register"></Link>
              </li>  
            </ul>
          </nav>
        </div>
        
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/help" element={<Help />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
    </Routes>
    
    </div>
    </BrowserRouter>

  )
}

export default App
