import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const AddStudent = () => {

const [input,changeInput] = useState(
  {
name: "",
roll_number: "",
admission_number: "",
college: ""
}
)

const InputHandler = (event) => {
  changeInput({ ...input,[event.target.name]:event.target.value })
}

const readValues = () => {

  console.log(input);
  axios.post("http://18.144.111.41/student_api.php",input).then(
    (response) => {

      alert("Added Successfully")

    }
  ).catch()
  
}


  return (
    <div>
        <NavBar />
      <div className="container">
        <div className="row">
            <h4 className="mt-4">Add Student</h4>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" name="name" value={input.name} onChange={InputHandler} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  College
                </label>
                <input type="text" className="form-control"  name="college" value={input.college} onChange={InputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Roll No
                </label>
                <input type="number"  id="" className="form-control" name="roll_number"  value={input.roll_number} onChange={InputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Admission No
                </label>
                <input type="number"  id="" className="form-control" name="admission_number" value={input.admission_number} onChange={InputHandler} />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-success" onClick={readValues}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
