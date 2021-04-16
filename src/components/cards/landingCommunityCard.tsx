import React from 'react';
import landingImage from '../../assets/Images/default.jpg';

export default function CommunityCard() {
  return (
    <div className=''>
      <img
        className='shadow hover:shadow-2xl h-72 w-72 rounded-md'
        src={landingImage}
      />
    </div>
  );
}
