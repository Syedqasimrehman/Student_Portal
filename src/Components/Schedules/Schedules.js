import ScheduleTable from "./ScheduleTable";
import AddSchedule from "./AddSchedule";
import React, {useState} from "react";
const Schedules = () => {

const [GoTopage , setGoTopage] = useState(false);
const handleClick = () =>{
 setGoTopage(true);
}
    return ( 
        <>
  
     {GoTopage ? (
        <AddSchedule />
      ) : ( 
      <div className="teacher-section">
        <h2 className="Title-teacher">Schedules/List's</h2>
        <span className="dem-line"></span>
        <div className="Create-techer">
          <h3 className="teacher-list">Schedule's</h3>
          <button className="cre-teacher schu-btn"
           onClick={handleClick}
          >Create New Schedule</button>
        </div>
        <span className="dem-line"></span>
        <div className="teacher-table">
          <input
            className="input-data"
            type="search"
            placeholder="Search"
          ></input>
        </div>
        <span className="dem-line"></span>
        <ScheduleTable/>
      </div>
       )}
    </>
  );
}
 
export default Schedules;