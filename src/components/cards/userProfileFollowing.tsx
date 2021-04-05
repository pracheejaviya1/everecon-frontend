import React from 'react';
import communityImage from '../../assets/Images/default.jpg';

export default function exploreEvents() {
  return (
    <div>
      <img src={communityImage}></img>
      <div>
        <text>Thursday</text>
        <text>,</text>
        <text>March 11 2021</text>
        <text>,</text>
        <text>3:30pm IST</text>
      </div>
      <div>
        <text>Talking tech with tech Ingenium</text>
      </div>
      <div>
        <text>Community Name</text>
      </div>
      <div>
        <text>100 Attendees</text>
      </div>
      <button>Details</button>
    </div>
  );
}
