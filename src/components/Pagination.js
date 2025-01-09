import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/pagination.css';
import { sideContext } from '../context/Context';

const Pagination = ({ totalItems }) => {

  const{currentpage,setCurrentpage,pageNumber,setSelectedIds}=useContext(sideContext)

  const totalPages = Math.ceil(totalItems / pageNumber);

  const handlePageChange = (pageNumberFromInput) => {
    if (pageNumberFromInput >= 0 && pageNumberFromInput < totalPages) {
      setCurrentpage(pageNumberFromInput);
      setSelectedIds([])
    }
  };
  

  return (
    <div className="pagination-main">
      <button
        className="pagination-btn-prev"
        onClick={() => handlePageChange(currentpage - 1)}
        disabled={currentpage === 0}
        aria-label="Previous Page"
      >
        Prev
      </button>
      <button
        className="pagination-btn-prev"
        onClick={() => handlePageChange(currentpage + 1)}
        disabled={currentpage === totalPages - 1}
        aria-label="Next Page"
      >
        Next
      </button>
      <select
        name="pagination"
        id="pagination"
        value={currentpage}
        onChange={(e) => handlePageChange(parseInt(e.target.value, 10))}
        aria-label="Select Page"
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <option key={i} value={i}>{i + 1}</option>
        ))}
      </select>
      <span>
        Total: <strong style={{ fontSize: '18px' }}>{totalPages}</strong>
      </span>
    </div>
  );
};


export default Pagination;
