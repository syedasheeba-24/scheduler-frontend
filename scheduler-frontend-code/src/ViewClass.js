import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ViewClass(props) {
  const { id } = useParams();
  const [classOb, setClassOb] = useState({
    classid: 0,
    classNumber: 0,
    section: "",
    strength: 0,
    subjects: "",
  });
  useEffect(() => {
    axios
      .get("https://scheduler-backend-syeda.herokuapp.com/api/class/" + id)
      .then((res) => {
        setClassOb(res.data);
      });
  });
  return (
    <div>
      <br></br>
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <h3 className="text-center"> View Class Details</h3>
        <div className="card-body">
          <div className="row">
            <label> Class Number :</label>
            <p> {classOb.classNumber}</p>
          </div>
          <div className="row">
            <label> Section :</label>
            <p> {classOb.section}</p>
          </div>
          <div className="row">
            <label> Strength :</label>
            <p> {classOb.strength}</p>
          </div>
          <div className="row">
            <label> Subjects : </label>
            <p> {classOb.subjects}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewClass;
