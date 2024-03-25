import React, { useState } from "react";
import "./bodystyles.css";

const Body = () => {
  return (
    <div className="body_section">
      <h2>Explore</h2>
      <h3>What are you gonna watch today?</h3>
      <div className="body_picture">
        <div className="pic_section">
          <h1>Weather With You</h1>
          <p>
            Corrupt politicians, frenzied nationalists, and other warmongering
            forces constantly jeopardize the thin veneer of peace between
            neighboring countries Ostania and Westalis
          </p>
        </div>
      </div>
      <div className="New-released">
        <div className="Item">
          <div className="new-pic pic01">
            <p>One Piece</p>
          </div>
        </div>

        <div className="Item">
          <div className="new-pic pic02">
            <p>Boruto Naruto Next Generations</p>
          </div>
        </div>
        <div className="Item">
          <div className="new-pic pic03">
            <p>Spy X Family</p>
          </div>
        </div>
        <div className="Item">
          <div className="new-pic pic04">
            <p>Shingeki no kyoujin</p>
          </div>
        </div>
        <div className="Item">
          <div className="new-pic pic05">
            <p>Captain Tsubasa</p>
          </div>
        </div>
        <div className="Item">
          <div className="new-pic pic06">
            <p>Aoashi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
