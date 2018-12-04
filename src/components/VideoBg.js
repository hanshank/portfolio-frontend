import React, { Component } from 'react';
import video from './pedestrians.mp4';


class VideoBg extends Component {

  render() {
    return (
      <div className="fullscreenBg">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4"/>
        </video>
      </div>
    )
  }
}

export default VideoBg;
