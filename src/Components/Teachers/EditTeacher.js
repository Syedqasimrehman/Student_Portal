// import "../Styles/Popup.css"
const EditTeacher = (props) => {
  return props.trigger ? (
    <>
      <div className="popup">
        <div className="popup-data">
            
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
          <div className="inside-popup">
            <h2 className="heading-in">Edit Your Teacher Detail's</h2>
            <label htmlFor="Name">Teacher Name <span>*</span></label>
            <input className="input-data pop-in name-data" id="Name" type="name" placeholder="Teacher Name" required></input>
            <select className="selection-data" value="se">
              <option value=" Semester 1st">Semester 1st</option>
              <option value=" Semester 2nd">Semester 2nd</option>
              <option value=" Semester 2nd">Semester 3rd</option>
            </select>
            <select className="selection-data" placeholder="Select Subject" defaultChecked="Select">
              <option value=" Semester 1st">Functional English</option>
              <option value=" Semester 2nd">Programming Fundimantal</option>
              <option value=" Semester 2nd">Physics</option>
            </select>
            <textarea
              className="descrip"
              id="Description"
              type="textarea"
              placeholder="Description"
            ></textarea>
            <label htmlFor="Name">Subject ID <span>*</span> </label>
            <input className="input-data pop-in id" id="id" type="number" placeholder="ID" required></input>
            <div className="btn-div-tec-add">
              <button className="update btn-data">Update</button>
            </div>
          </div>
          {props.Children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default EditTeacher;
