import { ENTER_USERNAME } from "./actionsTypes";

export const setUsername = (username: string) => {
  return {
    type: ENTER_USERNAME,
    payload: username,
  };
};
