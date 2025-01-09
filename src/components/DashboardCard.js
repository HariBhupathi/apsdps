import React, { useContext } from 'react'
import '../styles/dashboardcard.css'
import { sideContext } from '../context/Context';
import data from '../api/ApplicantData'

const DashboardCard = ({rawData} ) => {

  const {selectedApplicants,rejectedApplicants,bookMarkedApplicants} = useContext(sideContext);

  const getCountsByCategory = (category) => {
    const rawTotal=data.length;
    const total = rawData.filter((app) => app.role === category).length;
    const selected = selectedApplicants.filter((app) => app.role === category).length;
    const rejected = rejectedApplicants.filter((app) => app.role === category).length;
    const bookmark = bookMarkedApplicants.filter((app) => app.role === category).length;
    return {rawTotal, total, selected, rejected,bookmark };
  };

  const categories = ["Sr Consultant", "Consultant", "Data Analyst", "Trainee"];

  return (
    <div className="dash-card-outer">
      <h4 className='dash-card-heading' >Total applied candidates position wise </h4>
    <div className="dash-card-main">  
      {
        categories.map((category,index)=>{
          const {rawTotal, total, selected, rejected ,bookmark} = getCountsByCategory(category);
          return(
            <div key={index} className="dash-card">
            <div className="dash-card-title">{category}</div>
            <div className="dash-card-content">
              <span>Total applied </span>
              <span>-</span>
              <span>{total} / {rawTotal}</span>
            </div>
            <div className="dash-card-content">
              <span>Selected Profiles</span>
              <span>-</span>
              <span>{selected} </span>
            </div>
            <div className="dash-card-content">
              <span>Bookmark</span>
              <span>-</span>
              <span>{bookmark}</span>
            </div>
            <div className="dash-card-content">
              <span>Rejected profiles</span>
              <span>-</span>
              <span>{rejected} </span>
            </div>
            </div> 
          )

        })
      } 
    </div>

    </div>
  )
}

export default DashboardCard