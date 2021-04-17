import * as React from 'react';
import EventDesc from '../../components/event/eventComponents/Desc';
import EventTitle from '../../components/event/eventComponents/Title';
import Header from '../../components/header';
import { Link } from 'gatsby';

export default function ViewEvent() {
  return (
    <div className='m-2 border-b-2 border-black'>
      <Header />
      <EventTitle
        datetime={new Date()}
        title='Talking Tech with Feeling Ingenium'
      />
      <EventDesc />
      <Link to='/View/Register'>
        <button className='my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
          Register
        </button>
      </Link>
    </div>
  );
}
