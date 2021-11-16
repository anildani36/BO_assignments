import React, { Component } from "react";
import "./Info.css";
// import Main from "./Main";
import { useHistory } from "react-router-dom";

import api from "./axios";

export class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      weight: "",
      ideal: "",
      height: "",
      state: "",
      city: "",
      medicalIssue: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,

    });
  };

  handleSubmit = (e) => {
    console.log(this.state);
    this.getInfo();
    e.preventDefault();    
    this.resetForm();
  };
  
  getInfo = async() => {
    var data = await api.post("/userinfo", this.state)
      .then(res=> {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      weight: "",
      ideal: "",
      height: "",
      state: "",
      city: "",
      medicalIssue: "",
    });
  };

  render() {
    const {
      firstName,
      lastName,
      gender,
      age,
      weight,
      ideal,
      height,
      state,
      city,
      medicalIssue,
    } = this.state;
    return (
      <div className="user_info">
        <div className="info-design">
          <div className="inner-text">
            <h2>User Detail</h2>
          </div>
        </div>
        <div className="geting_form">
          <form>
            {/* <div className="info1"> */}
            <h5>FirstName:</h5>
            <input
              className="info1"
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
              placeholder="FirstName"
            />
            <h5>lastName</h5>
            <input
              className="info1"
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              placeholder="LastName"
            />

            <h5>Gender :</h5>
            <select
              name="gender"
              onChange={this.handleChange}
              defaultValue="Select Gender"
              value={gender}
            >
              <option defaultValue>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <h5>age</h5>
            <input
              className="info1"
              type="text"
              name="age"
              value={age}
              onChange={this.handleChange}
            />
            <h5>Height</h5>
            <input
              className="info1"
              type="number"
              name="height"
              value={height}
              onChange={this.handleChange}
            />

            <h5>Weight</h5>
            <input
              className="info1"
              type="number"
              name="weight"
              value={weight}
              onChange={this.handleChange}
            />
            <h5>Ideal Weight</h5>
            <input
              className="info1"
              type="number"
              name="ideal"
              value={ideal}
              onChange={this.handleChange}
            />
            <h5>State</h5>
            <input
              className="info1"
              type="text"
              name="state"
              value={state}
              onChange={this.handleChange}
              placeholder="State"
            />
            <h5>City</h5>
            <input
              className="info1"
              type="text"
              name="city"
              value={city}
              onChange={this.handleChange}
              placeholder="City"
            />
            <h5>Medical-Issue (if Any)</h5>
            <input
              className="info1"
              type="text"
              name="medicalIssue"
              value={medicalIssue}
              onChange={this.handleChange}
            />
            {/* </div> */}

            <p className="btn">
              {/* <Link to="/main"> */}
    
                <button className="info_btn" onClick={this.handleSubmit}>
                  Submit
                </button>

            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Info;
