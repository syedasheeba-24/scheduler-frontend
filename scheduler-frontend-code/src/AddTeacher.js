import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function AddTeacher() {
  const [subject, setSubject] = useState("English");
  const [classes, setClasses] = useState("");
  const navigate = useNavigate();

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleClassChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setClasses((current) => [...current, value]);
    } else {
      setClasses(classes.filter((val) => val !== value));
    }
  };

  const saveTeacher = () => {
    let classString = "";
    classes.map((c) => (classString = c + "," + classString));
    classString = classString.substring(0, classString.length - 1);
    let teacherObject = {
      subject: subject,
      classes: classString,
    };
    axios
      .post(
        "https://scheduler-backend-syeda.herokuapp.com/api/teacher",
        teacherObject
      )
      .then(() => {
        navigate("/teacherlist");
      });
    navigate("/teacherlist");
  };

  const handleCancel = () => {
    navigate("/teacherlist");
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Teacher Details</h3>
            <div className="card-body">
              <form>
                <div class="dropdown">
                  <label>
                    Subject
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ marginLeft: 10 }}
                    >
                      {subject}
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <option
                        class="dropdown-item"
                        onClick={handleSubjectChange}
                        value="English"
                      >
                        English
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleSubjectChange}
                        value="Hindi"
                      >
                        Hindi
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleSubjectChange}
                        value="Kannada"
                      >
                        Kannada
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleSubjectChange}
                        value="Mathematics"
                      >
                        Mathematics
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleSubjectChange}
                        value="Science"
                      >
                        Science
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleSubjectChange}
                        value="Social"
                      >
                        Social
                      </option>
                    </div>
                  </label>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-2" style={{ marginTop: 15 }}>
                      <label>Classes:</label>
                    </div>
                    <div className="col-md-4">
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="classes"
                          value="1"
                          id="flexCheckDefault"
                          onChange={handleClassChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          1
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="2"
                          id="flexCheckDefault"
                          onChange={handleClassChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          2
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="3"
                          id="flexCheckDefault"
                          onChange={handleClassChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          3
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="4"
                          id="flexCheckDefault"
                          onChange={handleClassChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          4
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="5"
                          id="flexCheckDefault"
                          onChange={handleClassChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          5
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="6"
                          id="flexCheckDefault"
                          onChange={handleClassChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          6
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="7"
                          id="flexCheckDefault"
                          onChange={handleClassChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          7
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="8"
                          id="flexCheckDefault"
                          onChange={handleClassChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          8
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-success" onClick={saveTeacher}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={handleCancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddTeacher;
