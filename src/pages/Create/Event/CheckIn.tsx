import * as React from 'react';
import EventTitle from '../../../components/eventComponents/Title';
import Header from '../../../components/header';
import { gql, useQuery, useMutation } from '@apollo/client';
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

const CHECKIN_EVENT = gql`
  mutation checkinEvent($eventid: ID!, $userid: ID!) {
    checkinEvent(eventid: $eventid, userid: $userid) {
      ok
      message
    }
  }
`;

const UNCHECKIN_EVENT = gql`
  mutation uncheckinEvent($eventid: ID!, $userid: String!) {
    uncheckinEvent(eventid: $eventid, userid: $userid) {
      ok
      message
    }
  }
`;

function MemberCard(props) {
  // TODO: take userid and eventid in props on Click make call
  const [checkedin, setCheckedin] = React.useState(props.checked);
  const [callCheckin, dataCk] = useMutation(CHECKIN_EVENT);
  const [callUncheckin, dataUc] = useMutation(UNCHECKIN_EVENT);
  async function handlecnuc() {
    let checkins;
    let uncheckins;
    if (checkedin) {
      let { data, errors: e } = await callUncheckin({
        variables: {
          eventid: props.eventid,
          userid: props.memberData.id,
        },
      });
      if (e) {
        console.error(e);
        alert(JSON.stringify(e.graphQLErrors[0].message));
        return;
      } else {
        console.log(data);
        checkins = [...props.checkedin].filter(function (item) {
          return item.id !== props.memberData.id;
        });
        uncheckins = [...props.notcheckedin];
        uncheckins.push(props.memberData);
        console.log(checkins);
        console.log(uncheckins);
        props.setCheckedin(checkins);
        props.setNotCheckedin(uncheckins);
        alert('member unchecked form event');
      }
    } else {
      let { data, errors: e } = await callCheckin({
        variables: {
          eventid: props.eventid,
          userid: props.memberData.id,
        },
      });
      if (e) {
        console.error(e);
        alert(JSON.stringify(e.graphQLErrors[0].message));
        return;
      } else {
        console.log(data);
        uncheckins = [...props.notcheckedin].filter(function (item) {
          return item.id !== props.memberData.id;
        });
        checkins = [...props.checkedin];
        checkins.push(props.memberData);
        console.log(checkins);
        console.log(uncheckins);
        props.setCheckedin(checkins);
        props.setNotCheckedin(uncheckins);
        alert('member checkedin event');
      }
    }
    return;
  }
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
        <input
          type='checkbox'
          className='form-checkbox h-5 w-5 text-blue-600 items-end'
          checked={checkedin}
          onChange={() => {
            handlecnuc();
          }}
        />
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
  const [checkedin, setCheckedin] = React.useState();
  const [notcheckedin, setNotCheckedin] = React.useState();
  const [permission, setPermission] = React.useState(true);
  const { loading, error, data, refetch } = useQuery(EVENT_QUERY, {
    variables: { id: uid },
  });
  React.useEffect(() => {
    refetch();
  }, []);

  React.useEffect(() => {
    if (!loading) {
      let attendees = data?.eventById.attendees;
      let checkins = data?.eventById.checkins;
      setCheckedin(data?.eventById.checkins);
      setNotCheckedin(
        attendees.filter(v => !checkins.some(e => e.id === v.id))
      );
      if (!(data?.eventById.iscore || data?.eventById.isvolunteer)) {
        setPermission(false);
      }
    }
  }, [loading]);

  if (loading) {
    return `Loading`;
  }
  if (error) {
    return `Error! ${error}`;
  }

  if (!permission) {
    return `You don't have permission to view this page`;
  }

  const input_class: string =
    'border-gray-100 p-3 text-xs block w-80 rounded-xl font-mulish bg-gray-100 ';
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
          <h2 className='font-inter text-2xl font-base'>Check-In Attendees</h2>
        </div>
      </div>
      <div className='flex flex-col mx-auto w-3/4 items-start mt-4'>
        <ol className='flex flex-col list-decimal text-gray-700 mt-4 mx-4 justify-evenly w-full'>
          {notcheckedin?.map((e, i) => {
            return (
              <li>
                <MemberCard
                  memberData={e}
                  checked={false}
                  setCheckedin={setCheckedin}
                  setNotCheckedin={setNotCheckedin}
                  eventid={uid}
                  checkedin={checkedin}
                  notcheckedin={notcheckedin}
                />
              </li>
            );
          })}
          {checkedin?.map((e, i) => {
            return (
              <li>
                <MemberCard
                  memberData={e}
                  checked={true}
                  setCheckedin={setCheckedin}
                  setNotCheckedin={setNotCheckedin}
                  eventid={uid}
                  checkedin={checkedin}
                  notcheckedin={notcheckedin}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
