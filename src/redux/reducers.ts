import { AppState } from "./models";
import { ENTER_USERNAME } from "./actionsTypes";

const initialState: AppState = {
  username: undefined,
};

export const allReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case ENTER_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    default:
      return state;
  }
};
