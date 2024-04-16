import axios from 'src/config/axios/axios';

export const login = async () => {
  return await axios.post(`/auth/login`);
};
