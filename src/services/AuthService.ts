import axios from 'src/config/axios/axios';
import { AuthenticationRequest } from 'src/models/AuthenticationRequest';

export const login = async (authenticationRequest: AuthenticationRequest) => {
  return await axios.post('auth/login', authenticationRequest);
};
