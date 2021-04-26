import * as React from 'react';
import landingImage from '../../../assets/Images/default.jpg';
//TODO use logo
export default function EventsCard() {
  return (
    <div>
      <img
        className='shadow hover:shadow-2xl h-72 w-72 rounded-md'
        src={landingImage}
      />
    </div>
  );
}
