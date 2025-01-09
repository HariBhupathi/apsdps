// Dashboard Component
import React, { useState, useContext, useEffect, useMemo , useRef} from 'react';
import { useLocation } from 'react-router-dom';
import { sideContext } from '../context/Context';
import DashboardCard from '../components/DashboardCard';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import Table from '../components/Table';
import Pagination from '../components/Pagination';


const Dashboard = () => {
  const {
    setLastPath,lastPath,    
    rawData,setRawData,
    filters,setFilters,
    currentpage, setCurrentpage,
    selectedIds, setSelectedIds,
    pageNumber,    
    handleDownloadAll,    
    startIndex,endIndex      
   } = useContext(sideContext);

  const locationObj = useLocation();
  const currentLocation = locationObj.pathname;

  useEffect(() => {
    setLastPath(currentLocation);
  }, [currentLocation]);
  
  

  const filteredData = useMemo(() => {
    let result = rawData;

    if (filters.role) {
      result = result.filter(
        (each) => each.role.replace(/\s+/g, '').toLowerCase() === filters.role
      );
    }
    if (filters.experience) {
      result = result.filter((each) => each.experience === filters.experience);
    }
    return result;
  }, [filters, rawData]);
  
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleCheckBoxChange=(id)=>{    
    setSelectedIds((prev)=> prev.includes(id) ? prev.filter((each)=>each!==id):[...prev,id])
  }

  const handleSelectAll=()=>{
    if(selectedIds.length===paginatedData.length){
      setSelectedIds([])
    }else{
      setSelectedIds(paginatedData.map((each)=>each.id))
    }
  }
  
  console.log(lastPath,'From the Dashabord ')

  return (
    <div className="dashboard-main">
      <DashboardCard
        rawData={rawData}        
      />
      <Filter
        filters={filters} 
        setFilters={setFilters}        
        paginatedDataLength={paginatedData.length}        
        handleDownloadAll={handleDownloadAll}  
        selectedIds={selectedIds}  
        handleSelectAll={handleSelectAll}
        startIndex={startIndex}      
      />
      <Table
        displayData={paginatedData}
        setRawData={setRawData}
        handleCheckBoxChange={handleCheckBoxChange}          
      />
      <Pagination
        currentpage={currentpage}
        setCurrentpage={setCurrentpage}
        pageNumber={pageNumber}
        totalItems={filteredData.length}
      />
      <Footer />
    </div>
  );
};

export default Dashboard;