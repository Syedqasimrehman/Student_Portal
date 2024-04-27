// import CreateSemester from "./CreateSemester";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateSemester from "./CreateSemester";
import SemesterTable from "./SemesterTable";
const Semesters = () => {
  const [GoTopage, setGoTopage] = useState(false);
  const handleClick = () => {
    setGoTopage(true);
  };
  useEffect(() => {
    const storedGoTopage = localStorage.getItem("GoTopage");
    if (storedGoTopage) {
      setGoTopage(JSON.parse(storedGoTopage));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("GoTopage", JSON.stringify(GoTopage));
  }, [GoTopage]);
  return (
    <>
      {GoTopage ? (
        <CreateSemester />
      ) : (
        <div className="teacher-section">
          <h2 className="Title-teacher">Semesters/List</h2>
          <span className="dem-line"></span>
          <div className="Create-techer">
            <h3 className="teacher-list">Semesters</h3>
            <button className="cre-teacher" onClick={handleClick}>
              Add Semester
            </button>
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
          <SemesterTable />
        </div>
      )}
    </>
  );
};

export default Semesters;
