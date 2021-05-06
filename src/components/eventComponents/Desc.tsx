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
        <div className='flex flex-row space-x-2'>
          <Link to={`/eventcheckin/${eventid}`}>
            <button className='my-3 mx-3 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
              Checkin
            </button>
          </Link>
          <Link to={`/eventattendees/${eventid}`}>
            <button className='my-3 mx-3 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
              Attendees
            </button>
          </Link>
        </div>
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
      <div className='flex flex-row space-x-2'>
        <Link to={`/eventcheckin/${eventid}`}>
          <button className='my-3 mx-3 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
            Checkin
          </button>
        </Link>
        <Link to={`/eventattendees/${eventid}`}>
          <button className='my-3 mx-3 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
            Attendees
          </button>
        </Link>
      </div>
    );
  else if (isregistered)
    return (
      <>
        <button className='my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
          UnRegister
        </button>
        <Link to={`/eventattendees/${eventid}`}>
          <button className='my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
            Attendees
          </button>
        </Link>
      </>
    );
  else
    return (
      <>
        <button className='my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
          Register
        </button>
        <Link to={`/eventattendees/${eventid}`}>
          <button className='my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
            Attendees
          </button>
        </Link>
      </>
    );
};

type TagProps = {
  title: string;
};

function Tag(props: TagProps) {
  return (
    <span className='rounded-full text-center text-sm m-2 bg-gray-100 px-2 py-1'>
      {props.title}
    </span>
  );
}
export default function EventDesc(props: any) {
  console.log(props.URL);
  return (
    <div className='flex items-start justify-between w-full my-2 font-inter'>
      <div className='w-1/2 my-2'>
        <img
          className='rounded-md h-48 w-96'
          src={mediaurl + props.eventData.featuredImage}
        />
        <h2 className='my-4 text-xl font-semibold'>Details</h2>
        <div>
          <div className='flex flex-row mt-6 w-4/5'>
            <p className='font-inter text-lg font-light'>
              {props.eventData.description}
            </p>
          </div>
          <hr className='my-4' />

          <div className='flex flex-row mt-6'>
            <p className='text-xl font-mulish'>Address</p>
            <p className='font-mulish text-base mx-14 font-light'>
              {props?.eventData.address || 'address'}
            </p>
          </div>
          <div className='flex flex-row'>
            <p className=' text-xl font-mulish'>City</p>
            <p className='font-mulish text-base mx-24 font-light'>
              {props?.eventData.city || 'city'}
            </p>
          </div>
          <div className='flex flex-row'>
            <p className=' text-xl font-mulish'>Country</p>
            <p className='font-mulish text-base mx-16 font-light'>
              {props?.eventData.country || 'country'}
            </p>
          </div>

          <div className='flex flex-col mt-6 mb-12'>
            <div className='flex flex-row items-center mt-2'>
              <label htmlFor='event url' className='text-xl font-inter'>
                Event Link
              </label>
              <a
                className='rounded-lg mx-10 w-96 font-inter text-blue-400 text-base font-light'
                href={window.location.href || 'url'}
              >
                {window.location.href || 'url'}
              </a>
            </div>
            <div className='flex flex-row items-center mt-3'>
              <label htmlFor='start time' className='text-md w-48 font-inter'>
                Start Time
              </label>
              <p className='rounded-lg mx-5 w-96 font-inter text-green-500 mx-12 text-lg font-light'>
                {props?.eventData.startTime || 'startTime'}
              </p>
              <label htmlFor='end time' className='text-md w-48 font-inter'>
                End Time
              </label>
              <p className='rounded-lg mx-5 w-96 font-inter text-green-500 mx-12 text-lg font-light'>
                {props?.eventData.endTime || 'endTIme'}
              </p>
            </div>
            <div className='flex flex-row items-center mt-6'>
              <label htmlFor='category' className='text-xl font-inter'>
                Category
              </label>
              <p className='rounded-lg mx-5 w-96 font-inter text-orange-600 mx-12 text-lg font-light'>
                {props?.eventData.category.name || 'category'}
              </p>
            </div>
            <div className='flex flex-row items-center mt-6'>
              <label htmlFor='category' className='text-xl font-inter'>
                Tags
              </label>
              <p className='rounded-lg mx-20 w-96 font-inter text-orange-600 mx-12 text-lg font-light'>
                {props.eventData.tags.map(e => (
                  <Tag title={e.name} />
                ))}
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
              <p className='rounded-lg w-96 font-inter text-orange-600 text-lg font-light'>
                {props.eventData.community.name}
              </p>
            </div>
            <div className='flex flex-col items-start mt-3'>
              <p className='rounded-lg w-96 font-inter text-orange-600 text-md font-light'>
                <a href={'mailto:' + props.eventData.community.email}>
                  {props.eventData.community.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-around'>
        <SpeakerBlock />
        <EventAction
          iscore={props.eventData.iscore}
          isvolunteer={props.eventData.isvolunteer}
          isregistered={props.eventData.isregistered}
          eventid={props.eventData.id}
        />
        <p>
          {props.eventData.kind === 'V' ? 'Virtual Event' : 'In-Person Event'}
        </p>
      </div>
    </div>
  );
}
