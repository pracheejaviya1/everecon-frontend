import { gql, useMutation, useQuery } from '@apollo/client';
import { Link } from 'gatsby';
import * as React from 'react';
// import CommunityImage from '../../assets/Images/community.jpg';
import { mediaurl } from '../../components/config';
import Header from '../../components/header';
import EventCard from '../../components/cards/event/eventCard';

const PROFILE_QUERY = gql`
  query myprofile {
    myprofile {
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
        id
        contact
        city
        country
        profilePicture
      }
      eventsAttended {
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
      communities {
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
      communitySet {
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
      communitiesCoreMembers {
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
      communitiesVolunteers {
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

const UNFOLLOW_COMMUNITY_MUTATION = gql`
  mutation removeFollower($community: ID!, $user: ID!) {
    removeFollower(community: $community, user: $user) {
      ok
    }
  }
`;
//TODO: Add new card for my communities, remove favorites, add logo in community, tickets, historym following, link commuinty page
function CommunityCard({ name, logo, userid, communityid, refetch }) {
  const [callRemoveFollower, { data }] = useMutation(
    UNFOLLOW_COMMUNITY_MUTATION
  );
  const UnfollowCommunity = (userid, communityid) => {
    //console.log(userid, communityid);
    callRemoveFollower({
      variables: {
        community: communityid,
        user: userid,
      },
    });
    // call unfollow community
  };

  return (
    <div className='flex flex-row items-center justify-between p-2 shadow-md mx-auto rounded-lg text-left my-2 mt-3'>
      <div className='flex'>
        <img className='h-20 w-30 mx-5 my-2 rounded-md' src={logo} />
        <span className='text-2xl my-5 font-semibold mx-5 font-inter'>
          {name}
        </span>
      </div>
      <div className='float-right mx-3'>
        <button
          className='font-inter my-2 text-xs bg-red-200 text-black rounded-lg px-2 py-2'
          onClick={() => UnfollowCommunity(userid, communityid)}
        >
          Unfollow
        </button>
      </div>
    </div>
  );
}

function MyCommunityCard({ name, logo, userid, communityid }) {
  return (
    // <div className='flex flex-row items-center justify-between p-2 shadow-md mx-auto rounded-lg w-full text-left my-2 mt-3'>
    <Link
      to={`/community/${communityid}`}
      className='flex flex-row items-center justify-between p-2 shadow-md mx-auto rounded-lg text-left my-2 mt-3'
    >
      <div className='flex'>
        <img
          className='h-20 w-30 mx-5 my-2 rounded-md object-cover'
          src={logo}
        />
        <span className='text-2xl my-5 font-semibold mx-5 font-inter'>
          {name}
        </span>
      </div>
      <div className='float-right mx-3'>
        {/* <button
          className='font-inter my-2 text-xs bg-red-200 text-black rounded-lg px-2 py-2'
          onClick={() => UnfollowCommunity(userid, communityid)}
        >
          Unfollow
        </button> */}
      </div>
    </Link>
    // </div>
  );
}

function DetailsCard(props: any) {
  return (
    <div className='p-5 w-full shadow-md mx-auto rounded-lg my-2 mt-3 font-inter flex flex-row'>
      <div className='flex flex-col w-1/2'>
        <div className='flex flex-row'>
          <p className='text-gray-500 text-md w-24'> Username</p>
          <p className='text-gray-700 text-lg mx-10'>{props.username}</p>
        </div>
        <div className='flex flex-row'>
          <p className='text-gray-500 text-md w-24'> Name</p>
          <p className='text-gray-700 text-lg ml-10'>{props.firstname}</p>
          <p className='text-gray-700 text-lg mx-2'>{props.lastname}</p>
        </div>
        <h2 className='text-2xl text-blue-500 mt-2'>Contact</h2>
        <hr className='w-16 mb-2 border border-gray-500' />
        <div className='flex flex-row'>
          <p className='text-gray-500 text-md w-24'> Phone No</p>
          <p className='text-gray-700 text-lg mx-10'>{props.contact}</p>
        </div>
        <div className='flex flex-row'>
          <p className='text-gray-500 text-md w-24'> Email</p>
          <p className='text-gray-700 text-lg mx-10'>{props.email}</p>
        </div>

        <h2 className='text-2xl text-blue-500 mt-4'>Address</h2>
        <hr className='w-16 mb-2 border border-gray-500' />
        <div className='flex flex-row'>
          <p className='text-gray-500 text-md w-24'> City</p>
          <p className='text-gray-700 text-lg mx-10'>{props.city}</p>
        </div>
        <div className='flex flex-row'>
          <p className='text-gray-500 text-md w-24'> Country</p>
          <p className='text-gray-700 text-lg mx-10'>{props.country}</p>
        </div>
      </div>
      <div className='items-end flex flex-col w-1/2'>
        <p className='text-green-600'>Last Active</p>
        <p>{props.lastLogin}</p>
      </div>
    </div>
  );
}

const FOLLOWING = 0;
const EVENTS = 1;
const COMMUNITYSET = 2;
const DETAILS = 3;

export default function UserProfile() {
  const [userid, setUserid] = React.useState(null);
  const [options, setOptions] = React.useState([
    'Following ',
    'Events Attended',
    'My Communities',
    'Details',
  ]);
  const [selected, setSelected] = React.useState(0);
  const { loading, error, data, refetch } = useQuery(PROFILE_QUERY);
  React.useEffect(() => {
    console.log(data);
    if (loading == false) setUserid(data.myprofile.id);
  }, [loading]);
  React.useEffect(() => {
    refetch();
  }, []);
  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col w-1/2 mx-auto items-center justify-center'>
        <img
          src={mediaurl + data.myprofile.profile.profilePicture}
          className='my-8 h-28 w-28 rounded-full object-cover'
        />
        <p className='text-2xl font-mulish'>{data.myprofile.username}</p>
        <p className='text-xl font-mulish'>{data.myprofile.profile.country}</p>
      </div>
      <div className='flex flex-col my-8 w-1/2 mx-auto items-center justify-center'>
        <div className='w-full py-2 border-b-2'>
          <div className='flex justify-between items-center font-inter'>
            <div className='flex justify-between w-4/12 '>
              {options.map((e, i) => (
                <button
                  onClick={() => setSelected(i)}
                  key={i}
                  className={selected == i ? 'font-bold px-4' : '' + ' px-4'}
                >
                  {e}
                </button>
              ))}
            </div>
            <div className='px-2'>
              <Link
                to='/Create/Community/createCommunityPage1'
                className='mx-2'
              >
                Create Community
              </Link>
              <Link to='/Create/Speaker' className='mx-2'>
                Add New Speaker
              </Link>
            </div>
          </div>
        </div>
        {selected === FOLLOWING &&
          data.myprofile.communities.map((e, i) => (
            <Link className='w-full' to={'/community/' + e.id}>
              <CommunityCard
                key={i}
                name={e.name}
                logo={mediaurl + e.logo}
                userid={userid}
                communityid={e.id}
                refetch={refetch}
              ></CommunityCard>
            </Link>
          ))}

        {selected === EVENTS &&
          data.myprofile.eventsAttended.map((e, i) => (
            <div className='w-full'>
              <EventCard
                communityName={e.community.name}
                title={e.name}
                date={e.startTime}
                imageurl={e.featuredImage}
                id={e.id}
              />
            </div>
          ))}
        {selected === COMMUNITYSET &&
          data.myprofile.communitySet.map((e, i) => (
            <MyCommunityCard
              key={i}
              name={e.name}
              logo={mediaurl + e.logo}
              userid={userid}
              communityid={e.id}
            ></MyCommunityCard>
          ))}
        {/* {selected === DETAILS ? JSON.stringify(data.myprofile) : ''
        } */}
        {selected === DETAILS ? (
          <DetailsCard
            firstname={data.myprofile.firstName}
            lastname={data.myprofile.lastName}
            username={data.myprofile.username}
            city={data.myprofile.profile.city}
            country={data.myprofile.profile.country}
            lastLogin={data.myprofile.lastLogin}
            email={data.myprofile.email}
            contact={data.myprofile.profile.contact}
          ></DetailsCard>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
