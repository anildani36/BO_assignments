import React from "react";
import "./Home.css";
import HelpIcon from "@material-ui/icons/Help";
import { useHistory } from "react-router-dom";
// import Diet from "./Diet";
function Home() {
  var history = useHistory();
  return (
    <div className="home">
        <div className="logo" onClick={() => {
            history.push("/")
          }}>
        <img
          className="home_first"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0i8ilFf2usonsLDFkbFQqXTuYq--BVkdn1Q&usqp=CAU"
          alt="logo"
        />
        <span className="logo_name">Healthy Diet</span>
        </div>
      {/* <div className="home_first1">
        <span
          style={{
            fontSize: "20px",
            color: "white",
            fontStyle: "italic",
          }}
        >
          Healthy Diet
        </span>
      </div> */}
      {/* <Link to={"/main"}> */}
      <div className="home_second" onClick={() => {
            history.push("/")
          }}>
        <span>Home</span>
      </div>
      {/* </Link> */}
      <div className="home_third" onClick={() => {
            history.push("/aboutus")
          }}>
        <span>About us</span>
      </div>

        <div className="home_forth" onClick={() => {
            history.push("/dietplan")
          }}>
          <span>Diet Plan</span>
          
        </div>

        <div className="home_five" onClick={() => {
            history.push("/workout")
          }}>
          <span>Exercise Plan</span>
          
        </div>
  
        <div className="home_six" onClick={() => {
            history.push("/login")
          }}>
          <button>Login</button>
        </div>

      <div className="home_six1">
        <span>Help</span>
        <HelpIcon />
      </div>
    </div>
  );
}

export default Home;
