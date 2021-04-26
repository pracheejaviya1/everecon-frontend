import * as React from 'react';
import landingImage from '../../../assets/Images/default.jpg';

// TODO: use logo instead
export default function CommunityCard({ logo, id }) {
  console.log(id);
  return (
    <div className=''>
      <img
        className='shadow hover:shadow-2xl h-72 w-72 rounded-md'
        src={landingImage}
      />
    </div>
  );
}
