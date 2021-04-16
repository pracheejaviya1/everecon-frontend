import * as React from 'react';
import communityImage from '../../assets/Images/ahmedabad.jpeg';

export default function exploreEvents() {
  return (
    <div>
      <img src={communityImage}></img>
      <div>
        <text>Name</text>
      </div>
      <button>Unfollow</button> {/*Card recycler */}
    </div>
  );
}
