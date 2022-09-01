import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function TeacherList() {
  const [listOfTeacher, setListOfTeacher] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://qrcode-backend-syeda.herokuapp.com/api/teacher")
      .then((res) => {
        setListOfTeacher(res.data);
      });
  }, []);

  const addTeacher = (event) => {
    event.preventDefault();
    navigate("/addTeacher");
  };

  const handleViewTeacher = (event, id) => {
    event.preventDefault();
    navigate("/viewteacher/" + id);
  };

  return (
    <div>
      <h2 className="text-center">Teacher List</h2>
      <div className="row">
        <button
          className="btn btn-primary"
          onClick={addTeacher}
          style={{ width: "15%" }}
        >
          Add Teacher
        </button>
      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Teacher Id</th>
              <th>Subjects</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {listOfTeacher.map((teacher) => (
              <tr key={teacher.teacherid}>
                <td> {teacher.teacherid} </td>
                <td> {teacher.subject}</td>
                <td> {teacher.classes}</td>
                <td>
                  <button
                    onClick={(event) =>
                      handleViewTeacher(event, teacher.teacherid)
                    }
                    className="btn btn-info"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeacherList;
