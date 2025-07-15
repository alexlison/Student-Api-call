import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const ViewStudent = () => {
  const [isLoading, changeLoding] = useState(true);

  const [StudentData, ChangeData] = useState({
    data: [],
  });

  const fetchData = () => {
    axios
      .get("http://18.144.111.41/view_all_students.php")
      .then((response) => {
        changeLoding(false);
        ChangeData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        <h4 className="m-4 text-center fw-bold">View All Students</h4>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-warning table-striped">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Roll No</th>
                      <th scope="col">Admission No</th>
                      <th scope="col">College</th>
                    </tr>
                  </thead>
                  {isLoading ? (
                    <div class="spinner-border text-info mt-4 " role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <tbody>
                      {StudentData.data.map((value, index) => {
                        return (
                          <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.roll_number}</td>
                            <td>{value.admission_number}</td>
                            <td>{value.college}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;
