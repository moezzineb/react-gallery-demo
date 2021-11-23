import React, { useContext, useEffect } from 'react';
import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Context } from '../contexts/StoreContext';
import config from '../constants/Config';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const ImageListing = ({ type }) => {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    function loadContent() {
      dispatch({ type: 'SET_LOAD', payload: 'Loading ...' });
      if (!type) {
        config.unsplash.photos.getRandom({ count: config.perPage }).then((json) => {
          dispatch({ type: 'SET_PICS', payload: json.response });
          dispatch({ type: 'SET_LOAD', payload: null });
        });
      }
    }

    loadContent();
  }, []);

  return (
    <div>
      <ImageList sx={{ width: '100%', height: 'auto' }} variant="quilted" cols={4} rowHeight={121}>
        {!type
          ? state?.pics?.map((item) => (
              <ImageListItem key={item?.id}>
                <img
                  src={`${item?.urls?.thumb}`}
                  srcSet={`${item?.urls?.thumb}`}
                  alt={item?.description}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                  }}
                  title={item?.title}
                  position="top"
                  actionIcon={
                    <IconButton
                      sx={{ color: 'white' }}
                      aria-label={`star ${item?.title}`}
                      value={item?.id}
                      onClick={() => history.push('/image/' + item?.id)}>
                      <ImageSearchIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            ))
          : state?.colcImages.map((item) => (
              <ImageListItem key={item?.id}>
                <img
                  src={`${item?.urls?.thumb}`}
                  srcSet={`${item?.urls?.thumb}`}
                  alt={item?.description}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                  }}
                  title={item?.title}
                  position="top"
                  actionIcon={
                    <IconButton
                      sx={{ color: 'white' }}
                      aria-label={`star ${item?.title}`}
                      value={item?.id}
                      onClick={() => history.push('/image/' + item?.id)}>
                      <ImageSearchIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            ))}
      </ImageList>
    </div>
  );
};
