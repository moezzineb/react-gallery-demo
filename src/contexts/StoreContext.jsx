import React, { createContext, useReducer } from 'react';
import Reducer from '../reducers/StoreReducer';

const initialState = {
  pics: [],
  collections: [],
  colcImages: [],
  image: {},
  user: {},
  query: '',
  auth: false,
  error: '',
  loading: '',
  quote: ''
};

export const Context = createContext(initialState);

// eslint-disable-next-line react/prop-types
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export default Store;
