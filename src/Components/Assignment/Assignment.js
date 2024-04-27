import React from "react";
const Assignment = () => {
  return (
    <div className="assignment">
    <div className="teacher-section">
        <h2 className="Title-teacher">Assignments/List's</h2>
        <span className="dem-line"></span>
        <div className="Create-techer">
          <h3 className="teacher-list">Assignment's</h3>
          <button className="cre-teacher schu-btn"
        //    onClick={handleClick}
          >Add New Assignment</button>
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
      </div>
    </div>
  );
};

export default Assignment;
