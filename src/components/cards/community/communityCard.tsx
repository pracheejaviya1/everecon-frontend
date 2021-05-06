import { gql, useMutation, useQuery } from '@apollo/client';
import { Link } from 'gatsby';
import * as React from 'react';
import { mediaurl } from '../../config';

type TagProps = {
  text: string;
};

function Tag(props: TagProps) {
  return (
    <span className='flex bg-gray-300 items-center mx-2 my-2 font-mulish rounded-xl justify-between px-4 h-3/4'>
      {props.text}
    </span>
  );
}

const FOLLOW = gql`
  mutation addFollower($community: ID!, $user: ID!) {
    addFollower(community: $community, user: $user) {
      ok
    }
  }
`;

const UNFOLLOW = gql`
  mutation removeFollower($community: ID!, $user: ID!) {
    removeFollower(community: $community, user: $user) {
      ok
    }
  }
`;

const MYID = gql`
  query myprofile {
    myprofile {
      id
    }
  }
`;

export default function CommunityCard(props) {
  const [fnuf, setFnuf] = React.useState(false);
  const [id, setID] = React.useState(0);
  const { loading, error, data: profdata } = useQuery(MYID);
  const [callFollow, dataF] = useMutation(FOLLOW);
  const [callUnfollow, dataUF] = useMutation(UNFOLLOW);
  React.useEffect(() => {
    setFnuf(props.isfollower);
  }, [props.isfollower]);
  React.useEffect(() => {
    if (!loading) setID(profdata.myprofile.id);
  }, [loading]);
  async function handlefnunf() {
    if (fnuf) {
      let { data, errors: e } = await callUnfollow({
        variables: {
          community: props.id,
          user: id,
        },
      });
      if (e) {
        console.error(e);
        return;
      } else {
        console.log(data);
      }
    } else {
      let { data, errors: e } = await callFollow({
        variables: {
          community: props.id,
          user: id,
        },
      });
      if (e) {
        console.error(e);
        return;
      } else {
        console.log(data);
      }
    }
    return;
  }
  if (loading) {
    return `Loading`;
  }
  if (error) {
    return `Error! ${error}`;
  }
  return (
    <Link to={'/community/' + props.id}>
      <div className='community_card flex flex-row items-center justify-between p-5 shadow-md mx-auto rounded-lg w-3/4 text-left my-2 mt-3'>
        <div className='flex'>
          <img
            className='h-30 w-40 rounded-md object-cover'
            src={mediaurl + props.imageurl}
          />
          <div className='flex flex-col mx-5 '>
            <span className='text-lg font-semibold font-inter'>
              {props.name}
            </span>
            <span className='font-inter font-light'> {props.location}</span>
            <span className='font-inter text-sm'> {props.memcount}</span>
          </div>
        </div>
        <div className='float-right'>
          <button
            className='font-inter my-2 text-xs bg-blue-400 text-white rounded-lg px-3 py-2'
            onClick={e => {
              handlefnunf();
              setFnuf(!fnuf);
              return e.preventDefault();
            }}
          >
            {fnuf == true ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </div>
    </Link>
  );
}
