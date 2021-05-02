import { gql, useMutation } from '@apollo/client';
import * as React from 'react';
import communityImg from '../../../assets/Images/community.jpg';

const REMOVE_MEMBER_MUTATION = gql`
  mutation removeCoreMember($community: ID!, $user: ID!) {
    removeCoreMember(community: $community, user: $user) {
      ok
    }
  }
`;

export default function MembersCard({
  name,
  location,
  userid,
  communityid,
  refetch,
}) {
  const [callRemoveMember, { data }] = useMutation(REMOVE_MEMBER_MUTATION);
  return (
    <div className='flex items-center justify-between w-1/3 m-6 mx-auto'>
      <div className='flex w-1/5 items-center justify-between'>
        <img src={communityImg} className='h-16 w-16 rounded-full' />
        <div className='mx-8 font-inter'>
          <p className='my-1'>{name}</p>
          <p className='my-1'>{location}</p>
        </div>
      </div>
      <button
        onClick={() => {
          callRemoveMember({
            variables: { user: parseInt(userid), community: communityid },
          }).then(r => refetch());
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
            d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </button>
    </div>
  );
}
