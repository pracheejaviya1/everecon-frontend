import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import * as React from 'react';
import EventCard from '../../components/cards/event/eventCard';
import Header from '../../components/header';
type TagProps = {
  text: string;
};

const COMMUNITY_EVENTS_QUERY = gql`
  query communityById($id: ID) {
    communityById(id: $id) {
      name
      events {
        id
        name
        description
        kind
        address
        city
        country
        liveUrl
        startTime
        endTime
        featuredImage
        isActive
        creationTime
        maxRsvp
        community {
          name
        }
      }
    }
  }
`;

function Tag(props: TagProps) {
  return (
    <span className='flex items-center mx-2 my-2 font-mulish rounded-lg justify-between border-gray-400 border px-2 h-3/4'>
      {props.text}{' '}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-3 w-3'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </span>
  );
}

export default function CommunityEvents(props) {
  let uid: string;
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    uid = props.uid;
    //  parseInt(window.location.href.split('#')[1] || '0');
  } else {
    uid = '1';
  }

  const { data, refetch } = useQuery(COMMUNITY_EVENTS_QUERY, {
    variables: {
      id: uid,
    },
  });
  React.useEffect(() => {
    refetch();
  }, []);
  const input_class: string =
    'border-gray-100 p-3 text-xs block w-80 rounded-xl font-mulish bg-gray-100';
  return (
    <div className='bg-explore_events bg-no-repeat bg-bottom h-screen'>
      <Header />
      <div className='m-6 flex flex-col divide-y divide-gray-500'>
        <div className='m-4'>
          <h1 className='my-5 text-2xl font-mulish text-center'>
            Events By {data?.communityById.name}
          </h1>

          {/* <div className='border-b-2 w-3/4 mx-auto items-center justify-between flex flex-row '>
            <div className='flex'>
              <form className='mb-2'>
                <input
                  type='text'
                  className={input_class}
                  placeholder='Search by category'
                  name='category'
                />
              </form>
              <Tag text='AI' />
              <Tag text='Machine Learning' />
            </div>
            <span className='text-sm font-mulish text-blue-500 my-2'>
              Reset
            </span>
          </div> */}
          {data?.communityById.events &&
            data?.communityById.events.map(e => (
              <EventCard
                communityName={e.community.name}
                title={e.name}
                date={e.startTime}
                imageurl={e.featuredImage}
                id={e.id}
              />
            ))}
          {/* <Link to='/View/ViewEvent'>
            <EventCard communityName='meh' date={new Date()} title='Title' />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
