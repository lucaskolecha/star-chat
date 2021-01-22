import type { NextApiRequest, NextApiResponse } from 'next';
import firebase from '../../../lib/firebase';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const room: string = <string>req.query.room;
  try {
    await firebase.collection('rooms').doc(room).set({
      password: req.body.password,
    });
    await firebase
      .collection('rooms')
      .doc(room)
      .collection('users')
      .doc(req.body.user.uid)
      .set(req.body.user);
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ error: true });
  }
};
