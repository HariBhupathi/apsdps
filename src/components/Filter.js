import React, { useContext } from 'react';
import '../styles/filter.css';
import { FaDownload } from "react-icons/fa";
import { sideContext } from '../context/Context';

const filterCriteria = ["Sr Consultant", "Consultant", "Data Analyst", "Trainee"];

const Filter = ({paginatedDataLength,handleSelectAll}) => {

  const{    
    startIndex,filters, setFilters, 
    rejectedApplicants,bookMarkedApplicants,selectedApplicants,
    handleDownloadAll,selectedIds,
    clearSearch,
    clearAll
    }=useContext(sideContext)
  

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) =>
      name === 'experience'? { ...prev, [name]: parseInt(value, 10) || '' }: { ...prev, [name]: value });
    };

  return (
    <div className="filter-main">
      <div className="filter-selectall">
        <input type="checkbox"
        onChange={handleSelectAll}
        checked={selectedIds.length===paginatedDataLength && paginatedDataLength>0}
        />
        <label> Select all</label>
      </div>
      <div className="filter-select">
        <select
          value={filters.role}
          name="role"
          id="role"
          onChange={handleFilterChange}          
        >
          <option value="">Select Position</option>
          {filterCriteria.map((each, index) => (
            <option key={index} value={each.replace(/\s+/g, '').toLowerCase()}>
              {each}
            </option>
          ))}
        </select>
        <select
          name="experience"
          id="experience"
          value={filters.experience}
          onChange={handleFilterChange}
        >
          <option value="">Select Experience</option>
          {[...Array(10).keys()].map((each, index) => (
            <option key={index} value={parseInt(each, 10) + 1}>
              {each + 1}
            </option>
          ))}
        </select>
        <div className="filter-download-btn">
          <button
            disabled={filters.role==='' && filters.experience===''}
            onClick={clearSearch}
          >Clear Search</button>
        </div>
        <div className="filter-download-btn">
          <button
          disabled={
          filters.role==='' && filters.experience===''
          && selectedIds.length===0 
          && startIndex===0          
          && rejectedApplicants.length===0
          && bookMarkedApplicants.length===0
          && selectedApplicants.length===0
          }
          onClick={clearAll}>Clear All</button>
        </div>
      </div>
      <div className="filter-download-btn">
        <button
        onClick={handleDownloadAll}                
        disabled={selectedIds.length===0}
        >
        Download all &nbsp; <FaDownload />
        </button>          
      </div>
    </div>
  );
};

export default Filter;
