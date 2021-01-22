import type { NextApiRequest, NextApiResponse } from 'next';
import firebase from '../../../lib/firebase';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const room: string = <string>req.query.room;
  const doc = await firebase.collection('rooms').doc(room).get();
  if (doc.exists) {
    res.status(200).json({ exists: doc.exists, isPublic: !doc.data().password });
  } else {
    res.status(200).json({ exists: doc.exists, isPublic: false });
  }
};
