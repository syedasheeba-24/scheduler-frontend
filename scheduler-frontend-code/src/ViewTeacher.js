import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ViewTeacher(props) {
  const { id } = useParams();
  const [teacherOb, setTeacherOb] = useState({
    teacherid: 0,
    subject: "",
    classes: "",
  });
  useEffect(() => {
    axios
      .get("https://scheduler-backend-syeda.herokuapp.com/api/teacher/" + id)
      .then((res) => {
        setTeacherOb(res.data);
      });
  });
  return (
    <div>
      <br></br>
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <h3 className="text-center"> View Teacher Details</h3>
        <div className="card-body">
          <div className="row">
            <label> Teacher Number</label>
            <p> {teacherOb.teacherid}</p>
          </div>
          <div className="row">
            <label> Subject :</label>
            <p> {teacherOb.subject}</p>
          </div>
          <div className="row">
            <label> Classes :</label>
            <p> {teacherOb.classes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewTeacher;
