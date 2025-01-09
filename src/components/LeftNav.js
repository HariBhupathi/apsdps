import React, { useContext, useState } from 'react';
import '../styles/leftnav.css';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai";
import { BsBookmarkStar } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import {sideContext} from '../context/Context'


const LeftNav = () => {
  
  const {isNavMobView,setIsNavMobView, location, logout}=useContext(sideContext)
  

  return (
    <>
      <div className={`leftnav-main ${isNavMobView ? 'active':''} `}>
        <ul>
          <li className={`${location==='/' ? 'active':''}`} onClick={()=>setIsNavMobView(!isNavMobView)}>
            <Link to="/"><AiOutlineDashboard className="leftnav-icon " />&nbsp; Dashboard</Link>
          </li>
          <li className={`${location==='/bookmarks' ? 'active':''}`} onClick={()=>setIsNavMobView(!isNavMobView)}>
            <Link to="/bookmarks"><BsBookmarkStar className="leftnav-icon" />&nbsp; Bookmarks</Link>
          </li>
          <li className={`${location==='/selected' ? 'active ':''} `} onClick={()=>setIsNavMobView(!isNavMobView)}>
            <Link to="/selected"><FaRegCircleCheck className="leftnav-icon " />&nbsp; Selected Profiles</Link>
          </li>
          <li className="leftnav-logout"
          onClick={()=>{setIsNavMobView(!isNavMobView); logout()}} 
          >
            <Link><LuLogOut className="leftnav-icon" />&nbsp; LOGOUT</Link>
          </li>          
        </ul>
      </div>
    </>
  );
};

export default LeftNav;
