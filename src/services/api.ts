import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://start-chat.vercel.app/api'
      : 'http://localhost:3000/api',
});
