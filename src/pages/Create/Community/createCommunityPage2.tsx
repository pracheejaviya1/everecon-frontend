import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import * as React from 'react';
import MemberCard from '../../../components/cards/members/membersCard';
import Header from '../../../components/header';

const USERNAME_QUERY = gql`
  query userByName($username: String!) {
    userByName(username: $username) {
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
    }
  }
`;
const ADD_MEMBER_MUTATION = gql`
  mutation addCoreMember($community: ID!, $user: ID!) {
    addCoreMember(community: $community, user: $user) {
      ok
    }
  }
`;
const GET_MEMBERS = gql`
  query communityById($id: ID) {
    communityById(id: $id) {
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
        profile {
          city
          country
          profilePicture
        }
      }
    }
  }
`;
// TODO: ERROR Display required
export default function CreateCommunityTwo({ location }) {
  const communityid = location.state?.communityid;
  const [username, setUsername] = React.useState('');
  const [fetch_user, { data: userdata }] = useLazyQuery(USERNAME_QUERY);
  const [callAddMember, { data }] = useMutation(ADD_MEMBER_MUTATION);

  const { data: data_members, refetch: refetch_members } = useQuery(
    GET_MEMBERS,
    {
      variables: { id: communityid },
    }
  );

  React.useEffect(() => {
    if (!userdata) {
      return;
    }
    let data = userdata.userByName;
    let userid = data.id;
    callAddMember({
      variables: {
        community: communityid,
        user: userid,
      },
    })
      .then(r => {
        //TODO:error username not found
        refetch_members();
      })
      .catch(e => console.error(e));
  }, [userdata]);

  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col mt-16 justify-center items-center'>
        <div className='flex mb-2 items-center justify-between border-b-2 pb-2 w-1/2'>
          <Link to='/Create/Community/createCommunityPage1'>
            <svg
              xmlns='https://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
          </Link>
          <span className='text-3xl flex-grow text-center font-base font-mulish'>
            Create Community
          </span>
        </div>
        <div className='flex items-center justify-start mt-4 w-1/2 font-inter'>
          <span className='mr-10 text-2xl'>Add Members</span>
          <div className='flex ml-10 py-1 px-4 rounded-lg items-center justify-between bg-gray-100'>
            <input
              type='text'
              className='border-none w-80 bg-gray-100'
              placeholder='Enter member name'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <button
              onClick={() =>
                fetch_user({
                  variables: {
                    username: username,
                  },
                })
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
        {data_members &&
          data_members.communityById &&
          data_members.communityById.coreMembers.map((e, i) => (
            <MemberCard
              name={e.firstName + e.lastName}
              location={e.profile.city + ',' + e.profile.country}
              userid={e.id}
              communityid={communityid}
              refetch={refetch_members}
              key={i}
            />
          ))}

        <button
          className=' my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'
          onClick={() =>
            navigate('/Create/Community/createCommunityPage3', {
              state: { communityid: communityid },
            })
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
