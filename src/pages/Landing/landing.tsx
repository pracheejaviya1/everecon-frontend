import { gql, useQuery } from '@apollo/client';
import { Link } from 'gatsby';
import * as React from 'react';
import Gradient from '../../assets/Designs/gradient.png';
import CommunityCard from '../../components/cards/landing/landingCommunityCard';
import EventsCard from '../../components/cards/landing/landingEventsCard';
import Header from '../../components/header';
import UserContext from '../../context/usercontext.js';
import animationData from '../../animations/atomblue.json';
import Lottie from 'react-lottie';

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
      name
    }
  }
`;

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

const ALL_EVENTS_QUERY = gql`
  query events($kind: Int, $length: Int, $filter: String, $desc: Boolean) {
    events(kind: $kind, length: $length, filter: $filter, desc: $desc) {
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
`;
export default function Landing() {
  React.useEffect(() => {
    console.log(community_data);
    console.log(events_data);
  });

  const [myprofile, setMyProfile] = React.useContext(UserContext);
  // TODO : handling GraphQL Error
  const { data: community_data, refetch: community_refetch } = useQuery(
    ALL_COMMUNITIES_QUERY,
    {
      variables: { kind: 0, length: 1, filter: '', desc: true },
    }
  );
  const { data: events_data, refetch: events_refetch } = useQuery(
    ALL_EVENTS_QUERY,
    {
      variables: { kind: 0, length: 1, filter: '', desc: true },
    }
  );
  const { loading, error, data: profile_data } = useQuery(PROFILE_QUERY);

  React.useEffect(() => {
    community_refetch();
    events_refetch();
  },[]);

  if (loading) return null;
  if (error) return `Error! ${error}`;
  if (!loading) {
    setMyProfile(profile_data.myprofile);
    //console.log(myprofile);
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <Header />
      <div className='m-auto mt-6'>
        <div className='m-3 flex align-items-center justify-evenly'>
          {/* <img
            src={landingImage}
            className='h-36 rounded-lg'
            alt='landing image'
          /> */}
          <Lottie options={defaultOptions} height={400} width={400} />
          <div className='w-1/2 flex flex-col align-items-center justify-evenly '>
            <h1 className='font-inter font-extralight text-2xl'>ABOUT US</h1>
            <span className='font-mulish font-light mt-3 w-2/3 '>
              Communities are a way for people to come together and pursue
              similar interests. People make communities that operate like a
              small organization - they have roles (leader, core members,
              followers etc.), objectives (promote their interests through
              events and engaging with their community) and day to day work.
              <br></br>
              The purpose of this platform is to:-
              <br></br>- Help communities create an online presence and
              portfolio.
              <br></br>- Manage community work such as setting up events,
              gathering registrations and checking people in
              <br></br>- Help users discover communities and events of their
              interest and get on board easily.
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
              community_data &&
                community_data.communityList
                  .slice(0, 3)
                  .map(
                    (e: {
                      logo: any;
                      id: React.Key | null | undefined;
                      name: any;
                    }) => (
                      <CommunityCard
                        logo={e.logo}
                        id={e.id}
                        name={e.name}
                        key={e.id}
                      />
                    )
                  )
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
            {events_data &&
              events_data.events
                .slice(0, 3)
                .map(
                  (e: {
                    featuredImage: any;
                    id: React.Key | null | undefined;
                    name: any;
                  }) => (
                    <EventsCard
                      logo={e.featuredImage}
                      id={e.id}
                      name={e.name}
                      key={e.id}
                    />
                  )
                )}
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
