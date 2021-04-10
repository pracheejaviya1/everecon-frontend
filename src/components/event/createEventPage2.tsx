import React from 'react';
import Header from '../header';

export default function createEventOne() {
  return (
    <div>
      <Header />
      <div>
        <text>Create Event</text>
      </div>
      <hr />
      <div>
        <text>Date</text>
        <input>Date</input>
      </div>

      <div>
        <text>Time</text>
        <input>Time</input> {/*Check Validity*/}
      </div>

      <div>
        <text>Tags</text>
        <input>Search Tags</input>
        <div>{/*Insert tag chips here */}</div>
      </div>

      <div>
        <text>Participant Limit</text>
        <input>Limit</input>
      </div>
      {/*Fees part pending, we don have in out diagrams */}
      <button>Next</button>
    </div>
  );
}
