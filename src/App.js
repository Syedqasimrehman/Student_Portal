import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Assignment from "./Components/Assignment";
import Schedules from "./Components/Schedules";
import Teachers from "./Components/Teachers";
import Students from "./Components/Students";
import Friends from "./Components/Friends";
import Subjects from "./Components/Subjects";
import Notes from "./Components/Notes";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route className="dash" path="/" element={<Dashboard/>}/>
            <Route path="/assignments" element={<Assignment/>}/>
            <Route path="/schedules" element={<Schedules/>}/>
            <Route path="/teachers" element={<Teachers/>}/>
            <Route path="/students" element={<Students/>}/>
            <Route path="/friends" element={<Friends/>}/>
            <Route path="/subjects" element={<Subjects/>}/>
            <Route path="/notes" element={<Notes/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
