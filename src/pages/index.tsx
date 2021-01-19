import React, { useState } from 'react';
import ChatContainer from '../components/ChatContainer';
import ChatContent from '../components/ChatContent';
import Page from '../components/Page';
import ProfileContent from '../components/ProfileContent';

const Home: React.FC = () => {
  const [user, setUser] = useState({});
  return (
    <Page>
      <ChatContainer>
        <ProfileContent user={user} />
        <ChatContent user={user} />
      </ChatContainer>
    </Page>
  );
};

export default Home;
