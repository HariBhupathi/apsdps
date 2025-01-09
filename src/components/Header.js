import React, { useContext, useState } from 'react'
import '../styles/header.css'
import logo from '../assets/logo/ap-logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {sideContext} from '../context/Context'

const Header = () => {

  const { setIsNavMobView,isNavMobView,logout } = useContext(sideContext);
  
  return (
    <div className="header-main">
      <div className="header-left">
        <img src={logo} alt='AP-logo' className='header-logo' />
        <div className="header-text">
        <h1 className='header-heading'>Andhra pradesh State Development Planning society</h1>
        <h1 className='header-heading-mob'>APSDPS</h1>
        <p className='header-para' >Planning Department, Governmanet of Andhrapradesh</p>
        </div>
      </div>
      <div className="header-right">
        <button className='header-logout-btn' onClick={()=>logout()}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          LOGOUT
          </button>
        <button className='header-burger' onClick={()=>setIsNavMobView(!isNavMobView)}>
          {isNavMobView ? <IoMdClose style={{color:'red'}} />:<GiHamburgerMenu/> }
          </button></div>
    </div>
  )
}

export default Header