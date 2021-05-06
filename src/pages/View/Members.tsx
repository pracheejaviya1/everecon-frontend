import * as React from 'react';
import Header from '../../components/header';
import { useQuery, useMutation, gql, useLazyQuery } from '@apollo/client';
import { mediaurl } from '../../components/config';
import { Link } from 'gatsby';

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
        profile {
          profilePicture
          city
        }
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
        profile {
          profilePicture
          city
        }
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
        profile {
          profilePicture
          city
        }
      }
      followers {
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
          profilePicture
          city
        }
      }
    }
  }
`;

const REMOVE_CORE = gql`
  mutation removeCoreMember($community: ID!, $user: ID!) {
    removeCoreMember(community: $community, user: $user) {
      ok
    }
  }
`;

const REMOVE_VOLUNTEER = gql`
  mutation removeVolunteer($community: ID!, $user: ID!) {
    removeVolunteer(community: $community, user: $user) {
      ok
    }
  }
`;

const ADD_CORE = gql`
  mutation addCoreMember($community: ID!, $user: ID!) {
    addCoreMember(community: $community, user: $user) {
      ok
    }
  }
`;

const ADD_VOLUNTEER = gql`
  mutation addVolunteer($community: ID!, $user: ID!) {
    addVolunteer(community: $community, user: $user) {
      ok
    }
  }
`;

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

function MemberCard(props) {
  // console.log(props.iscore);
  const [disp, setDisp] = React.useState(true);
  const [callRemoveVolunteer, dataRV] = useMutation(REMOVE_VOLUNTEER);
  const [callRemoveCore, dataRC] = useMutation(REMOVE_CORE);

  return (
    <div
      className={`${
        disp === false ? 'hidden' : ''
      } flex items-center justify-between font-mulish border-b-2 py-4 border-gray-200`}
    >
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
      {props.iscore &&
      (props.memberType === 'volunteer' || props.memberType === 'core') ? (
        <button
          onClick={async () => {
            if (props.memberType === 'core') {
              let { data, errors: e } = await callRemoveCore({
                variables: {
                  community: props.communityid,
                  user: props.memberData.id,
                },
              });
              if (e) {
                console.error(e);
                alert(JSON.stringify(e));
                return;
              } else {
                console.log(data);
                alert('member removed from core');
                props.refetchfunc();
              }
            }
            if (props.memberType == 'volunteer') {
              let { data, errors: e } = await callRemoveVolunteer({
                variables: {
                  community: props.communityid,
                  user: props.memberData.id,
                },
              });
              if (e) {
                alert(JSON.stringify(e));
                console.error(e);
                return;
              } else {
                console.log(data);
                alert('member removed from volunteer');
                props.refetchfunc();
              }
            }
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-red-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default function Members(props) {
  const [type, setType] = React.useState('volunteer');

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
  const [fetch_user, { data: userdata }] = useLazyQuery(USERNAME_QUERY);
  const [callAddVolunteer, dataAV] = useMutation(ADD_VOLUNTEER);
  const [callAddCore, dataAC] = useMutation(ADD_CORE);
  const [username, setUsername] = React.useState('');
  React.useEffect(() => {
    refetch();
  }, []);

  React.useEffect(() => {
    if (!userdata) {
      return;
    }
    let data = userdata.userByName;
    let userid = data.id;
    if (type === 'volunteer') {
      callAddVolunteer({
        variables: {
          community: uid,
          user: userid,
        },
      })
        .then(r => {
          //TODO:error username not found
          refetch();
        })
        .catch(e => {
          console.error(e);
          alert(JSON.stringify(e));
        });
    }
    if (type === 'core') {
      callAddCore({
        variables: {
          community: uid,
          user: userid,
        },
      })
        .then(r => {
          //TODO:error username not found
          refetch();
        })
        .catch(e => {
          console.error(e);
          alert(JSON.stringify(e));
        });
    }
  }, [userdata]);

  let memjsx;
  if (type === 'lead') {
    memjsx = (
      <MemberCard
        communityid={data?.communityById.id}
        memberType={type}
        memberData={data?.communityById.leader}
        refetchfunc={refetch}
        iscore={data?.communityById.iscore}
      />
    );
  } else if (type === 'core') {
    memjsx = data?.communityById.coreMembers?.map((e, i) => {
      return (
        <MemberCard
          communityid={data?.communityById.id}
          key={i}
          memberType={type}
          memberData={e}
          refetchfunc={refetch}
          iscore={data.communityById.iscore}
        />
      );
    });
  } else if (type === 'volunteer') {
    memjsx = data?.communityById.volunteers?.map((e, i) => {
      return (
        <MemberCard
          communityid={data?.communityById.id}
          key={i}
          memberType={type}
          memberData={e}
          refetchfunc={refetch}
          iscore={data?.communityById.iscore}
        />
      );
    });
  } else {
    memjsx = data?.communityById.followers?.map((e, i) => {
      return (
        <MemberCard
          communityid={data?.communityById.id}
          key={i}
          memberType={type}
          memberData={e}
          refetchfunc={refetch}
          iscore={data?.communityById.iscore}
        />
      );
    });
  }

  return (
    <div className='h-screen font-inter'>
      <Header />
      <div className='flex w-3/4 items-start my-16 mx-auto'>
        <div>
          <img
            src={mediaurl + data?.communityById.logo}
            className='rounded-lg mx-2 my-4 h-20 w-40 object-cover'
          />
          <h2 className='text-semibold text-xl w-40 font-mulish text-center'>
            {data?.communityById.name}
          </h2>
        </div>
        <div className='flex flex-col w-2/3 mx-24 h-3/4 justify-between '>
          <div className='flex items-center border-b-2 border-gray-200'>
            <Link to={'/community/' + uid}>
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
            <h2 className='text-semibold text-2xl font-mulish mx-2 my-4'>
              Members
            </h2>
          </div>
          <ul className='flex my-6 list-none w-1/3 justify-between'>
            <li
              className={`${type === 'lead' ? 'text-green-400' : 'text-black'}`}
            >
              <button onClick={() => setType('lead')}>Lead</button>
            </li>
            <li
              className={`${type === 'core' ? 'text-green-400' : 'text-black'}`}
            >
              <button onClick={() => setType('core')}>Core</button>
            </li>
            <li
              className={`${
                type === 'volunteer'
                  ? 'text-green-400 border-none'
                  : 'text-black'
              }`}
            >
              <button onClick={() => setType('volunteer')}>Volunteers</button>
            </li>
            <li
              className={`${
                type === 'members' ? 'text-green-400 border-none' : 'text-black'
              }`}
            >
              <button onClick={() => setType('members')}>Members</button>
            </li>
          </ul>
          {(type === 'core' || type === 'volunteer') &&
          data?.communityById.iscore ? (
            <div>
              <input
                placeholder='Username to Add'
                className='p-2 mb-6 rounded-lg w-2/5 bg-gray-100'
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <button
                className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md mx-2'
                onClick={() =>
                  fetch_user({
                    variables: {
                      username: username,
                    },
                  })
                }
              >
                Add
              </button>
            </div>
          ) : (
            <></>
          )}
          {memjsx}
        </div>
      </div>
    </div>
  );
}
