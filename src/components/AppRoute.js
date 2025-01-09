import React, { useContext } from 'react'
// import '../styles/approute.css'
import { Routes, Route,Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import Bookmarks from '../pages/Bookmarks'
import SelectedProfile from '../pages/SelectedProfile'
import LeftNav from './LeftNav';
import Header from './Header';
import { sideContext } from '../context/Context';
import PageNotFound from './PageNotFound';
 

const AppRoute = () => {

  const {isAuthenticated}=useContext(sideContext)
  
  if (!isAuthenticated) return <Navigate to="/login" replace />;


  return (
    <>
    <Header />
    <div className="main-container">
      <LeftNav />
      <div className="content" style={{ backgroundColor: '#e6e0e014' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/selected" element={<SelectedProfile />} />          
        </Routes>
      </div>
    </div>
  </>
  )
}

export default AppRoute