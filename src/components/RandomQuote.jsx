import { Alert, Stack } from '@mui/material';
import React from 'react';
import useFetch from '../hooks/useFetch';

export const RandomQuote = () => {
  const [show, setShow] = React.useState(true);
  const { data: quote, loading, error } = useFetch('https://api.quotable.io/random');
  setTimeout(() => {
    setShow(false);
  }, 3000);
  return (
    <>
      {loading && <>{loading}</>}
      {quote && show && (
        <Stack sx={{ width: '100%' }} direction="row" justifyContent="center" alignItems="center">
          <Alert icon={false} severity="success">
            {quote}
          </Alert>
        </Stack>
      )}
      {error && <>{error}</>}
    </>
  );
};
