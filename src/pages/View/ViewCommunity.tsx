import { useQuery } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import gql from 'graphql-tag';
import * as React from 'react';
import { mediaurl } from '../../components/config';
import Header from '../../components/header';

type TagProps = {
  title: string;
};

const COMMUNITY_QUERY = gql`
  query communityById($id: ID) {
    communityById(id: $id) {
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
      iscore
      isfollower
      isvolunteer
      leader {
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
      coreMembers {
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
      volunteers {
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
      }
    }
  }
`;

function Tag(props: TagProps) {
  return (
    <span className='rounded-full text-center m-2 bg-gray-300 px-2 py-1'>
      {props.title}
    </span>
  );
}

export default function ViewCommunity(props) {
  let uid: string;
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    uid = props.uid;
    //  parseInt(window.location.href.split('#')[1] || '0');
  } else {
    uid = '1';
  }

  const { loading, error, data } = useQuery(COMMUNITY_QUERY, {
    variables: { id: uid },
  });
  if (loading) {
    return `Loading`;
  }
  if (error) {
    return `Error! ${error}`;
  }

  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex border-b-2 py-10 w-2/3 mx-auto font-inter'>
        <img
          className='h-60 w-90 rounded-md'
          src={mediaurl + data.communityById.logo}
        />
        <div className='flex ml-10 items-start justify-between h-full flex-col font-inter'>
          <h1 className='font-bold text-2xl mx-2'>
            {data?.communityById.name}
          </h1>
          <p className='text-xl mx-2 mb-1'>{data?.communityById.city}</p>
          <p className='text-xl mx-2 text-gray-400 mb-1'>
            {data?.communityById.leader.username}
          </p>
          <button
            className='text-sm bg-blue-400 text-white rounded-md px-3 py-2 mx-2 my-1'
            onClick= {() => navigate('/Create/Event/createEventPage1',{state:{communityid:uid}})}
          >
            New Event
            {/* {props.isLead === true ? 'New Event' : 'Follow'} */}
          </button>
        </div>
      </div>
      <div className='w-2/3 m-auto py-4 font-inter justify-between flex'>
        <div className='w-1/3'>
          <div className='w-full flex justify-between'>
            <button onClick={e => e.preventDefault()} type='submit'>
              About
            </button>
            <Link to='/Explore/Events'>Events</Link>
            <button onClick={e => e.preventDefault()} type='submit'>
              Members
            </button>
            <button onClick={e => e.preventDefault()} type='submit'>
              Contact
            </button>
          </div>
          <p className='my-10 text-gray-500'>
            <div className='grid'>
              <p>Address: {data?.communityById.address || 'address'}</p>
              <p>City: {data?.communityById.city || 'city'}</p>
              <p>Country: {data?.communityById.country || 'Country'}</p>
              <p>Discord: {data?.communityById.discord || 'discord'}</p>
              <p>Facebook: {data?.communityById.facebook || 'facebook'}</p>
              <p>Twitter: {data?.communityById.twitter || 'twitter'}</p>
              <p>LinkedIn: {data?.communityById.linkedin || 'linkedin'}</p>
              {/* <p>Leader: {data?.communityById.leader || 'Leader'}</p> */}
              <p>
                Featured Video:{' '}
                {data?.communityById.featuredVideo || 'featuredVideo'}
              </p>
            </div>
            {data?.communityById.description || 'description'}
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
        </div>
      </div>
    </div>
  );
}
