import React from 'react';
import { Cookie } from '../../../../../../helpers/namespaces/cookie';
import moment from '../../../../../../helpers/moment';

interface Props {
  data: any;
  users?: any;
}

const Message: React.FC<Props> = ({ data, users }) => {
  const isMyMessage = () => Cookie.get('star-chat-uid') === data.userUID;
  return (
    <div className={`flex w-full mb-3 px-4 ${isMyMessage() ? ' justify-end' : ' justify-start'}`}>
      <div className={`box-message relative ${isMyMessage() ? ' my-message' : ''}`}>
        {!isMyMessage() && (
          <h1 className="text-sm font-bold" style={{ color: users[data.userUID].color }}>
            {users[data.userUID].name}
          </h1>
        )}
        <p className={`text-xs text-white pr-12 ${isMyMessage() ? '' : ' pt-2 pb-1'}`}>
          {data.message}
        </p>
        <span className="text-xs absolute bottom-1 right-1 font-bold text-white">
          {moment(data.sendTime).format('HH:mm')}
        </span>
      </div>
    </div>
  );
};

export default Message;
