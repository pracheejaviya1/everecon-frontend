import { useMutation } from '@apollo/client';
import { Link } from 'gatsby';
import gql from 'graphql-tag';
import * as React from 'react';
import EventCard from '../components/cards/event/eventCard';
import CommunityCard from '../components/cards/community/communityCard';
import SearchContext from '../context/searchcontext.js';
import Header from '../components/header';

const GEN_SEARCH = gql`
  mutation generalSearch($searchstring: String!) {
    generalSearch(searchstring: $searchstring) {
      communityList {
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
      eventList {
        iscore
        isvolunteer
        isregistered
        ischeckedin
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
          id
          name
        }
      }
    }
  }
`;
type TagProps = {
  text: string;
};

function Tag(props: TagProps) {
  return (
    <span className='flex items-center mx-2 my-2 font-mulish rounded-lg justify-between border-gray-400 border px-2 h-3/4'>
      {props.text}{' '}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-3 w-3'
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

export default function Search() {
  const [searchcon, setSearchcon] = React.useContext(SearchContext);
  const [sel, setSel] = React.useState(false);
  const [sdata, setSdata] = React.useState({});
  const [error, setError] = React.useState(false);
  const [callSearch, data] = useMutation(GEN_SEARCH);
  //   const { loading, error, data } = useQuery(GEN_SEARCH, {
  //     variables: { searchstring: searchcon },
  //   });

  const activetab: string =
    'text-blue-500 border-b-2 font-medium border-blue-500';

  React.useEffect(() => {
    callSearch({
      variables: {
        searchstring: searchcon,
      },
    });
  }, [searchcon]);
  React.useEffect(() => {
    if (data.data?.generalSearch) {
      setSdata(data.data.generalSearch);
    }
  }, [data]);

  //   console.log(data);
  if (!data) {
    return `Loading`;
  }
  if (error) {
    return `Error! ${error}`;
  }
  if (data) {
    console.log(data);
  }

  let eventlist = <></>;
  let communitylist = <></>;

  if (sdata?.eventList)
    eventlist = (
      <>
        {sdata &&
          sdata.eventList.map(e => (
            <EventCard
              communityName={e.community.name}
              title={e.name}
              date={e.startTime}
              imageurl={e.featuredImage}
              id={e.id}
            />
          ))}
      </>
    );

  if (sdata?.communityList)
    communitylist = (
      <>
        {sdata &&
          sdata.communityList.map(e => (
            <CommunityCard
              id={e.id}
              name={e.name}
              date={e.startTime}
              location={e.city}
              imageurl={e.logo}
              memcount={e.membersCount}
              isfollower={e.isfollower}
            />
          ))}
      </>
    );

  return (
    <div className='bg-explore_events bg-no-repeat bg-bottom h-screen'>
      <Header />
      <div className='m-6 flex flex-col divide-y divide-gray-500'>
        <div className='m-4'>
          <h1 className='my-5 text-2xl font-mulish text-center'>
            Search Results for {searchcon}
          </h1>
          <div className='bg-white '>
            <nav className='flex flex-col sm:flex-row align-center'>
              <button
                className={
                  sel
                    ? 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none' +
                      activetab
                    : 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none'
                }
                onClick={() => {
                  setSel(true);
                }}
              >
                Communities
              </button>
              <button
                className={
                  !sel
                    ? 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none' +
                      activetab
                    : 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none'
                }
                onClick={() => {
                  setSel(false);
                }}
              >
                Events
              </button>
            </nav>
            {!sel ? eventlist : communitylist}
          </div>
        </div>
      </div>
    </div>
  );
}
