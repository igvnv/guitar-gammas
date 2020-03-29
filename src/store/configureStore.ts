import { createStore } from 'redux';

import rootReducer from './reducer';

const configureStore = (defaultState: any = undefined) => {
  if (defaultState === undefined && localStorage.getItem('store') !== null) {
    try {
      defaultState = JSON.parse(localStorage.getItem('store')!);
    } catch (e) {
      console.error("Can't read store from local storage");
    }
  }

  const store = createStore(rootReducer, defaultState);

  store.subscribe(() => {
    localStorage.setItem('store', JSON.stringify(store.getState()));
  });

  return store;
};

export default configureStore;
