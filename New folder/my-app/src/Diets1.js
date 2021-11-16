import React, { useState } from "react";
import "./Diet.css";
import Lunch from "./Lunch";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
import axios from "axios";

function Diets() {
  const [data, setdata] = useState(Lunch);
  const [index, setIndex] = useState(0);
  console.log(Lunch);
  // function handlesubmit() {
  //   // const item = e.target.value;
  //   // console.log(item);
  //   setdata({});
  // }
  function handleRefresh() {
    const numOfItems = data.length;
    const newIndex = (index + 1) % numOfItems;
    setIndex(newIndex);
  }
  const listItems = data.map((item) => {
    return (
      <div className="breakfast2">
        <img src={item.img} alt="brakfast_image" />
        <p>{item.title}</p>
      </div>
    );
  });
  const activeItem = listItems[index];
  return (
    <div className="diet">
      {/* <div className="diet_title">
        <h2>Meal Planner</h2>
      </div> */}
      <div className="breakfast">
        <h4>Lunch</h4>
        <div className="breakfast1">
          <small className="check">
            <input type="checkbox" /> I ate this
          </small>

          <button onClick={handleRefresh}>
            <AutorenewIcon />
          </button>
          <BlurCircularIcon />
        </div>

        <div>{activeItem}</div>

        <div className="breakfast3">
          <select>
            <option value="gram">gram</option>
            <option value="serving">serving</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Diets;
