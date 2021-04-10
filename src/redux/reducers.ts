import Actions from "./actions";
import { AppState } from "./models";

const initialState: AppState = {
  username: "undefined",
};

export const allReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.ENTER_USERNAME: {
      return action.payload;
    }
    default:
      return state;
  }
};
