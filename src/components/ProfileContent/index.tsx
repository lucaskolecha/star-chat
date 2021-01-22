import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Input from '../Input';
import Button from '../Button';
import api from '../../services/api';
import { Cookie } from '../../helpers/namespaces/cookie';
import { UtilUID } from '../../helpers/namespaces/util-uid';
import useStickyState from '../../hooks/use-sticky-state';

interface Props {
  user?: any;
  nameRoom?: string;
  roomExists?: boolean;
  setUser?: any;
  isPublic?: boolean;
}

const ProfileContent: React.FC<Props> = ({ user, nameRoom, roomExists, setUser, isPublic }) => {
  const [photo, setPhoto] = useState(
    'https://audiospots.com.br/wp-content/themes/audiospots/img/user.png',
  );
  const [name, setName] = useStickyState('', 'name');
  const [password, setPassword] = useStickyState('', 'password');
  const [error, setError] = useState(null);

  useEffect(() => {}, []);

  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value) {
      setPhoto(`https://ui-avatars.com/api/?size=228&name=${event.target.value}`);
    } else {
      setPhoto('https://audiospots.com.br/wp-content/themes/audiospots/img/user.png');
    }
  };

  const accessOrCreate = async () => {
    setError(false);
    const uid: string = Cookie.get('star-chat-uid') || UtilUID.generete();
    Cookie.set('star-chat-uid', uid);
    if (roomExists) {
      try {
        await api.post(
          `/room/access`,
          {
            user: {
              name,
              uid,
              color: `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`,
            },
            password: btoa(password),
          },
          {
            params: {
              room: nameRoom,
            },
          },
        );
        setUser({
          uid,
          name,
        });
      } catch (e) {
        setError(true);
        console.error(e);
      }
    } else {
      try {
        await api.post(
          `/room/create`,
          {
            user: {
              name,
              uid,
              color: `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`,
            },
            password: btoa(password),
          },
          {
            params: {
              room: nameRoom,
            },
          },
        );
        setUser({
          uid,
          name,
        });
      } catch (e) {
        console.error('Erro ao criar sala');
      }
    }
  };

  const leaveRoom = () => {
    setUser(null);
  };

  return (
    <>
      <div className="w-3/12 bg-profile">
        <div className="flex h-72 items-center justify-center">
          <Image className="rounded-full" src={photo} width={184} height={184} alt="Teste" />
        </div>
        <div className="flex flex-col h-full py-5 px-5">
          {/* <Input
            onChange={(event) => setRoomName(UtilFunction.formatNametoSeo(event.target.value))}
            disabled={true}
            value={roomName}
            label="Nome da sala"
          /> */}
          <Input onChange={onChangeName} value={name} disabled={!!user} label="Seu Nome *" />
          {!isPublic && (
            <Input
              type="password"
              disabled={!!user}
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              label="Senha da sala"
            />
          )}

          <Button
            className={user ? 'bg-error' : 'bg-primary'}
            label={user ? 'Sair da sala' : 'Criar/Acessar'}
            onClick={() => (user ? leaveRoom() : accessOrCreate())}
          />

          {error && <label className="text-red-500 text-center my-8">Senha incorreta</label>}
        </div>
      </div>
    </>
  );
};

export default ProfileContent;
