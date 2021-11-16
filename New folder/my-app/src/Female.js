import React from "react";
import ReactPlayer from "react-player";
import './Female.css';

function Female() {
  return (
    <React.Fragment>
      <div className="Video-responsive" height='250' width='350'>
        <h3>Workout videos - <a href="https://www.pexels.com/search/videos/weight%20loss/">Healthy Diet</a>
        </h3>
        <ReactPlayer url="https://youtu.be/X1TuhAn6C-g" />
        <ReactPlayer url="https://youtu.be/B4rfYVX0Zx4" />
        <ReactPlayer url="https://youtu.be/WgfSBjOdmrs" />
        <ReactPlayer url="https://youtu.be/wHXaW7NszBo" />
        <ReactPlayer url="https://youtu.be/o6F8-4Gdv_A" />
      </div>
    </React.Fragment>
  );
}
export default Female;