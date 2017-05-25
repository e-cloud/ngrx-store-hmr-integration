import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { routerReducer, RouterState } from '@ngrx/router-store';

import { environment } from '../../environments/environment'

const modules = {
};

export interface AppState {
  router: RouterState;
}

export const syncReducers = {
  router: routerReducer
};

const deepCombineReducers = (allReducers: any) => {
  Object.getOwnPropertyNames(allReducers).forEach((prop) => {
    if (allReducers.hasOwnProperty(prop)
      && allReducers[prop] !== null
      && typeof allReducers[prop] !== 'function') {
      allReducers[prop] = deepCombineReducers(allReducers[prop]);
    }
  });
  return combineReducers(allReducers);
};

const createReducer = (asyncReducers = {}) => {
  const allReducers = { ...syncReducers, ...asyncReducers };
  return deepCombineReducers(allReducers);
};

// Generate a reducer to set the root state in dev mode for HMR
function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return reducer(state, action);
  };
}

const resetOnLogout = (reducer: Function) => {
  return function (state, action) {
    let newState;
    if (action.type === '[User] Logout Success') {
      newState = Object.assign({}, state);
      Object.keys(modules).forEach((key) => {
        newState[key] = modules[key]['initialState'];
      });
    }
    return reducer(newState || state, action);
  };
};

const DEV_REDUCERS = [];

// tslint:disable-next-line:max-line-length
const developmentReducer = compose(...DEV_REDUCERS, resetOnLogout);
const productionReducer = compose(resetOnLogout);

export function rootReducer(state: any, action: any, asyncReducer) {
  if (environment.production) {
    return productionReducer(createReducer(asyncReducer))(state, action);
  } else {
    return developmentReducer(createReducer(asyncReducer))(state, action);
  }
}

export function createNewRootReducer(reducer: any): ActionReducer<any> {
  return function (state, action) {
    return rootReducer(state, action, reducer);
  };
}
