import React from "react";
import "./Premium.css";
import { Link } from "react-router-dom";

function Premium() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* <button className="img"></button> */}

          <div className="big_bottom_spacer">
            <h1 className="head2">
              Try Premium free for 15 days
              <br />
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-xxl-0 ml-lg-auto mr-lg-3 feature_column">
          <div className="row feature_header">
            <div className="col">
              <div className="feature_column_header">
                <h1 className="head3">
                  $0<span className="spa">/mo</span>
                </h1>
                <div>
                  <h1 className="head1">
                    <strong>Free</strong>
                    <br />
                  </h1>
                </div>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa">
                  Generate daily meal plans
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa">
                  Track what you eat
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa">
                  Create custom foods and recipes
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa">
                  Personalize the generator
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa">
                  Schedule recurring foods
                  <br />
                </span>
              </div>
              <div className="feature_row crossed_out">
                <span className="spa">
                  Plan a week of meals at a time
                  <br />
                </span>
              </div>
              <div className="feature_row crossed_out">
                <span className="spa">
                  Automatic grocery lists
                  <br />
                </span>
              </div>
              <div className="feature_row crossed_out">
                <span className="spa">
                  Automatic leftovers
                  <br />
                </span>
              </div>
              <div className="feature_row crossed_out">
                <span className="spa">
                  Customize every day of the week
                  <br />
                </span>
              </div>
              <div className="feature_row crossed_out">
                <span className="spa">
                  Print and email your plans
                  <br />
                </span>
              </div>
              <div className="feature_row crossed_out">
                <span className="spa">
                  Grocery delivery
                  <br />
                </span>
              </div>
              <Link to="main">
                x<button className="btn1">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 offset-xxl-0 ml-lg-auto mr-lg-3 feature_column feature_column_blue">
          <div className="row feature_header">
            <div className="col">
              <div className="feature_column_header">
                <h1 className="head5">
                  $4.99<span className="spa4">/mo</span>
                </h1>
                <div>
                  <h1 className="head4">
                    <strong>Free</strong>
                    <br />
                  </h1>
                </div>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa2">
                  &nbsp;Generate daily meal plans
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa2">
                  &nbsp;Track what you eat
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa2">
                  Create custom foods and recipes
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa2">
                  Personalize the generator
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa2">
                  Schedule recurring foods
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa3">
                  &nbsp;Plan a week of meals at a time ðŸŽ‰
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa3">
                  &nbsp;Automatic grocery lists ðŸ›
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa3">
                  &nbsp;Automatic leftovers
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa3">
                  &nbsp;Customize every day of the week
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa3">
                  &nbsp;Print and email your plans
                  <br />
                </span>
              </div>
              <div className="feature_row">
                <div className="feature_check"></div>
                <span className="spa3">
                  &nbsp;Grocery delivery
                  <br />
                </span>
              </div>
              <Link to="/card">
                <button className="btn1">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;
