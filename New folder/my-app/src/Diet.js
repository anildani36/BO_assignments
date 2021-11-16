import React, { useState } from "react";
import "./Diet.css";
import AutorenewIcon from "@material-ui/icons/Autorenew";
// import CheckBoxIcon from "@material-ui/icons/CheckBox";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const Diet = () => {
  const [name, setName] = useState("");
  function handleUser(name) {
    console.log(`hi there, ${name}`);
  }
  return (
    <div className="diet">
      {/* <div className="diet_title">
        <h2>Meal Planner</h2>
      </div> */}
      <div className="breakfast">
        <h4>Breakfast</h4>
        <div className="breakfast1">
          <small className="check">
            <input type="checkbox" /> I ate this
          </small>
          {/* <button>
          <CheckBoxIcon /> I ate this
        </button> */}
          <AutorenewIcon />
          <BlurCircularIcon />
        </div>
        <div className="breakfast2">
          <img
            src="https://images.eatthismuch.com/site_media/thmb/412920_HillOK444_2d2221c9-dcb5-4249-827a-a413eae547e5.png"
            alt="breakfast_image"
          />
          <span>2 Ingredient Protein Pancakes</span>
        </div>
        <div className="breakfast3">
          <select>
            <option value="gram">gram</option>
            <option value="serving">serving</option>
          </select>
        </div>
      </div>
      <div className="breakfast">
        <h4>Lunch</h4>
        <div className="breakfast1">
          <small className="check">
            <input type="checkbox" /> I ate this
          </small>
          <AutorenewIcon />
          <BlurCircularIcon />
        </div>
        <div className="breakfast2">
          <img
            src="https://images.eatthismuch.com/site_media/thmb/727026_Musni_f10b8cad-c042-45c3-a423-0a772dfa9de1.png"
            alt="lunch_image"
          />
          <h5> Raw Broccoli Salad</h5>
        </div>
        <div className="breakfast3">
          <select>
            <option value="gram">gram</option>
            <option value="serving">serving</option>
          </select>
        </div>
      </div>
      <div className="breakfast">
        {/* <div className="breakfast"> */}
        <h4>Dinner</h4>
        {/* </div> */}
        <div className="breakfast1">
          <small className="check">
            <input type="checkbox" /> I ate this
          </small>
          <AutorenewIcon />
          <BlurCircularIcon />
        </div>
        <div className="breakfast2">
          <img
            src="https://images.eatthismuch.com/site_media/thmb/252806_simmyras_6dde2747-e548-45f3-ab32-781a5b397986.png"
            alt="dinner"
          />
          <h5>Spicy Buttered Corn</h5>
        </div>
        <div className="breakfast3">
          <select>
            <option value="gram">gram</option>
            <option value="serving">serving</option>
          </select>
        </div>
      </div>
      <div className="breakfast">
        <h4>Snack</h4>
        <div className="breakfast1">
          <small className="check">
            <input type="checkbox" /> I ate this
          </small>
          <button onClick={() => handleUser("check")}>
            <AutorenewIcon />
          </button>
          <BlurCircularIcon />
        </div>
        <div className="breakfast2">
          <img
            src="https://images.eatthismuch.com/site_media/thmb/473713_elm333_3173471a-a85f-4166-b97d-dd547cc4237f.jpg"
            alt="apple_image"
          />
          <h5>Apple</h5>
        </div>
        <div className="breakfast3">
          <select>
            <option value="gram">gram</option>
            <option value="serving">serving</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Diet;
