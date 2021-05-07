import { gql, useQuery } from '@apollo/client';
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

  return (
    <div className='bg-explore_communities bg-contain bg-fixed bg-no-repeat bg-bottom'>
      <Header />
      <div className='flex flex-col items-center divide-y divide-gray-500'>
        <div className='w-2/3'>
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
