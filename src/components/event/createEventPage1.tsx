import React from 'react';
import Header from '../header';
import eventImage from '../../assets/Images/community.jpg';

export default function createEventOne() {
  return (
    <div>
      <Header />
      <div>
        <text>Create Event</text>
      </div>
      <hr />
      <div>
        <img src={eventImage} />
        <text>Upload Event Photo</text>
      </div>
      <form>
        <label>
          <input placeholder='Event Name' />
        </label>
        <label>
          <input placeholder='Description' />
        </label>
        <label>
          <input placeholder='Location' />
        </label>
        <button>Next</button>
      </form>
    </div>
  );
}
