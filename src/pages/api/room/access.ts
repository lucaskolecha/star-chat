import type { NextApiRequest, NextApiResponse } from 'next';
import firebase from '../../../lib/firebase';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const room: string = <string>req.query.room;
  try {
    const validation = await firebase.collection('rooms').doc(room).get();
    const { password } = validation.data();
    if (password) {
      if (password === req.body.password) {
        await firebase
          .collection('rooms')
          .doc(room)
          .collection('users')
          .doc(req.body.user.uid)
          .set(req.body.user);
      } else {
        res.status(403).json({ error: true, message: 'Senha incorreta da sala' });
      }
    } else {
      await firebase
        .collection('rooms')
        .doc(room)
        .collection('users')
        .doc(req.body.user.uid)
        .set(req.body.user);
    }
    res.status(200).json({ success: true, message: 'Conectado com sucesso!' });
  } catch (e) {
    res.status(500).json({ error: true });
  }
};
