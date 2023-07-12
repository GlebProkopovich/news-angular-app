import {
  createAction,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

export const toggleMainLoader = createAction('[MainLoader] Toggle MainLoader');

export interface MainLoaderState {
  isMainLoaderOpened: boolean;
}

export const initialState: MainLoaderState = {
  isMainLoaderOpened: false,
};

export const mainLoaderReducer = createReducer(
  initialState,
  on(toggleMainLoader, (state) => ({
    ...state,
    isMainLoaderOpened: !state.isMainLoaderOpened,
  }))
);

export const featureSelector =
  createFeatureSelector<MainLoaderState>('mainLoader');
export const mainLoaderSelector = createSelector(
  featureSelector,
  (state) => state.isMainLoaderOpened
);
