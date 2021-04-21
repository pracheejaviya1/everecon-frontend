import { Link } from 'gatsby';
import * as React from 'react';
import CommunityImage from '../../assets/Images/community.jpg';
import landingImage from '../../assets/Images/default.jpg';
import Header from '../../components/header';

//TODO: Add new card for my communities, remove favorites, add logo in community, tickets, historym following, link commuinty page
function CommunityCard({ name, logo, userid, communityid }) {
  const UnfollowCommunity = (userid, communityid) => {
    console.log(userid, communityid);
    // call unfollow community
  };
  return (
    <div className='flex flex-row items-center justify-between p-2 shadow-md mx-auto rounded-lg w-full text-left my-2 mt-3'>
      <div className='flex'>
        <img className='h-20 w-30 mx-5 my-2 rounded-md' src={CommunityImage} />
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
const FOLLOWING = 0;
const TICKETS = 1;
const HISTORY = 2;
const FAVORITES = 3;
const COMMUNITYSET = 4;

export default function UserProfile() {
  const [name, setName] = React.useState('');
  const [userid, setUserid] = React.useState(null);
  const [location, setLocation] = React.useState('');
  const [communities, setCommunities] = React.useState([]);
  const [communitySet, setCommunitySet] = React.useState([]);
  const [options, setOptions] = React.useState([
    'Following',
    'Tickets',
    'History',
    'Favorites',
    'MyCommunities',
  ]);
  const [selected, setSelected] = React.useState(0);
  //   React.useEffect(() => {
  //      const operation = {
  //       query: getProfileQuery,
  //     };
  //     makePromise(execute(link, operation)).then(r => {
  //       if (r.data?.myprofile !== null) {
  //         let profile = r.data?.myprofile
  //         setName(profile.firstname+" "+profile.lastname)
  //         setUserid(profile.id)
  //         setLocation(profile.profile.city+","+profile.profile.country)
  //         console.log(profile)
  //         setCommunities(profile.communities)
  //         setCommunitySet(profile.communitySet)
  //         if(communitySet.length > 0){
  //           console.log("user has created a community")
  //           setOptions(["Following","Tickets","History","Favorites","MyCommunities"])
  //         }
  //         return;
  //       }
  //       if (r.errors != null) {
  //         if (r.errors[0] !== undefined) {
  //           console.error(r.errors[0].message);
  //         }
  //       }
  //   })
  // },[])
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col w-1/2 mx-auto items-center justify-center'>
        <img src={landingImage} className='my-8 h-28 w-28 rounded-full' />
        <p className='text-2xl font-mulish'>{name}</p>
        <p className='text-xl font-mulish'>{location}</p>
      </div>
      <div className='flex flex-col my-8 w-1/2 mx-auto items-center justify-center'>
        <div className='w-full py-2 border-b-2'>
          <div className='flex justify-between items-center font-inter'>
            <div className='flex justify-between w-4/12 '>
              {options.map((e, i) => (
                <button
                  onClick={() => setSelected(i)}
                  key={i}
                  className={selected == i ? 'font-bold' : ''}
                >
                  {e}
                </button>
              ))}
            </div>
            <Link to='/Create/Community/createCommunityPage1'>
              Create Community
            </Link>
          </div>
        </div>
        {selected === COMMUNITYSET &&
          communitySet.map((e, i) => (
            <CommunityCard
              key={i}
              name={e.name}
              logo={e.logo}
              userid={userid}
              communityid={e.id}
            ></CommunityCard>
          ))}
        {selected === FOLLOWING &&
          communities.map((e, i) => (
            <CommunityCard
              key={i}
              name={e.name}
              logo={e.logo}
              userid={userid}
              communityid={e.id}
            ></CommunityCard>
          ))}
      </div>
    </div>
  );
}
