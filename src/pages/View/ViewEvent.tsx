import { gql, useQuery } from '@apollo/client';
import * as React from 'react';
import EventDesc from '../../components/eventComponents/Desc';
import EventTitle from '../../components/eventComponents/Title';
import Header from '../../components/header';

const EVENT_QUERY = gql`
  query eventById($id: ID) {
    eventById(id: $id) {
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
      attendees {
        id
        password
        lastLogin
        isSuperuser
        username
        firstName
        lastName
        email
        isStaff
        isActive
        dateJoined
      }
      checkins {
        id
        password
        lastLogin
        isSuperuser
        username
        firstName
        lastName
        email
        isStaff
        isActive
        dateJoined
      }
      speakers {
        id
        firstName
        lastName
        email
        facebook
        instagram
        profilePicture
        description
      }
      community {
        id
        name
        description
        logo
        banner
        featuredVideo
        address
        city
        country
        email
        membersCount
        website
        facebook
        linkedin
        twitter
        instagram
        discord
        isActive
        creationTime
      }
    }
  }
`;

export default function ViewEvent(props) {
  let uid: string;
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    uid = props.uid;
    //  parseInt(window.location.href.split('#')[1] || '0');
  } else {
    uid = '1';
  }

  const { loading, error, data } = useQuery(EVENT_QUERY, {
    variables: { id: uid },
  });
  if (loading) {
    return `Loading`;
  }
  if (error) {
    return `Error! ${error}`;
  }

  return (
    <div className='h-screen'>
      <Header />
      <div className='flex flex-col mx-auto w-3/4 items-center'>
        <EventTitle
          datetime={new Date(data.eventById.startTime)}
          title={data.eventById.name}
        />
        <EventDesc
          Address={data.eventById.address}
          City={data.eventById.city}
          Country={data.eventById.country}
          End={new Date(data.eventById.endTime).toISOString()}
          Start={new Date(data.eventById.startTime).toISOString()}
          URL={data.eventById.url}
          description={data.eventById.description}
          uid={props.uid}
          imageurl={data.eventById.featuredImage}
          iscore={data.eventById.iscore}
          isvolunteer={data.eventById.isvolunteer}
          isregistered={data.eventById.isregistered}
          ischeckedin={data.eventById.ischeckedin}
          eventid={data.eventById.id}
        />
      </div>
    </div>
  );
}
