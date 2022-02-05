import { combineReducers } from "redux";
import user, { User } from "./user";
import appConfig, { AppConfig } from "./app-config";

export interface RootState {
  user: User;
  appConfig: AppConfig;
}

export default combineReducers({
  appConfig,
  user,
});
