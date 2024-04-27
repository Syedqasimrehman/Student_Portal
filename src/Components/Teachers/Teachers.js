import  React  from "react";
import TeacherTable from "./TeachersTable";
import AddTeacher from "./AddTeacher";
import { useState } from "react";
import EditTeacher from "./EditTeacher";
// import Popup from 'reactjs-popup';
const Teachers = () => {
  const [GoTopage , setGoTopage] = useState(false);
  const handleClick = () =>{
    setGoTopage(true);
  }
  return (
    <>
     {GoTopage ? (
        <AddTeacher />
      ) : (
      <div className="teacher-section">
        <h2 className="Title-teacher">Teachers/List</h2>
        <span className="dem-line"></span>
        <div className="Create-techer">
          <h3 className="teacher-list">Teacher's</h3>
          <button className="cre-teacher" onClick={handleClick}>Add Teacher</button>
        </div>
        <span className="dem-line"></span>
        <div className="teacher-table">
          <input
            className="input-data"
            type="search"
            placeholder="Search"
          ></input>
          <select>
            {" "}
            <option value=" Semester 1st">Semester 1st</option>
            <option value=" Semester 2nd">Semester 2nd</option>
            <option value=" Semester 2nd">Semester 3rd</option>
            <option value=" Semester 4th">Semester 4th</option>
            <option value=" Semester 5th">Semester 5th</option>
            <option value=" Semester 6th">Semester 6th</option>
            <option value=" Semester 7th">Semester 7th</option>
            <option value=" Semester 8th">Semester 8th</option>
          </select>
        </div>
        <span className="dem-line"></span>
        <TeacherTable />
      </div>
      )}
    </>
  );
};

export default Teachers;
