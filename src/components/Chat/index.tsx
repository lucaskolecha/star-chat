import React from 'react';
import Messages from './components/Messages';
import SendMessage from './components/SendMessage';

// import { Container } from './styles';

const Chat: React.FC = () => {
  return (
    <>
      <div className="flex flex-col flex-1 h-100">
        <Messages />
        <SendMessage />
      </div>
    </>
  );
};

export default Chat;
