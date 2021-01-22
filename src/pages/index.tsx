import React, { useEffect, useState } from 'react';
import Page from '../components/Page';
import { UtilFunction } from '../helpers/namespaces/util-functions';

const Start: React.FC = () => {
  const [roomName, setRoomName] = useState('');

  return (
    <Page title="StarChat">
      <form action={`/${roomName}`}>
        <div className="flex flex-col h-screen items-center justify-center">
          <h1 className="text-5xl font-bold text-white">StarChat</h1>
          <input
            autoFocus={true}
            className="rounded-full w-2/6 my-12 px-4 py-3 outline-none"
            placeholder="Nome da sala"
            value={roomName}
            onChange={(evt) => setRoomName(UtilFunction.formatNametoSeo(evt.target.value))}
          />
          <button
            type="submit"
            className="rounded-full px-12 py-3 outline-none bg-primary text-white"
          >
            Começar
          </button>
        </div>
      </form>
    </Page>
  );
};

export default Start;
