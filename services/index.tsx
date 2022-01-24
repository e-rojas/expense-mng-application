import axios from 'axios';
import { User } from '../redux/actions/UserActionTypes';


export const register = ({firstName,lastName, email, password}:User) => {
  console.log(process.env.API_URL);

  return axios.post(`${process.env.API_URL}/users`, {
    firstName,
    lastName,
    email,
    password,
  });
};
