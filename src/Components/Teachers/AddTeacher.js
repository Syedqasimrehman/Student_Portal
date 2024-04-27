import ImageUploader from "./ImageUploader";
const AddTeacher = () => {
  return (
    <>
    {/* <tailwindConfig/> */}
      <h2 className="Title-teacher text-3xl underline">Add New Teacher</h2>
      <span className="dem-line"></span>
      <div className="AddTeacher">
        <div className="selections">
          <div className="inputs-data ">
            {" "}
            <lable className="Lable-data " htmlfor="Name">
              Teacher Name
            </lable>
            <input
              name="Name"
              className="add-tec input-data"
              type="Name"
              id="Name"
              placeholder="Enter Teacher Name"
              required
            ></input>
          </div>
          <div className="inputs-data ">
            <lable className="Lable-data " htmlfor="Name">
              Teacher PhoneNumber
            </lable>
            <input
              className="add-tec input-data"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="+92-000-000-000"
            ></input>
          </div>
        </div>
        <div className="selections">
          <div className="section-1 section-selection ">
            <lable className="Lable-data" htmlfor="Subjects">
              Subjects
            </lable>
            <select className="add-selection" id="Subjucts">
              {" "}
              <option value="">Islamic Study</option>
              <option value="">Programming Fundamental</option>
              <option value="">Civic and Its Community Engagment</option>
              <option value="">Functional English</option>
              <option value="">Information and Communation Technology</option>
              <option value="">Phyiscs</option>
            </select>
          </div>
          <div className="section-2 section-selection">
            <lable className="Lable-data" htmlfor="Semesters">
              Semesters
            </lable>
            <select className="add-selection" id="Semesters">
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
        </div>
        <div className="image">
          <ImageUploader/>
        </div>
        <div className="text-area">
          <lable className="Lable-data" htmlfor="Description">
            Description
          </lable>
          <textarea
            className="descrip"
            id="Description"
            type="textarea"
            placeholder="Description"
            required
          ></textarea>
        </div>
        <div className="btn-div-tec-add">
          <button className="add-btn btn">Add</button>
          <button className="back-btn btn">Back</button>
        </div>
      </div>
    </>
  );
};

export default AddTeacher;
