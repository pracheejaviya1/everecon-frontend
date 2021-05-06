import { useQuery, useMutation } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import gql from 'graphql-tag';
import * as React from 'react';
import { mediaurl } from '../../components/config';
import Header from '../../components/header';
// import YT from '../../assets/Images/ahmedabad.jpeg';

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

  function getVideoId(url) {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);

      return match && match[2].length === 11 ? match[2] : null;
    } catch (error) {
      return null;
    }
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
          className='h-64 w-92 object-cover rounded-md'
          src={mediaurl + data.communityById.logo}
        />
        <div className='flex ml-10 items-start justify-between h-full flex-col font-inter'>
          <h1 className='font-light text-4xl mx-2 mb-2'>
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
      <div className='m-auto w-2/3 py-4 font-inter text-lg justify-between flex'>
        <div>
          <div className='flex'>
            <button onClick={e => e.preventDefault()} type='submit'>
              About
            </button>
            <Link className='mx-12' to={'/communityevents/' + uid}>
              Events
            </Link>
            <Link to={'/communitymembers/' + uid}>Members</Link>
            <button
              className='mx-12'
              onClick={e => e.preventDefault()}
              type='submit'
            >
              Contact
            </button>
          </div>
          <div>
            <div className='flex flex-row mt-12'>
              <iframe
                className='rounded-md'
                height='200'
                width='300'
                src={
                  'https://www.youtube.com/embed/' +
                    getVideoId(data?.communityById.featuredVideo) ||
                  'featuredVideo'
                }
                allow='autoplay; encrypted-media'
                title='video'
              />

              <p className='font-mulish text-base mx-5 font-light'>
                {' '}
                {data?.communityById.description}
              </p>
            </div>
            <div className='flex flex-row mt-12'>
              <p className='w-36 h-24 text-xl font-mulish'>Address</p>
              <p className='font-mulish text-base mx-5 font-light'>
                {data?.communityById.address || 'address'}
              </p>
            </div>
            <div className='flex flex-col mb-12'>
              <div>
                <label htmlFor='Links' className='mb-1 font-inter text-xl '>
                  Find us At
                </label>
              </div>
              <div className='flex flex-row items-center mt-2'>
                <label
                  htmlFor='email id'
                  className='mb-1 font-mulish w-24 text-lg mt-1'
                >
                  Email ID
                </label>
                <a
                  className='rounded-lg mx-5 w-96 font-mulish text-blue-400 text-base font-light'
                  href={'mailto:' + data?.communityById.email}
                >
                  {data?.communityById.email}
                </a>
              </div>
              <div className='flex flex-row items-center mt-2'>
                <label
                  htmlFor='website url'
                  className='mb-1 font-mulish text-lg mt-1 w-24'
                >
                  Website
                </label>
                <a
                  className='rounded-lg mx-5 w-96 font-mulish text-blue-400 text-base font-light'
                  href={data?.communityById.website}
                >
                  {data?.communityById.website}
                </a>
              </div>
              <div className='flex flex-row items-center mt-2'>
                <label
                  htmlFor='linkedin url'
                  className='mb-1 font-mulish w-24 text-lg mt-1'
                >
                  LinkedIn
                </label>
                <a
                  className='rounded-lg mx-5 w-96 font-mulish text-blue-400 text-base font-light'
                  href={data?.communityById.linkedin || 'linkedin'}
                >
                  {data?.communityById.linkedin || 'linkedin'}
                </a>{' '}
              </div>
              <div className='flex flex-row items-center mt-2'>
                <label
                  htmlFor='twitter url'
                  className='mb-1 font-mulish w-24 text-lg mt-1'
                >
                  Twitter
                </label>
                <a
                  className='rounded-lg mx-5 w-96 font-mulish text-blue-400 text-base font-light'
                  href={data?.communityById.twitter || 'twitter'}
                >
                  {data?.communityById.twitter || 'twitter'}
                </a>{' '}
              </div>
              <div className='flex flex-row items-center mt-2'>
                <label
                  htmlFor='facebook url'
                  className='mb-1 font-mulish w-24 text-lg mt-1'
                >
                  Facebook
                </label>
                <a
                  className='rounded-lg mx-5 w-96 font-mulish text-blue-400 text-base font-light'
                  href={data?.communityById.facebook || 'facebook'}
                >
                  {data?.communityById.facebook || 'facebook'}
                </a>
              </div>
            </div>
          </div>
          {/* <p className='my-10 text-gray-500'>
            <div className='grid'>
              <p>Address: {data?.communityById.address || 'address'}</p>
              <p>City: {data?.communityById.city || 'city'}</p>
              <p>Country: {data?.communityById.country || 'Country'}</p>
              <p>Discord: {data?.communityById.discord || 'discord'}</p>
              <p>Facebook: {data?.communityById.facebook || 'facebook'}</p>
              <p>Twitter: {data?.communityById.twitter || 'twitter'}</p>
              <p>LinkedIn: {data?.communityById.linkedin || 'linkedin'}</p>
              <p>Leader: {data?.communityById.leader || 'Leader'}</p>
              <p>
                Featured Video:{' '}
                {data?.communityById.featuredVideo || 'featuredVideo'}
              </p>
            </div>
            {data?.communityById.description || 'description'}
          </p> */}
        </div>
        <div className='flex items-end align-center flex-col w-4/5'>
          {data?.communityById.iscore ? (
            <button
              className='text-sm bg-blue-400 mx-3 items-center text-white rounded-md px-3 py-2'
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
          <p className='mt-4 mx-10 font-mulish'>Created On</p>
          <p className='text-gray-700 font-sm m-4'>
            {data?.communityById.creationTime}
          </p>
          <div className='bg-gray-100 mx-6 p-4 rounded-lg font-light font-mulish'>
            {data?.communityById.membersCount} members
          </div>
          <div className=' grid grid-cols-3 m-6 items-center my-4 justify-evenly justify-between'>
            {/* <Tag title='AI' />
            <Tag title='ML' />
            <Tag title='Tag' />
            <Tag title='Tag' />
            <Tag title='Tag' /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
