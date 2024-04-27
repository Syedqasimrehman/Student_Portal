import { useState } from "react";
import EditTeacher from "./EditTeacher";
const TeacherTable = ({reachers, onEdit, onDelete }) => {
  const [OpenPopup, SetOpenPopup] = useState(false);
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Muhammad Tuqeer",
      description: "ICT Teacher",
      subject: "Information and communication Technology",
      semester: "Semester 1st",
    },
    {
      id: 2,
      name: "Sir Fahad ",
      description: "English Teacher",
      subject: "Functional English",
      semester: "Semester 1st",
    },
  ]);
 
  
  // const handleEdit = (id) => {
  //   console.log(`Editing teacher with ID ${id}`);
  // };
  // const handleDelete = (id) => {
  //   setTeachers((prevTeachers) =>
  //     prevTeachers.filter((teacher) => teacher.id !== id)
  //   );
  // };
  return (
  
    <>
      <table>
        <thead>
          <tr className="tr-head">
            <th>ID</th>
            <th>Teacher Name</th>
            <th>Description</th>
            <th>Subject</th>
            <th>Semester</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr className="tr-body" key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.description}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.semester}</td>
              <td>
              <button className="pen-btn btn" onClick={() => {SetOpenPopup(true);}}> <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                    </svg></button>
                    <EditTeacher trigger={OpenPopup} setTrigger={SetOpenPopup} />
                
                <button className="delete-btn btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash2-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TeacherTable;
