import { Link, navigate } from 'gatsby';
import * as React from 'react';
import { mediaurl } from '../config';
import SpeakerBlock from './Speaker';

const EventAction = ({ eventid, iscore, isvolunteer, isregistered }) => {
  // TODO: handle Register
  // TODO: handle Unregister (add confirm modal)

  if (iscore)
    return (
      <>
        <Link to={`/eventcheckin/${eventid}`}>
          <button className='my-3 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
            Checkin
          </button>
        </Link>
        <button
          className='mt-3 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'
          onClick={() =>
            navigate('/Create/Event/UpdateEvent/', {
              state: { eventid: eventid },
            })
          }
        >
          Update
        </button>
      </>
    );
  else if (isvolunteer)
    return (
      <Link to={`/eventcheckin/${eventid}`}>
        <button className='my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
          CheckIn
        </button>
      </Link>
    );
  else if (isregistered)
    return (
      <button className='my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
        Unregister
      </button>
    );
  else
    return (
      <button className='my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
        Register
      </button>
    );
};
export default function EventDesc(props: any) {
  return (
    <div className='flex items-start justify-between w-full my-2 font-inter'>
      <div className='w-1/2 my-2'>
        <img className='rounded-md' src={mediaurl + props.imageurl} />
        <h2 className='my-4 text-xl font-semibold'>Details</h2>
        <div>
          <div className='flex flex-row mt-6 w-4/5'>
            <p className='font-inter text-lg font-light'>
              {props.description} EVENT DECSCRIPTION Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
          <hr className='my-4' />

          <div className='flex flex-row mt-6'>
            <p className='text-xl font-mulish'>Address</p>
            <p className='font-mulish text-base mx-14 font-light'>
              {props?.Address || 'address'} {props?.City || 'city'}
              {props?.Country || 'country'}
            </p>
          </div>
          <div className='flex flex-row'>
            <p className=' text-xl font-mulish'>City</p>
            <p className='font-mulish text-base mx-24 font-light'>
              {props?.City || 'city'}
            </p>
          </div>
          <div className='flex flex-row'>
            <p className=' text-xl font-mulish'>Country</p>
            <p className='font-mulish text-base mx-16 font-light'>
              {props?.Country || 'country'}
            </p>
          </div>

          <div className='flex flex-col mt-6 mb-12'>
            <div className='flex flex-row items-center mt-2'>
              <label htmlFor='event url' className='text-xl font-mulish'>
                Event Link
              </label>
              <a
                className='rounded-lg mx-10 w-96 font-mulish text-blue-400 text-base font-light'
                href={props?.URL || 'url'}
              >
                {props?.URL || 'url'}
              </a>
            </div>
            <div className='flex flex-row items-center mt-6'>
              <label htmlFor='start time' className='text-md w-48 font-mulish'>
                Start Time
              </label>
              <p className='rounded-lg mx-5 w-96 font-mulish text-green-500 mx-12 text-lg font-light'>
                {props?.startTime || 'startTime'}
              </p>
              <label htmlFor='end time' className='text-md w-48 font-mulish'>
                End Time
              </label>
              <p className='rounded-lg mx-5 w-96 font-mulish text-green-500 mx-12 text-lg font-light'>
                {props?.endTime || 'endTIme'}
              </p>
            </div>
            <div className='flex flex-row items-center mt-6'>
              <label htmlFor='category' className='text-xl font-mulish'>
                Category
              </label>
              <p className='rounded-lg mx-5 w-96 font-mulish text-orange-600 mx-12 text-lg font-light'>
                {props?.category || 'category'}
              </p>
            </div>
            <hr className='my-4' />
            <div className='flex flex-row text-indigo-500 mt-4 items-center text-xl font-mulish'>
              <p>Hosted with</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mx-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                  clipRule='evenodd'
                />
              </svg>
              <p>by</p>
            </div>

            <div className='flex flex-row items-center mt-3'>
              <p className='rounded-lg w-96 font-mulish text-orange-600 text-lg font-light'>
                Community Name
              </p>
            </div>
            <div className='flex flex-col items-start mt-3'>
              <p className='rounded-lg w-96 font-mulish text-orange-600 text-md font-light'>
                Community Contact email
              </p>
              <p className='rounded-lg w-96 font-mulish text-orange-600 text-md font-light'>
                Community Contact email
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-around'>
        <SpeakerBlock />
        <EventAction
          iscore={props.iscore}
          isvolunteer={props.isvolunteer}
          isregistered={props.isregistered}
          eventid={props.eventid}
        />
        <p>{props.kind}</p>
      </div>
    </div>
  );
}
