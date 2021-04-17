import * as React from 'react';
import CommunityCard from '../../components/cards/community/communityCard';
import Header from '../../components/header';

export default function ExploreCommunity() {
  const input_class: string =
    'border-gray-100 p-3 text-xs block rounded-xl font-mulish bg-gray-100';
  return (
    <div>
      <Header />
      <div className='m-6 flex flex-col divide-y divide-gray-500'>
        <div className='m-4'>
          <h1 className='my-5 text-2xl font-mulish text-center'>
            Explore Communities
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
            <span className='text-sm font-mulish text-blue-500 my-2'>
              Reset
            </span>
          </div>
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </div>
      </div>
    </div>
  );
}
