import React,{ useEffect, useContext, useMemo} from 'react'
import { useLocation } from 'react-router-dom'
import { sideContext } from '../context/Context';
import DashboardCard from '../components/DashboardCard';
import Footer from '../components/Footer';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import Filter from '../components/Filter';


const SelectedProfile = () => {

  const locationOjb=useLocation()
  const currentPath=locationOjb.pathname;

  const{
      lastPath, setLastPath,rawData,setRawData,
      selectedApplicants,filters,startIndex,endIndex,
      selectedIds,setSelectedIds
     }=useContext(sideContext)
  

  useEffect(()=>{
    setLastPath(currentPath)
  },[currentPath])

  const filteredData = useMemo(() => {
        let result = selectedApplicants;
    
        if (filters.role) {
          result = result.filter(
            (each) => each.role.replace(/\s+/g, '').toLowerCase() === filters.role
          );
        }
        if (filters.experience) {
          result = result.filter((each) => each.experience === filters.experience);
        }
        return result;
      }, [filters, rawData,selectedApplicants]);
      
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

      console.log(lastPath,'From the Selected profile ')

  return (
    <div className="dashboard-main">
      <DashboardCard rawData={rawData}/>
      <Filter
        filters={filters} 
        paginatedDataLength={paginatedData.length}  
        handleSelectAll={handleSelectAll}              
      />
      <Table
        displayData={paginatedData}
        setRawData={setRawData}
        handleCheckBoxChange={handleCheckBoxChange} 
        currentPath={currentPath} 
      />
       <Pagination totalItems={filteredData.length}/> 
      <Footer/>
    </div>    
  )
}

export default SelectedProfile