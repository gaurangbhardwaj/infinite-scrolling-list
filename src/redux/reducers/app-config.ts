import { ReduxEvent } from "constant";

export interface AppConfig {
  isLoading: boolean;
}

const initialState: AppConfig = {
  isLoading: false,
};

export default function appConfig(
  state: AppConfig = initialState,
  action: { data: any; type: string }
) {
  switch (action.type) {
    case ReduxEvent.SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case ReduxEvent.HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
