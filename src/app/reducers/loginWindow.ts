import {
  createAction,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

export const toggleLoginWindow = createAction('[Login] Toggle Login');

export interface LoginWindowState {
  isLoginWindowOpened: boolean;
}

export const initialState: LoginWindowState = {
  isLoginWindowOpened: true,
};

export const loginWindowReducer = createReducer(
  initialState,
  on(toggleLoginWindow, (state) => ({
    ...state,
    isLoginWindowOpened: !state.isLoginWindowOpened,
  }))
);

export const featureSelector =
  createFeatureSelector<LoginWindowState>('loginWindow');
export const loginWindowSelector = createSelector(
  featureSelector,
  (state) => state.isLoginWindowOpened
);
