import React from 'react';
import Chat from '../Chat';
import NotConnected from '../NotConnected';

interface Props {
  user?: any;
}

const ChatContent: React.FC<Props> = ({ user }) => {
  return (
    <>
      <div className="flex flex-1 bg-gray-700">{user ? <Chat /> : <NotConnected />}</div>
    </>
  );
};

export default ChatContent;
