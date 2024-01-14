import TeacherTable from "./TeachersTable";
const Teachers = () => {
  return (
    <>
      <div className="teacher-section">
        <h2>Teachers/List</h2>
        <div className="Create-techer">
          <h3 className="teacher-list">Teacher's</h3>
          <button className="cre-techer">Add Teacher</button>
        </div>
        <div className="teacher-table">
          <input type="search" placeholder="search"></input>
          <select>
            {" "}
            <option value=" Semester 1st">Semester 1st</option>
            <option value=" Semester 2nd">Semester 2nd</option>
            <option value=" Semester 4th">Semester 4th</option>
            <option value=" Semester 5th">Semester 5th</option>
            <option value=" Semester 6th">Semester 6th</option>
            <option value=" Semester 7th">Semester 7th</option>
            <option value=" Semester 8th">Semester 8th</option>
          </select>
        </div>
        <TeacherTable/>
      </div>
    </>
  );
};

export default Teachers;
