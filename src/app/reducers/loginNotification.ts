import {
  createAction,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

export const toggleLoginNotification = createAction(
  '[LoginNotification] Toggle LoginNotification'
);

export interface LoginNotificationState {
  isLoginNotificationOpened: boolean;
}

export const initialState: LoginNotificationState = {
  isLoginNotificationOpened: false,
};

export const loginNotificationReducer = createReducer(
  initialState,
  on(toggleLoginNotification, (state) => ({
    ...state,
    isLoginNotificationOpened: !state.isLoginNotificationOpened,
  }))
);

export const featureSelector =
  createFeatureSelector<LoginNotificationState>('notification');
export const loginNotificationSelector = createSelector(
  featureSelector,
  (state) => state.isLoginNotificationOpened
);
