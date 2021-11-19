import React, { Component } from "react";
import "./Info.css";
import { Link } from "react-router-dom";
// import Main from "./Main";
import { withRouter } from "react-router-dom";

import api from "./axios";

export class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      lastName: "",
      Gender: "",
      age: "",
      Weight: "",
      IdealWeight: "",
      Height: "",
      State: "",
      City: "",
      Medical_Issue: "",
    };
  }

  redirect = () => {
    const { history } = this.props;
    if(history) history.push("/premium")
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,

    });
  };

  handleSubmit = (e) => {
    console.log(this.state);
    alert("User entered information sucessfully");
    this.getInfo();
    e.preventDefault();    
    this.resetForm();
  };
  
  getInfo = async() => {
    var data = await api.post("/userinfo", this.state)
      .then(res=> {
        console.log(res.data)
        this.redirect();
      })
      .catch(error => {
        console.log(error)
      })
  }

  resetForm = () => {
    this.setState({
      FirstName: "",
      lastName: "",
      Gender: "",
      age: "",
      Weight: "",
      IdealWeight: "",
      Height: "",
      State: "",
      City: "",
      Medical_Issue: "",
    });
  };

  render() {
    const {
      FirstName,
      lastName,
      Gender,
      age,
      Weight,
      IdealWeight,
      Height,
      State,
      City,
      Medical_Issue,
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
              name="FirstName"
              value={FirstName}
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
              name="Gender"
              onChange={this.handleChange}
              defaultValue="Select Gender"
              value={Gender}
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
              name="Height"
              value={Height}
              onChange={this.handleChange}
            />

            <h5>Weight</h5>
            <input
              className="info1"
              type="number"
              name="Weight"
              value={Weight}
              onChange={this.handleChange}
            />
            <h5>Ideal Weight</h5>
            <input
              className="info1"
              type="number"
              name="IdealWeight"
              value={IdealWeight}
              onChange={this.handleChange}
            />
            <h5>State</h5>
            <input
              className="info1"
              type="text"
              name="State"
              value={State}
              onChange={this.handleChange}
              placeholder="State"
            />
            <h5>City</h5>
            <input
              className="info1"
              type="text"
              name="City"
              value={City}
              onChange={this.handleChange}
              placeholder="City"
            />
            <h5>Medical-Issue (if Any)</h5>
            <input
              className="info1"
              type="text"
              name="Medical_Issue"
              value={Medical_Issue}
              onChange={this.handleChange}
            />
            {/* </div> */}

            <p className="btn">
               <Link to="/premium"> 
    
                <button className="info_btn"onClick={this.handleSubmit }>
                  Submit
                </button>
                 </Link> 

            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Info;
