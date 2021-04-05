import React from 'react';
import CommunityDesc from '../../components/community/Desc';
import CommunityTitle from '../../components/community/Title';
import Header from '../../components/header';

export default function ViewCommunity() {
  return (
    <div>
      <Header />
      <CommunityTitle
        datetime={new Date()}
        title='Talking Tech with Feeling Ineium'
      />
      <CommunityDesc />
    </div>
  );
}
