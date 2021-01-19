import React, { useState } from 'react';

import Image from 'next/image';
import Input from '../Input';
import Button from '../Button';
import { UtilFunction } from '../../helpers/namespaces/util-functions';

interface Props {
  user?: any;
}

const ProfileContent: React.FC<Props> = ({ user }) => {
  const [photo, setPhoto] = useState(
    'https://audiospots.com.br/wp-content/themes/audiospots/img/user.png',
  );
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value) {
      setPhoto(`https://ui-avatars.com/api/?size=228&name=${event.target.value}`);
    } else {
      setPhoto('https://audiospots.com.br/wp-content/themes/audiospots/img/user.png');
    }
  };
  const [roomName, setRoomName] = useState('');

  return (
    <>
      <div className="w-3/12 bg-profile">
        <div className="flex h-72 items-center justify-center">
          <Image className="rounded-full" src={photo} width={184} height={184} alt="Teste" />
        </div>
        <div className="flex flex-col h-full py-5 px-5">
          <Input onChange={onChangeName} value={name} label="Nome *" />
          <Input
            onChange={(event) => setRoomName(UtilFunction.formatNametoSeo(event.target.value))}
            value={roomName}
            label="Crie/Acesse uma sala *"
          />
          <Input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            label="Senha da sala"
          />
          <Button
            className={user ? 'bg-error' : 'bg-primary'}
            label={user ? 'Sair da sala' : 'Criar/Acessar'}
            onClick={() => console.log('Criou')}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileContent;
