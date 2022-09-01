import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function AddClass() {
  const [classNum, setClassNumber] = useState(1);
  const [sec, setSection] = useState("A");
  const [classStrength, setClassStrength] = useState(0);
  const [lang, setLanguages] = useState([]);
  const navigate = useNavigate();

  const handleClassNumChange = (event) => {
    setClassNumber(event.target.value);
  };
  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };
  const handleSubjectChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setLanguages((current) => [...current, value]);
    } else {
      setLanguages(lang.filter((val) => val !== value));
    }
  };

  const handleStrengthChange = (event) => {
    setClassStrength(event.target.value);
  };

  const saveClass = () => {
    let subjectString = "";
    if (lang.length !== 5) alert("Please select 5 subjects only.");
    else {
      lang.map((c) => (subjectString = c + "," + subjectString));
      subjectString = subjectString.substring(0, subjectString.length - 1);
      let classObject = {
        classNumber: classNum,
        section: sec,
        strength: classStrength,
        subjects: subjectString,
      };
      axios
        .post(
          "https://qrcode-backend-syeda.herokuapp.com/api/class",
          classObject
        )
        .then(() => {
          navigate("/classlist");
        });
      navigate("/classlist");
    }
  };

  const handleCancel = () => {
    navigate("/classlist");
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Class Details</h3>
            <div className="card-body">
              <form>
                <div class="dropdown">
                  <label>
                    Class Number
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ marginLeft: 10 }}
                    >
                      {classNum}
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <option
                        class="dropdown-item"
                        onClick={handleClassNumChange}
                        value="1"
                      >
                        1
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleClassNumChange}
                        value="2"
                      >
                        2
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleClassNumChange}
                        value="3"
                      >
                        3
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleClassNumChange}
                        value="4"
                      >
                        4
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleClassNumChange}
                        value="5"
                      >
                        5
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleClassNumChange}
                        value="6"
                      >
                        6
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleClassNumChange}
                        value="7"
                      >
                        7
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleClassNumChange}
                        value="8"
                      >
                        8
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleClassNumChange}
                        value="9"
                      >
                        9
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleClassNumChange}
                        value="10"
                      >
                        10
                      </option>
                    </div>
                  </label>
                </div>
                <div class="dropdown">
                  <label>
                    Section
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ marginLeft: 10, marginTop: 10 }}
                    >
                      {sec}
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <option
                        class="dropdown-item"
                        onClick={handleSectionChange}
                        value="A"
                      >
                        A
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleSectionChange}
                        value="B"
                      >
                        B
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleSectionChange}
                        value="C"
                      >
                        C
                      </option>
                      <option
                        class="dropdown-item"
                        onClick={handleSectionChange}
                        value="D"
                      >
                        D
                      </option>
                    </div>
                  </label>
                </div>
                <div className="form-group">
                  <label style={{ marginTop: 10 }}>Class Strength :</label>
                  <input
                    placeholder="Enter the class strength"
                    className="form-control"
                    value={classStrength}
                    onChange={handleStrengthChange}
                  />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-2" style={{ marginTop: 15 }}>
                      <label>Subjects:</label>
                    </div>
                    <div className="col-md-4">
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="Javascript"
                          id="flexCheckDefault"
                          onChange={handleSubjectChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Javascript
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="Python"
                          id="flexCheckDefault"
                          onChange={handleSubjectChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Python
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="Java"
                          id="flexCheckDefault"
                          onChange={handleSubjectChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Java
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="PHP"
                          id="flexCheckDefault"
                          onChange={handleSubjectChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          PHP
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="C#"
                          id="flexCheckDefault"
                          onChange={handleSubjectChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          C#
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="C++"
                          id="flexCheckDefault"
                          onChange={handleSubjectChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          C++
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="C"
                          id="flexCheckDefault"
                          onChange={handleSubjectChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          C
                        </label>
                      </div>
                      <div className="form-check m-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="languages"
                          value="Typescript"
                          id="flexCheckDefault"
                          onChange={handleSubjectChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Typescript
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-success" onClick={saveClass}>
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
export default AddClass;
