import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { Context } from '../contexts/StoreContext';
import config from '../constants/Config';

const SearchForm = () => {
  const [state, dispatch] = useContext(Context);

  const searchPhotos = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOAD', payload: 'Loading ...' });
    config.unsplash.search
      .getPhotos({
        query: state.query,
        perPage: config.perPage
      })
      .then((json) => {
        dispatch({ type: 'SET_PICS', payload: json.response.results });
        console.log(json.response.results);
        dispatch({ type: 'SET_LOAD', payload: null });
      });
  };
  return (
    <>
      <TextField
        id="InputSearch"
        label="📷 name, tag ..."
        type="search"
        variant="standard"
        value={state.query}
        onChange={(e) => dispatch({ type: 'SET_QRY', payload: e.target.value })}
        fullWidth
      />
      <Button variant="outlined" onClick={searchPhotos}>
        Search
      </Button>
    </>
  );
};

export default SearchForm;
