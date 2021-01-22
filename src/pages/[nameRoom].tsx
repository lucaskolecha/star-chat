import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ChatContainer from '../components/ChatContainer';
import ChatContent from '../components/ChatContent';
import Page from '../components/Page';
import ProfileContent from '../components/ProfileContent';
import useStickyState from '../hooks/use-sticky-state';
import api from '../services/api';

interface Props {
  nameRoom?: string;
  roomExists?: boolean;
  isPublic?: boolean;
}

const Home: React.FC<Props> = ({ nameRoom, roomExists, isPublic }) => {
  const [user, setUser] = useStickyState(null, 'user');
  const [cacheNameRoom, setCacheNameRoom] = useStickyState('', 'nameRoom');

  useEffect(() => {
    if (user) {
      if (cacheNameRoom !== nameRoom) {
        setUser(null);
      }
      setCacheNameRoom(nameRoom);
    }
  }, [user]);

  return (
    <Page title={`Conectar StartChat-${nameRoom}`}>
      <ChatContainer>
        <ProfileContent
          user={user}
          nameRoom={nameRoom}
          roomExists={roomExists}
          setUser={setUser}
          isPublic={isPublic}
        />
        <ChatContent user={user} nameRoom={nameRoom} />
      </ChatContainer>
    </Page>
  );
};

export default Home;

export async function getServerSideProps({ params }) {
  const response = await api.get(`/room/exists`, {
    params: {
      room: params.nameRoom,
    },
  });
  return {
    props: {
      roomExists: response.data.exists,
      isPublic: response.data.isPublic,
      nameRoom: params.nameRoom,
    },
  };
}
