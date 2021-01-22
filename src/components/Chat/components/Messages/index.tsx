import React, { useEffect, useRef, useState } from 'react';
import Message from './components/Message';
import firebase from '../../../../lib/firebase';

interface Props {
  nameRoom: string;
  users?: any;
}

const Messages: React.FC<Props> = ({ nameRoom, users }) => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    firebase
      .collection('rooms')
      .doc(nameRoom)
      .collection('messages')
      .orderBy('sendTime', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => Object.assign({ id: doc.id }, doc.data())));
      });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div className="flex flex-1 flex-col-reverse overflow-y-auto" ref={scrollRef}>
        {messages.map((message) => (
          <Message key={message.id} data={message} users={users} />
        ))}
      </div>
    </>
  );
};

export default Messages;
