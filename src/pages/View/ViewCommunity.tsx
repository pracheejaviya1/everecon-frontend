import { useQuery, useMutation } from '@apollo/client';
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

const FOLLOW = gql`
  mutation addFollower($community: ID!, $user: ID!) {
    addFollower(community: $community, user: $user) {
      ok
    }
  }
`;

const UNFOLLOW = gql`
  mutation removeFollower($community: ID!, $user: ID!) {
    removeFollower(community: $community, user: $user) {
      ok
    }
  }
`;

const MYID = gql`
  query myprofile {
    myprofile {
      id
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

  const { loading, error, data, refetch } = useQuery(COMMUNITY_QUERY, {
    variables: { id: uid },
  });
  const [fnuf, setFnuf] = React.useState(false);
  const [id, setID] = React.useState(0);
  const { loading: loading_id, error: error_id, data: profdata } = useQuery(
    MYID
  );
  const [callFollow, dataF] = useMutation(FOLLOW);
  const [callUnfollow, dataUF] = useMutation(UNFOLLOW);

  React.useEffect(() => {
    setFnuf(data?.communityById.isfollower);
  }, [data]);
  React.useEffect(() => {
    if (!loading) setID(profdata?.myprofile.id);
  }, [loading]);

  React.useEffect(() => {
    refetch();
  }, []);

  async function handlefnunf() {
    if (fnuf) {
      let { data, errors: e } = await callUnfollow({
        variables: {
          community: uid,
          user: id,
        },
      });
      if (e) {
        console.error(e);
        return;
      } else {
        console.log(data);
      }
    } else {
      let { data, errors: e } = await callFollow({
        variables: {
          community: uid,
          user: id,
        },
      });
      if (e) {
        console.error(e);
        return;
      } else {
        console.log(data);
      }
    }
    return;
  }

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
          {data?.communityById.iscore ? (
            <button
              className='text-sm bg-blue-400 text-white rounded-md px-3 py-2 mx-2 my-1'
              onClick={() =>
                navigate('/Create/Event/createEventPage1', {
                  state: { communityid: uid },
                })
              }
            >
              New Event
              {/* {props.isLead === true ? 'New Event' : 'Follow'} */}
            </button>
          ) : (
            <button
              className='text-sm bg-blue-400 text-white rounded-md px-3 py-2 mx-2 my-1'
              onClick={e => {
                handlefnunf();
                setFnuf(!fnuf);
                return e.preventDefault();
              }}
            >
              {fnuf == true ? 'Unfollow' : 'Follow'}
            </button>
          )}
        </div>
      </div>
      <div className='w-2/3 m-auto py-4 font-inter justify-between flex'>
        <div className='w-1/3'>
          <div className='w-full flex justify-between'>
            <button onClick={e => e.preventDefault()} type='submit'>
              About
            </button>
            <Link to={'/communityevents/' + uid}>Events</Link>
            <Link to={'/communitymembers/' + uid}>Members</Link>
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
          {data?.communityById.iscore ? (
            <button
              className='text-sm bg-blue-400 text-white rounded-md px-3 py-2 mx-2 my-1'
              onClick={() =>
                navigate('/Create/Community/updateCommunity', {
                  state: { communityid: uid },
                })
              }
            >
              Update Community
              {/* {props.isLead === true ? 'New Event' : 'Follow'} */}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
