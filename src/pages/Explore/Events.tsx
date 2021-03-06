import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import * as React from 'react';
import EventCard from '../../components/cards/event/eventCard';
import Header from '../../components/header';

const LIST_EVENTS = gql`
  query events($kind: Int, $length: Int, $filter: String, $desc: Boolean) {
    events(kind: $kind, length: $length, filter: $filter, desc: $desc) {
      iscore
      isvolunteer
      isregistered
      ischeckedin
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
      category {
        id
        name
        description
      }
      tags {
        id
        name
      }
      community {
        name
      }
    }
  }
`;

export default function ExploreCommunity() {
  const { data: events_data, refetch } = useQuery(LIST_EVENTS, {
    variables: {
      kind: 0,
      length: 2,
      desc: true,
      filter: '',
    },
  });
  React.useEffect(() => {
    refetch();
  }, []);
  return (
    <div className='bg-explore_events bg-fixed bg-contain bg-no-repeat bg-bottom'>
      <Header />
      <div className='flex flex-col divide-y items-center divide-gray-500'>
        <div className='w-2/3'>
          <h1 className='my-5 text-2xl font-mulish text-center'>
            Explore Events
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

          {events_data &&
            events_data.events.map(e => (
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
