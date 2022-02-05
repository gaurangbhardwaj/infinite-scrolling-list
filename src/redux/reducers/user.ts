import { getDataFromLocalStorage } from "manager/session-manager";
import { cookiesConstants, ReduxEvent } from "constant";

export interface User {
  userDetails: {};
  isLoggedIn: boolean;
}

const userDetails =
  getDataFromLocalStorage(cookiesConstants.USER_DETAILS) || "";
const isLoggedIn =
  getDataFromLocalStorage(cookiesConstants.IS_LOGGED_IN) || false;

const initialState = {
  userDetails: userDetails,
  isLoggedIn: isLoggedIn,
};

export default function user(
  state: User = initialState,
  action: { data: any; type: string }
) {
  switch (action.type) {
    case ReduxEvent.LOGGED_IN:
      return {
        userDetails: action.data?.userDetails,
        isLoggedIn: true,
      };
    case ReduxEvent.LOGGED_OUT:
      return {
        userDetails: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
