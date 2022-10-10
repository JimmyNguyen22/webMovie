import React from "react";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import "./intro.scss";
import video from "../../assets/img/intro.mp4";
import { useState } from "react";

export default function Intro(props) {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="introContainer">
      <video
        width="100%"
        autoPlay
        muted={isMuted}
        loop={true}
        className="videoIntro"
      >
        <source src={video} type="video/mp4"></source>
      </video>
      <div className="introInfo">
        <h1 className="heading">web movie clone</h1>
        <p className="overview">This is intro web !!! </p>
      </div>
      {isMuted ? (
        <VscMute
          className="btnVolume"
          onClick={() => {
            setIsMuted((prev) => !prev);
          }}
        ></VscMute>
      ) : (
        <VscUnmute
          className="btnVolume"
          onClick={() => {
            setIsMuted((prev) => !prev);
          }}
        ></VscUnmute>
      )}
      <div className="fadeBottom"></div>
    </div>
  );
}
