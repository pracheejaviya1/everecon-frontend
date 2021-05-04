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
          <div className='flex flex-row mt-4 w-4/5'>
            <p className='font-mulish text-base font-light'>
              {props.description}
            </p>
          </div>
          <div className='flex flex-row mt-12'>
            <p className='w-36 h-24 text-xl font-mulish'>Address</p>
            <p className='font-mulish text-base mx-5 font-light'>
              {props?.Address || 'address'}, {props?.City || 'city'},
              {props?.Country || 'country'}
            </p>
          </div>
          <div className='flex flex-col mb-12'>
            <div className='flex flex-row items-center mt-2'>
              <label
                htmlFor='event url'
                className='mb-1 font-mulish w-24 text-lg mt-1'
              >
                Event Link
              </label>
              <a
                className='rounded-lg mx-5 w-96 font-mulish text-blue-400 text-base font-light'
                href={props?.URL || 'url'}
              >
                {props?.URL || 'url'}
              </a>
            </div>
            <div>
              <label htmlFor='Links' className='mb-1 font-inter text-lg '>
                Contact
              </label>
              <div className='flex flex-row mt-2 w-4/5'>
                <p className='font-mulish text-base font-light'>
                  {props.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <h2 className='my-4 text-xl font-semibold'>Details</h2> */}

        {/* <div className='my-2 grid '>
          <p>City: {props?.City || 'city'}</p>
          <p>Country: {props?.Country || 'country'}</p>
          <p>Address: {props?.Address || 'address'}</p>
          <p>Start Time: {props?.Start || 'starttime'}</p>
          <p>End Time: {props?.End || 'endtime'}</p>
          <p>Event URL: {props?.URL || 'url'}</p>
        </div>
        <p>{props.description}</p>*/}
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
