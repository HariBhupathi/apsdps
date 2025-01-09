import React, { useEffect, useRef, useState } from 'react'
import { createContext } from 'react'
import data from '../api/ApplicantData';
import Cookies from 'js-cookie';

export const sideContext=createContext()

export const Context = ({children} ) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [lastPath, setLastPath] = useState('/');
  
  const [isNavMobView, setIsNavMobView ]=useState(false)  
  const [rawData, setRawData] = useState(data); 
    
  const [filters, setFilters] = useState({ role: '', experience: '' });
  const [selectedApplicants, setSelectedApplicants] = useState([]);
  const [bookMarkedApplicants, setBookMarkedApplicants] = useState([])
  const [rejectedApplicants, setRejectedApplicants] = useState([]);    
  const [currentpage, setCurrentpage] = useState(0);  
  const [selectedIds, setSelectedIds]=useState([])
  const [pageNumber] = useState(5);

  useEffect(() => {
    const storedToken = Cookies.get('accessToken');
    const storedLastPath = localStorage.getItem('lastPath');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
    if (storedLastPath) {
      setLastPath(storedLastPath);
    }
  }, []);

  const login = async (username, password) => {
    if (username === 'apsdps' && password === '123') {
      const fakeToken = 'fakeToken';
      Cookies.set('accessToken', fakeToken, { expires: 1 });
      setIsAuthenticated(true);
      setToken(fakeToken);
      console.log('Login Successful');
      return true;
    } else {
      console.log('Invalid credentials');
      return false;
    }
  };    
  
    const downloadRef=useRef({});
    const startIndex = pageNumber * currentpage;
    const endIndex = startIndex + pageNumber;
    const handleDownloadAll=()=>{
      selectedIds.forEach((each)=>downloadRef.current[each]?.click());
      setSelectedIds([])
      alert('Download..');     
    }
    const clearSearch=()=>{
      setFilters({ role: '', experience: '' });
    }    
    const clearAll = () => {
      setCurrentpage(0);
      setFilters({ role: '', experience: '' });
      setSelectedIds([])
      setRawData(data)
      setSelectedApplicants([])
      setBookMarkedApplicants([])
      setRejectedApplicants([])
    };  

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    Cookies.remove('accessToken');
    localStorage.removeItem('lastPath'); 
    console.log('Logout successful');
  };

  return (
    <sideContext.Provider value={{ 
      login,  
      isAuthenticated, setIsAuthenticated,
      token, setToken,
      lastPath, setLastPath,
      isNavMobView, setIsNavMobView,
      rawData,setRawData,
      filters,setFilters,
      currentpage, setCurrentpage,
      selectedIds, setSelectedIds,
      pageNumber,
      selectedApplicants, setSelectedApplicants,
      rejectedApplicants, setRejectedApplicants,
      bookMarkedApplicants, setBookMarkedApplicants,
      clearSearch,
      clearAll,
      handleDownloadAll,
      downloadRef,
      startIndex,endIndex,
      logout
      }} >
        {children}
    </sideContext.Provider>
  )
}
