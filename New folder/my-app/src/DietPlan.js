import React from "react";
import { Link } from "react-router-dom";
import "./DietPlan.css";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
import ForumIcon from "@material-ui/icons/Forum";
import AddBoxIcon from "@material-ui/icons/AddBox";
// import CreateIcon from "@material-ui/icons/Create";
// import LockIcon from "@material-ui/icons/Lock";
// import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
function DietPlan() {
  return (
    <div className="dietplan">
      <div className="title">
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThY9skHMsQXXbn0mwzunwdUwL5Mdt0LlCn5Q&usqp=CAU"
          alt="back"
        /> */}
        <h2>Meal Planner</h2>
        {/* <button>
          <CreateIcon /> Meal Layout
        </button>
        <button>
          <AssignmentIcon /> Actions
        </button>
        <button>
          <LockIcon /> Regenerate Week
        </button> */}
      </div>
      <div className="date1">
        {/* <h2>Meal Planner</h2> */}
        <div className="date">
          <h5>Sunday</h5>
          <h1>7</h1>
        </div>
        <div className="plan">
          <AutorenewIcon />
          <BlurCircularIcon />
        </div>

        <div className="middle">
          <h3>This day doesn't have a meal plan yet.</h3>
          <Link to={"/diets"}>
            <button>
              {" "}
              <AutorenewIcon />
              Generate
            </button>
          </Link>
          <span>using your meal layout preferences</span>
          <div className="copy">
            <button>
              <ForumIcon /> Copy the previous meal plan
            </button>
          </div>
          <div>
            <button>
              <AddBoxIcon /> New blank plan
            </button>
          </div>
          <div>
            <button>
              <AssignmentReturnedIcon /> Load a saved meal plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DietPlan;
