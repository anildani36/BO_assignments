import React from "react";
import { useHistory } from "react-router-dom";
import "./Workout.css";
import './Male';
function Workout() {
  var history = useHistory();
  return (
    <div>
      <div className="workout">
        <h3 className="workout4">STEP INTO GREATNESS</h3>
        <p className="workout3">
          Find out exactly what diet and training is best for you
        </p>
        <h5 className="workout5">Select Your Gender?</h5>

          <button className="workout1" onClick={() => {
            history.push("/male")
          }}>Male</button>
        
          <button className="workout2" onClick={() => {
            history.push("/female")
          }}>Female</button>
      </div>
    </div>
  );
}

export default Workout;
