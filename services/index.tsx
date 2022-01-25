import axios from 'axios';
import { User } from '../redux/actions/UserActionTypes';


export const register = ({firstName,lastName, email, password}:User) => {
  return axios.post(`${process.env.API_URL}/users`, {
    firstName,
    lastName,
    email,
    password,
  });
};

export const login = ({email, password}:User) => {
  return axios.post(`${process.env.API_URL}/auth/login`, {
    email,
    password,
  });
}