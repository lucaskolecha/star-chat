import React from 'react';

// import { Container } from './styles';

const ChatContainer: React.FC = ({ children }) => {
  return (
    <>
      {/* <div className="h-32 bg-primary w-full absolute" /> */}
      <div className="container flex flex-1 relative mx-auto py-10">
        <div className="flex flex-row flex-1 w-full bg-alternative rounded-md overflow-hidden shadow-chat">
          {children}
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
