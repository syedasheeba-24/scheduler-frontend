import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import ClassList from "./ClassList";
import TeacherList from "./TeacherList";
import AddClass from "./AddClass";
import ViewClass from "./ViewClass";
import AddTeacher from "./AddTeacher";
import ViewTeacher from "./ViewTeacher";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            TImeTable Scheduler
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/classlist"} className="nav-link">
                ClassLists
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addclass"} className="nav-link">
                Add-Class
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/teacherlist"} className="nav-link">
                Teacher-List
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addteacher"} className="nav-link">
                Add-Teacher
              </Link>
            </li>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ClassList />}></Route>
            <Route path="/classlist" element={<ClassList />}></Route>
            <Route path="/addclass" element={<AddClass />}></Route>
            <Route path="/viewclass/:id" element={<ViewClass />}></Route>
            <Route path="/teacherlist" element={<TeacherList />}></Route>
            <Route path="/addteacher" element={<AddTeacher />}></Route>
            <Route path="/viewteacher/:id" element={<ViewTeacher />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
