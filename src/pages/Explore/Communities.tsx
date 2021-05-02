import { useQuery, gql } from '@apollo/client';
import * as React from 'react';
import CommunityCard from '../../components/cards/community/communityCard';
import Header from '../../components/header';

type TagProps = {
  text: string;
};

const LIST_COMMUNITIES = gql`
  query communityList(
    $kind: Int
    $length: Int
    $filter: String
    $desc: Boolean
  ) {
    communityList(kind: $kind, length: $length, filter: $filter, desc: $desc) {
      isfollower
      iscore
      isvolunteer
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
    }
  }
`;

function Tag(props: TagProps) {
  return (
    <span className='flex items-center mx-2 my-2 font-mulish rounded-lg justify-between border-gray-400 border px-2 h-3/4'>
      {props.text}{' '}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </span>
  );
}

export default function ExploreCommunity() {
  const [num, setNum] = React.useState(0);
  const { data, refetch } = useQuery(LIST_COMMUNITIES, {
    variables: {
      kind: 0,
      length: 5,
      desc: true,
      filter: '',
    },
  });
  React.useEffect(() => {
    refetch();
  }, []);
  React.useEffect(() => {
    console.log(num);
    setNum(num + 1);
  }, [data]);

  const input_class: string =
    'border-gray-100 p-3 text-xs block w-80 rounded-xl font-mulish bg-gray-100';
  return (
    <div className='bg-explore_communities bg-no-repeat bg-bottom h-screen'>
      <Header />
      <div className='m-6 flex flex-col divide-y divide-gray-500'>
        <div className='m-4'>
          <h1 className='my-5 text-2xl font-mulish text-center'>
            Explore Communities
          </h1>
          {/* <div className='border-b-2 w-3/4 mx-auto items-center justify-between flex flex-row '>
             <div className='flex'>
              <form className='mb-2'>
                <input
                  type='text'
                  className={input_class}
                  placeholder='Search by category'
                  name='category'
                />
              </form>
              <Tag text='AI' />
              <Tag text='Machine Learning' />
            </div>
            <span className='text-sm font-mulish text-blue-500 my-2'>
              Reset
            </span>
          </div> */}
          {data &&
            data.communityList.map(e => (
              <CommunityCard
                key={e.id}
                id={e.id}
                name={e.name}
                date={e.startTime}
                location={e.city}
                imageurl={e.logo}
                memcount={e.membersCount}
                isfollower={e.isfollower}
                num={num}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
