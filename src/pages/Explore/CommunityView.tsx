import React from 'react';
import EventDesc from '../../components/event/Desc';
import EventTitle from '../../components/event/Title';
import Header from '../../components/header';

export default function ViewEvent() {
  return (
    <div className='m-2 border-b-2 border-black'>
      <Header />
      <EventTitle
        datetime={new Date()}
        title='Talking Tech with Feeling Ineium'
      />
      <EventDesc />
    </div>
  );
}
