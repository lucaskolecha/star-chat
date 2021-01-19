import React from 'react';

// import { Container } from './styles';

const SendMessage: React.FC = () => {
  return (
    <>
      <div className="flex h-20 items-center px-4 w-100 bg-profile">
        <input
          className="h-12 border flex-1 outline-none px-6 text-white bg-input rounded-full"
          placeholder="Digite sua mensagem aqui."
        />
        <button className="h-12 w-40 bg-primary text-white rounded-full ml-4">Enviar</button>
      </div>
    </>
  );
};

export default SendMessage;
