import { jwtDecode } from 'jwt-decode';
import axios from 'src/config/axios/axios';
import { AuthenticationRequest } from 'src/models/AuthenticationRequest';
import { CreateUser } from 'src/models/CreateUser';

export const login = (authenticationRequest: AuthenticationRequest) => {
  return axios.post('auth/login', authenticationRequest);
};

export const register = (createUser: CreateUser) => {
  return axios.post('auth/register', createUser);
};

export const getUsernameFromToken = () => {
  const tokens = JSON.parse(localStorage.getItem('tokens')!);
  if (tokens) return jwtDecode(tokens.accessToken).sub;
};

export const getIdFromToken = () => {
  const tokens = JSON.parse(localStorage.getItem('tokens')!);
  return jwtDecode(tokens.accessToken);
};
