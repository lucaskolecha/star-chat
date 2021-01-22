import React, { useEffect, useState } from 'react';
import Messages from './components/Messages';
import SendMessage from './components/SendMessage';
import firebase from '../../lib/firebase';

interface Props {
  nameRoom?: string;
}

const Chat: React.FC<Props> = ({ nameRoom }) => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    firebase
      .collection('rooms')
      .doc(nameRoom)
      .collection('users')
      .onSnapshot((snapshot) => {
        const users = snapshot.docs.reduce((o, v) => {
          o[v.id] = v.data();
          return o;
        }, {});
        setUsers(users);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col flex-1 h-100">
        {users && <Messages nameRoom={nameRoom} users={users} />}
        <SendMessage nameRoom={nameRoom} />
      </div>
    </>
  );
};

export default Chat;
