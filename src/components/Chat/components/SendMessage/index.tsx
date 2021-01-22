import React, { useState } from 'react';
import { Cookie } from '../../../../helpers/namespaces/cookie';
import api from '../../../../services/api';

interface Props {
  nameRoom?: string;
}

const SendMessage: React.FC<Props> = ({ nameRoom }) => {
  const [inputMessage, setInputMessage] = useState('');
  const onPressEnter = (event) => {
    if (event.charCode === 13) {
      changeMassage();
    }
  };

  const changeMassage = () => {
    if (inputMessage) {
      const uid = Cookie.get('star-chat-uid');
      api.post(
        `/room/send-message`,
        {
          message: inputMessage,
        },
        {
          params: {
            uid,
            room: nameRoom,
          },
        },
      );
      setInputMessage('');
    }
  };
  return (
    <>
      <div className="flex h-20 items-center px-4 w-100 bg-profile fit-content">
        <input
          autoFocus
          value={inputMessage}
          className="h-12 border flex-1 outline-none px-6 text-white bg-input rounded-full"
          onKeyPress={onPressEnter}
          onChange={(event) => setInputMessage(event.target.value)}
          placeholder="Digite sua mensagem aqui."
        />
        <button
          className="h-12 w-40 bg-primary text-white rounded-full ml-4 outline-none"
          onClick={changeMassage}
        >
          Enviar
        </button>
      </div>
    </>
  );
};

export default SendMessage;
