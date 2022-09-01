import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function ClassList() {
  const [listOfClass, setListOfClass] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://scheduler-backend-syeda.herokuapp.com/api/class")
      .then((res) => {
        setListOfClass(res.data);
      });
  }, []);

  const addClass = (event) => {
    event.preventDefault();
    navigate("/addclass");
  };

  const handleViewClass = (event, id) => {
    event.preventDefault();
    navigate("/viewclass/" + id);
  };

  const handleDeleteClass = (event, id) => {
    event.preventDefault();
    axios
      .delete("https://scheduler-backend-syeda.herokuapp.com/api/class/" + id)
      .then(() => {
        setListOfClass(listOfClass.filter((val) => val.classid !== id));
      });
  };

  const handleDownload = (classBody) => {
    axios
      .post(
        "https://scheduler-backend-syeda.herokuapp.com/api/excel",
        classBody
      )
      .then(() => {
        alert(
          "Time table successfully downloaded for class with id" +
            classBody.classid +
            " under resources folder."
        );
      });
  };

  return (
    <div>
      <h2 className="text-center">Class List</h2>
      <div className="row">
        <button
          className="btn btn-primary"
          onClick={addClass}
          style={{ width: "15%" }}
        >
          Add Class
        </button>
      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Class Number</th>
              <th>Section</th>
              <th>Strength</th>
              <th>Subjects</th>
            </tr>
          </thead>
          <tbody>
            {listOfClass.map((classs) => (
              <tr key={classs.classid}>
                <td> {classs.classNumber} </td>
                <td> {classs.section}</td>
                <td> {classs.strength}</td>
                <td> {classs.subjects}</td>
                <td>
                  <button
                    onClick={(event) => handleViewClass(event, classs.classid)}
                    className="btn btn-info"
                  >
                    View
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={(event) =>
                      handleDeleteClass(event, classs.classid)
                    }
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDownload(classs)}
                    className="btn btn-info"
                  >
                    Download Timetable
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

export default ClassList;
