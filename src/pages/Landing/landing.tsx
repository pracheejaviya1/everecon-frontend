import * as React from 'react';
import landingImage from '../../assets/Images/Rectangle6.png';
import CommunityCard from '../../components/cards/landing/landingCommunityCard';
import EventsCard from '../../components/cards/landing/landingEventsCard';
import Header from '../../components/header';
import { Link } from 'gatsby';
import { gql, useQuery } from '@apollo/client';

const ALL_COMMUNITIES_QUERY = gql`
  query communityList(
    $kind: Int
    $length: Int
    $filter: String
    $desc: Boolean
  ) {
    communityList(kind: $kind, length: $length, filter: $filter, desc: $desc) {
      id
      logo
    }
  }
`;
const ALL_EVENTS_QUERY =gql`
query events ($kind: Int, $length: Int, $filter: String, $desc: Boolean) {
    events (kind: $kind, length: $length, filter: $filter, desc: $desc) {
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
    }
}
`
export default function Landing() {
  // TODO : handling GraphQL Error
  const {data:community_data} = useQuery(ALL_COMMUNITIES_QUERY, {
    variables: { kind: 0, length: 1, filter: '', desc: true },
  });
  const {data:events_data} = useQuery(ALL_EVENTS_QUERY, {
    variables: { kind: 0, length: 1, filter: '', desc: true },
  });
  return (
    <div>
      <Header />
      <div className='m-auto'>
        <div className='m-10 flex align-items-center justify-evenly'>
          <img
            src={landingImage}
            className='h-80 w-120 rounded-lg'
            alt='piggy'
          />
          <div className='w-1/3 flex flex-col align-items-center justify-evenly '>
            <h1 className='font-inter font-extralight text-2xl'>ABOUT US</h1>
            <span className='font-mulish font-thin '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </span>
          </div>
        </div>
        <div className='m-10 flex flex-col'>
          <h1 className='m-7 text-2xl text-center font-inter font-base'>
            Explore Communities
          </h1>
          <div className='flex align-items-center justify-evenly'>
            {
              // show only first 3 communities
              community_data && community_data.communityList.slice(0, 3).map(e => (
                <CommunityCard logo={e.logo} id={e.id} key={e.id} />
              ))
            }
          </div>
          <Link
            to='/Explore/Communities'
            className='m-10 text-center font-mulish text-blue-400 underline'
          >
            <span>See more</span>
          </Link>
        </div>
        <div className='m-10 flex flex-col'>
          <h1 className='m-7 text-2xl text-center font-inter font-base'>
            Explore Events
          </h1>
          <div className='flex align-items-center justify-evenly'>
            {events_data && events_data.events.map(e => <EventsCard />)}
          </div>
          <Link
            to='/Explore/Events'
            className='m-10 text-center font-mulish text-blue-400 underline'
          >
            <span>See more</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
