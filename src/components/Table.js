import React, { useContext } from "react";
import "../styles/table.css";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsBookmarkStar } from "react-icons/bs";
import { sideContext } from "../context/Context";


const Table = ({displayData,setRawData,handleCheckBoxChange, currentPath}) => { 
  
  const {
      setSelectedApplicants,setRejectedApplicants,setBookMarkedApplicants,
      downloadRef,selectedIds
      }=useContext(sideContext)

  const handleSelectApplicant=(applicant)=>{
    setSelectedApplicants(prev=>[...prev,applicant])
    setRawData((prev) => prev.filter((item) => item.id !== applicant.id));
    setBookMarkedApplicants((prev)=>prev.filter((item)=>item.id!==applicant.id))
  }  
  const handleBookmarkApplicant=(applicant)=>{
    setBookMarkedApplicants((prev) => [...prev, applicant]);
    setRawData((prev) => prev.filter((item) => item.id !== applicant.id));
    setSelectedApplicants((prev=>prev.filter((item)=>item.id!==applicant.id)))
  }
  const handleRejectApplicant=(applicant)=>{
    setRejectedApplicants(prev=>[...prev, applicant])
    setRawData((prev) => prev.filter((item) => item.id !== applicant.id));
    setBookMarkedApplicants((prev)=>prev.filter((item)=>item.id!==applicant.id))
    setSelectedApplicants((prev=>prev.filter((item)=>item.id!==applicant.id)))
  }  

  return (
    <div className="table-outer-sec" >      
      <table className="applicant-table">
        <thead>
          <tr>
            <th className="table-select-th">Select</th>
            <th>Image</th>
            <th>Name</th>
            <th>Education</th>
            <th>Role</th>
            <th className="tooltip-exp" tooltip="Experience in years">
              Experience
            </th>
            <th>Place</th>
            <th>Mobile</th>
            <th>Email</th>
            <th className="table-action-th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayData.length > 0 ? 
          displayData.map((each, index) => (
            <tr key={index} >              
              <td className="table-select-td">
                <input type="checkbox"
                  onChange={()=>handleCheckBoxChange(each.id)} 
                  checked={selectedIds.includes(each.id)}                                   
                />
              </td>
              <td>
                <img src={each.url} alt="Applicant_Image" />
              </td>
              <td className="table-name">{each.name}</td>
              <td><i className="fa-solid fa-graduation-cap"></i>{each.education}</td>
              <td><i className="fa-solid fa-user-tie"></i>{each.role}</td>
              <td><i className="fa-solid fa-clock"></i>{each.experience} {each.experience===1 ? 'year':'years'}</td>
              <td><i className="fa-solid fa-location-dot"></i>{each.place}</td>
              <td><i className="fa-solid fa-phone"></i>{each.mobile}</td>
              <td><i className="fa-solid fa-envelope"></i>{each.email}</td>
              <td className="table-action-td">
                <div className="table-action-btn-sec">
                  <button className="action-btn" onClick={()=>handleSelectApplicant(each)}>
                  <FaRegCircleCheck
                    style={{display:currentPath==='/selected' ? 'none': 'block'}}
                    className="icon-select" />
                </button>
                <button className="action-btn" onClick={()=>handleBookmarkApplicant(each)}>
                  <BsBookmarkStar
                  style={{display:currentPath==='/bookmarks'? 'none': 'block'}}
                  className="icon-bookmark" />
                </button>
                <button className="action-btn action-btn-middle" onClick={()=>handleRejectApplicant(each)}>
                  <MdOutlineCancel className="icon-reject" />
                </button>
                <button className="action-btn">
                <a
                href="/files/sample-resume.pdf"
                download="Sample_Resume.pdf"
                ref={(domEl) => downloadRef.current[each.id] = domEl}
                >
                <MdOutlineFileDownload className="icon-download" />
                </a>
                </button>
                </div>
              </td>
            </tr>
          ))
          :
          <tr>
            <td colSpan='11'className="err-msg" >No data</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
