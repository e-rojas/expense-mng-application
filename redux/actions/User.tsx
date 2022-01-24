import { Dispatch } from "react";
import { register } from "../../services";
import { User, UserDispatchTypes, USER_REGISTER } from "./UserActionTypes";

export const registerUser = (user: User) => async (dispatch:Dispatch<UserDispatchTypes>) => {
    register(user).then(res => {
        console.log('res', res.data);
    })
    .catch(err => {
        console.log('err', err);
    })
    // try {
    //     const response = await register(user);
    //     console.log('response', response);
    //     // dispatch({
    //     //     type: USER_REGISTER,
    //     //     payload: response.data
    //     // });
    // } catch (error) {
    //     console.log(error);
    // }
}