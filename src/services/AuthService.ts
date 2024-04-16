import axios from 'src/config/axios/axios';
import { AuthenticationRequest } from 'src/models/AuthenticationRequest';
import { CreateUser } from 'src/models/CreateUser';

export const login = async (authenticationRequest: AuthenticationRequest) => {
  return await axios.post('auth/login', authenticationRequest);
};
export const register = async (createUser: CreateUser) => {
  return await axios.post('/auth/register', createUser);
};
