import React, { useState } from 'react'
import NavBar from './NavBar';

const DeleteStudent = () => {

const [input,changeInput] = useState(
    {name:""}
)


const inputHandler = (event) => {
    changeInput({...input,[event.target.name]:event.target.value})
}

const readValues = () => {
    console.log(input);
    
}
  return (
    <div>
        <NavBar />
        <div className="container">
            <h4 className="mt-4">Delete Student</h4>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger" onClick={readValues}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteStudent;