import * as React from 'react';
import EventTitle from '../../../components/eventComponents/Title';
import Header from '../../../components/header';
import { gql, useQuery } from '@apollo/client';
import { mediaurl } from '../../../components/config';

const EVENT_QUERY = gql`
  query eventById($id: ID) {
    eventById(id: $id) {
      iscore
      isvolunteer
      isregistered
      ischeckedin
      id
      name
      startTime
      attendees {
        id
        lastLogin
        isSuperuser
        username
        firstName
        lastName
        email
        isStaff
        isActive
        dateJoined
        profile {
          profilePicture
          city
        }
      }
      checkins {
        id
        lastLogin
        isSuperuser
        username
        firstName
        lastName
        email
        isStaff
        isActive
        dateJoined
        profile {
          profilePicture
          city
        }
      }
    }
  }
`;

function MemberCard(props) {
  // TODO: take userid and eventid in props on Click make call

  return (
    <div className='my-2 flex items-center border-b-2 p-2 border-gray-400'>
      <div className='flex flex-row w-full'>
        <div className='flex'>
          <img
            src={mediaurl + props.memberData?.profile.profilePicture}
            className='h-14 w-14 rounded-full object-cover'
          />
          <div className='mx-10'>
            <p className='text-xl'>{props.memberData?.username}</p>
            <p>{props.memberData?.profile.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ViewEvent(props) {
  let uid: string;
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    uid = props.uid;
    //  parseInt(window.location.href.split('#')[1] || '0');
  } else {
    uid = '1';
  }
  const { loading, error, data, refetch } = useQuery(EVENT_QUERY, {
    variables: { id: uid },
  });

  const [sel, setSel] = React.useState(false);

  React.useEffect(() => {
    refetch();
  }, []);

  if (loading) {
    return `Loading`;
  }
  if (error) {
    return `Error! ${error}`;
  }

  let registeredjsx = data?.eventById.attendees?.map((e, i) => {
    return (
      <li>
        <MemberCard memberData={e} />
      </li>
    );
  });
  let checkedjsx = data?.eventById.checkins?.map((e, i) => {
    return (
      <li>
        <MemberCard memberData={e} />
      </li>
    );
  });

  const activetab: string =
    'text-blue-500 border-b-2 font-medium border-blue-500';
  return (
    <div className='m-2  h-screen'>
      <Header />
      <div className='flex flex-col mx-auto w-3/4 items-center'>
        <EventTitle
          datetime={new Date(data.eventById.startTime)}
          title={data.eventById.name}
        />
      </div>
      <div className='w-3/4 pt-4 mx-auto flex items-start justify-between'>
        <div>
          <h2 className='font-inter text-2xl font-base'>Attendees</h2>
        </div>

        <div className='flex flex-row align-center font-inter '>
          <button
            className={
              sel
                ? 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-inter' +
                  activetab
                : 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-inter'
            }
            onClick={() => {
              setSel(true);
            }}
          >
            Registered Attendees
          </button>
          <button
            className={
              !sel
                ? 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-inter' +
                  activetab
                : 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-inter'
            }
            onClick={() => {
              setSel(false);
            }}
          >
            Checkedin Attendees
          </button>
        </div>
      </div>
      <div className='flex flex-col mx-auto w-3/4 items-start mt-4'>
        <ol className='flex flex-col list-decimal text-gray-700 mt-4 mx-4 justify-evenly w-full'>
          {sel ? registeredjsx : checkedjsx}
        </ol>
      </div>
    </div>
  );
}
