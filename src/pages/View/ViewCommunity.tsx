import * as React from 'react';
import CommunityImage from '../../assets/Images/ahmedabad.jpeg';
import Header from '../../components/header';

type TagProps = {
  title: string;
};

function Tag(props: TagProps) {
  return (
    <span className='rounded-xl text-center m-2 bg-gray-300 px-2 py-1'>
      {props.title}
    </span>
  );
}

export default function ViewCommunity() {
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex border-b-2 py-10 w-2/3 mx-auto font-inter'>
        <img className='h-60 w-90 rounded-md' src={CommunityImage} />
        <div className='flex ml-10 items-start justify-between h-full flex-col font-inter'>
          <h1 className='font-bold text-2xl mx-2 '>Tough one</h1>
          <p className='text-xl mx-2 mb-1'>Location</p>
          <p className='text-xl mx-2 text-gray-400 mb-1'>Lead</p>
          <button
            className='text-lg bg-blue-400 text-white rounded-md px-2 py-1 mx-2 my-1'
            onClick={e => e.preventDefault()}
            type='submit'
          >
            Follow
          </button>
        </div>
      </div>
      <div className='w-2/3 m-auto py-4 font-inter justify-between flex'>
        <div className='w-1/3'>
          <div className='w-full flex justify-between'>
            <button onClick={e => e.preventDefault()} type='submit'>
              About
            </button>
            <button onClick={e => e.preventDefault()} type='submit'>
              Events
            </button>
            <button onClick={e => e.preventDefault()} type='submit'>
              Members
            </button>
            <button onClick={e => e.preventDefault()} type='submit'>
              Contact
            </button>
          </div>
          <p className='my-10 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vitae, ea nisi nulla iusto aperiam ipsam asperiores enim harum
            doloribus atque adipisci cupiditate id quis fugiat culpa voluptates,
            porro reprehenderit!
          </p>
        </div>
        <div className='flex items-center flex-col w-1/4'>
          <h3 className='text-center'>Tags</h3>
          <div className='grid items-center my-10 grid-cols-3'>
            <Tag title='Tag' />
            <Tag title='Tag' />
            <Tag title='Tag' />
            <Tag title='Tag' />
            <Tag title='Tag' />
            <Tag title='Tag' />
          </div>
          {/* <button
            className='bg-blue-500 rounded-md my-5 px-2 py-1 text-white'
            onClick={e => e.preventDefault()}
            type='submit'
          >
            Join Community
          </button> */}
        </div>
      </div>
    </div>
  );
}
