import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Assignment from "./Components/Assignment/Assignment";
import Schedules from "./Components/Schedules/Schedules";
import Teachers from "./Components/Teachers/Teachers";
import Semesters from "./Components/Semester/Semesters";
import Friends from "./Components/Friends/Friends";
import Subjects from "./Components/Subjects/Subjects";
import Notes from "./Components/notes/Notes";
import EditTeacher from "./Components/Teachers/EditTeacher";
import DarkMode from "./Components/DarkMod";
// import Popup from 'reactjs-popup';
function App() {
  return (
    <Router>
      <div className="App bg-cyan-950 text-white">
      {/* <DarkMode/> */}
        <Navbar />
        <div>
          <Routes>
            <Route className="dash" path="/" element={<Dashboard/>}/>
            <Route path="/assignments" element={<Assignment/>}/>
            <Route path="/schedules" element={<Schedules/>}/>
            <Route path="/teachers" element={<Teachers/>}/>
            <Route path="/semesters" element={<Semesters/>}/>
            <Route path="/friends" element={<Friends/>}/>
            <Route path="/subjects" element={<Subjects/>}/>
            <Route path="/notes" element={<Notes/>}/>
            <Route path="/popup"element={<EditTeacher/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
