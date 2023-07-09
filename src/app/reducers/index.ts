import { ActionReducerMap } from '@ngrx/store';
import { LoginWindowState, loginWindowReducer } from './loginWindow';
import {
  LoginNotificationState,
  loginNotificationReducer,
} from './loginNotification';

export interface State {
  loginWindow: LoginWindowState;
  notification: LoginNotificationState;
}

export const reducers: ActionReducerMap<State> = {
  loginWindow: loginWindowReducer,
  notification: loginNotificationReducer,
};
