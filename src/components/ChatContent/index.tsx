import React from 'react';
import Chat from '../Chat';
import NotConnected from '../NotConnected';

interface Props {
  user?: any;
  nameRoom?: string;
}

const ChatContent: React.FC<Props> = ({ user, nameRoom }) => {
  return (
    <>
      <div className="flex flex-1 bg-gray-700">
        {user ? <Chat nameRoom={nameRoom} /> : <NotConnected />}
      </div>
    </>
  );
};

export default ChatContent;
