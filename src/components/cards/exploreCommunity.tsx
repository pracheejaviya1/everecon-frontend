import React from 'react';
import communityImage from '../../assets/Images/default.jpg';

export default function exploreCommunity() {
  return (
    <div>
      <img src={communityImage}></img>
      <div>
        <text>Name</text>
        <text>Location</text>
        <text>100 members</text>
      </div>
    </div>
  );
}
