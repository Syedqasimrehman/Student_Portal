import { useState } from "react";
const TeacherTable = () => {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Muhammad Tuqeer",
      description: "ICT Teacher",
      subject: "Information and communication Technology",
      semester: "Semester 1st",
    },
  ]);
  const handleEdit = (id) => {
    console.log(`Editing teacher with ID ${id}`);
  };
  const handleDelete = (id) => {
    setTeachers((prevTeachers) =>
      prevTeachers.filter((teacher) => teacher.id !== id)
    );
  };
  return (
    <>
      <table>
        <thead>
          <tr>
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
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>Muhammad Tuqeer</td>
              <td>ICT Teacher</td>
              <td>Information and communication Technology</td>
              <td>Semester 1st</td>
              <td>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TeacherTable;
