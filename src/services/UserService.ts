import axios from 'src/config/axios/axios';
import { User } from 'src/models/User';
import { getUsernameFromToken } from './AuthService';

export const getUserByUsername = (username: string) => {
  return axios.get(`users/${username}`);
};

export const updateUser = (id: number, updatedUser: User) => {
  return axios.put(`users/${id}`, updatedUser);
};

export const getAndStoreLogedinUser = async () => {
  const username = getUsernameFromToken();
  const user = (await getUserByUsername(username!)).data;
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserPosts = (id: number) => {
  return axios.put(`users/${id}/posts`);
};
