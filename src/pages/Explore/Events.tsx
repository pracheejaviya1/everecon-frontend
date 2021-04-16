import * as React from 'react';
import Header from '../../components/header';
import EventCard from '../../components/cards/event/eventCard';

export default function ExploreCommunity() {
  const input_class: string =
    'border-gray-100 p-3 text-xs block rounded-xl font-mulish bg-gray-100';
  return (
    <div>
      <Header />
      <div className='m-6 flex flex-col divide-y divide-gray-500'>
        <div className='m-4'>
          <h1 className='my-5 text-2xl font-mulish text-center'>
            Explore Events
          </h1>
          <div className='flex flex-row '>
            <form>
              <input
                type='text'
                className={input_class}
                placeholder='Search by category'
                name='category'
              />
            </form>
            <text className='text-sm font-mulish text-blue-500 my-2'>
              Reset
            </text>
          </div>
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
}
