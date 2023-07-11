import {
  createAction,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

export const toggleLogoutNotification = createAction(
  '[LogoutNotification] Toggle LogoutNotification'
);

export interface LogoutNotificationState {
  isLogoutNotificationOpened: boolean;
}

export const initialState: LogoutNotificationState = {
  isLogoutNotificationOpened: false,
};

export const logoutNotificationReducer = createReducer(
  initialState,
  on(toggleLogoutNotification, (state) => ({
    ...state,
    isLogoutNotificationOpened: !state.isLogoutNotificationOpened,
  }))
);

export const featureSelector =
  createFeatureSelector<LogoutNotificationState>('logoutNotification');
export const logoutNotificationSelector = createSelector(
  featureSelector,
  (state) => state.isLogoutNotificationOpened
);
