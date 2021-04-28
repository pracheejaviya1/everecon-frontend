import * as React from 'react';
import EventDesc from '../../components/eventComponents/Desc';
import EventTitle from '../../components/eventComponents/Title';
import Header from '../../components/header';

export default function ViewEvent(props) {
  return (
    <div className='m-2 border-b-2 h-screen'>
      <Header />
      <div className='flex flex-col mx-auto w-3/4 items-center'>
        <p>{props.uid}</p>
        <EventTitle
          datetime={new Date()}
          title='Talking Tech with Feeling Ingenium'
        />
        <EventDesc />
      </div>
    </div>
  );
}
