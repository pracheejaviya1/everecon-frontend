import * as React from 'react';
import EventDesc from './eventComponents/Desc';
import EventTitle from '../../components/event/eventComponents/Title';
import Header from '../../components/header';

export default function UpdateEvent() {
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
