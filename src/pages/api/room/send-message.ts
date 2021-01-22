import type { NextApiRequest, NextApiResponse } from 'next';
import firebase from '../../../lib/firebase';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const uid: string = <string>req.query.uid;
  const room: string = <string>req.query.room;
  try {
    await firebase.collection('rooms').doc(room).collection('messages').doc().set({
      userUID: uid,
      message: req.body.message,
      sendTime: new Date().getTime(),
    });

    res.status(200).json({ success: true, message: 'Conectado com sucesso!' });
  } catch (e) {
    res.status(500).json({ error: true });
  }
};
