import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const ViewAllStudents = () => {
  const [StudentData, ChangeData] = useState({
    status: "success",
    data: []
  });
  
 // Api  Calling

 const fetchData = () => {
    axios.get("http://18.144.111.41/view_all_students.php").then(
         (response) => {
            ChangeData(response.data)

         } ).catch()

 }

 useEffect(()=>{ fetchData() } ,[])


  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <h4 className="mt-4">View All Student</h4>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table table-expand-lg table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Roll No</th>
                  <th scope="col">Admission No</th>
                  <th scope="col">College</th>
                </tr>
              </thead>

              {StudentData.data.map((value, index) => {
                return (
                  <tbody>
                    <tr>
                      <td>{value.id}</td>
                      <td>{value.name}</td>
                      <td>{value.roll_number}</td>
                      <td>{value.admission_number}</td>
                      <td>{value.college}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllStudents;
