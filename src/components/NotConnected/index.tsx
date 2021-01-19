import React from 'react';
import Image from 'next/image';

const NotConnected: React.FC = () => {
  return (
    <>
      <div className="flex flex-col flex-1 h-100 items-center justify-center">
        <Image
          src="https://cdn.iconscout.com/icon/free/png-256/chat-text-message-chatting-talk-notification-33-28685.png"
          width={148}
          height={148}
          alt="StarChat"
        />
        <h2 className="text-white text-2xl mt-8">Inicie um chat agora !!!</h2>
        <p className="text-white mt-4">
          Para conversar com seus amigos preencha os campos ao lado.
        </p>
      </div>
    </>
  );
};

export default NotConnected;
