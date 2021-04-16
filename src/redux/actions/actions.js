import { FAILURE_USER_DATA, REQUEST_USER_DATA, SUCCESS_USER_DATA } from "./actionsTypes";
export const requestUserData = () => {
  return {
    type: REQUEST_USER_DATA,
  };
};
export const successUserData = (data) => {
  return {
    type: SUCCESS_USER_DATA,
    payload: data,
  };
};
export const failureUserData = (err) => {
  return {
    type: FAILURE_USER_DATA,
    payload:err
  };
};
