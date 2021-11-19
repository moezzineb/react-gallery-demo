import React, { useContext, useEffect } from "react";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Context } from "../contexts/StoreContext";
import config from "../constants/Config";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

export const CollectionListing = () => {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    const loadContent = () => {
      dispatch({
        type: "SET_LOAD",
        payload: "Loading ...",
      });
      config.unsplash.collections
        .list({ page: 1, perPage: config.perPage })
        .then((json) => {
          dispatch({ type: "SET_CLC", payload: json.response.results });
          dispatch({ type: "SET_LOAD", payload: null });
        });
    };

    loadContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Typography variant="h2" component="div" gutterBottom>
        Collections
      </Typography>
      <ImageList
        sx={{ width: "100%", height: "auto" }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {state?.collections.map((item) => (
          <ImageListItem key={item?.id}>
            <img
              src={`${item?.cover_photo?.urls?.thumb}`}
              srcSet={`${item?.cover_photo?.urls?.thumb}`}
              alt={item?.id}
              loading="lazy"
            />

            <ImageListItemBar
              title={item?.title}
              subtitle={`Total: ${item?.total_photos}`}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item?.title}`}
                  value={item?.id}
                  onClick={() => history.push("/collections/" + item?.id)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
