import * as React from 'react';
import EventDesc from '../../components/event/eventComponents/Desc';
import EventTitle from '../../components/event/eventComponents/Title';
import Header from '../../components/header';

export default function ViewEvent() {
  return (
    <div className='m-2 border-b-2 h-screen'>
      <Header />
      <div className='flex flex-col mx-auto w-3/4 items-center'>
        <EventTitle
          datetime={new Date()}
          title='Talking Tech with Feeling Ingenium'
        />
        <EventDesc />
      </div>
    </div>
  );
}
