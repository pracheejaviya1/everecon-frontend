import React from 'react';
import landingImage from '../../assets/Images/default.jpg';

export default function CommunityCard() {
  return (
    <div>
      <img className='h-72 w-72 rounded-md' src={landingImage} />
    </div>
  );
}
