import { ActionReducerMap } from '@ngrx/store';
import { LoginWindowState, loginWindowReducer } from './loginWindow';
import {
  LoginNotificationState,
  loginNotificationReducer,
} from './loginNotification';
import {
  LogoutNotificationState,
  logoutNotificationReducer,
} from './logoutNotification';

export interface State {
  loginWindow: LoginWindowState;
  loginNotification: LoginNotificationState;
  logoutNotification: LogoutNotificationState;
}

export const reducers: ActionReducerMap<State> = {
  loginWindow: loginWindowReducer,
  loginNotification: loginNotificationReducer,
  logoutNotification: logoutNotificationReducer,
};
