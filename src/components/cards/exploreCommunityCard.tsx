import React from 'react';
import communityImage from '../../assets/Images/default.jpg';

export default function exploreCommunity() {
  return (
    <div>
      <img src={communityImage}></img>
      <div>
        <text>Name</text>
        <text>Location</text> {/*Add tags horizontal recycler */}
        <div>
          <text>Tag1</text>
        </div>
        <text>100 members</text>
        <button>Follow</button>
      </div>
    </div>
  );
}
