import { useMemo } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

debugger
let store;

function initStore(initialState) {
  const tmpStore = createStore(
    rootReducer,
    initialState || {},
    composeWithDevTools(applyMiddleware(thunk))
  );

  return tmpStore;
}

export const initializeStore = preloadedState => {
  let innerStore = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    innerStore = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  if (typeof window === 'undefined') {
    return innerStore;
  }

  if (!store) {
    store = innerStore;
  }

  return innerStore;
};

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}