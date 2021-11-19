import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ImageListing } from "../components/ImageList";
import config from "../constants/Config";
import { Context } from "../contexts/StoreContext";

const SingleCollection = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);
  const Id = window.location.href.split("/").pop();

  useEffect(() => {
    const loadContent = async () => {
      dispatch({
        type: "SET_LOAD",
        payload: "Loading ...",
      });
      await config.unsplash.collections
        .getPhotos({ collectionId: Id })
        .then((json) => {
          dispatch({ type: "SET_CIMG", payload: json.response.results });
          // setImages(json.response.result);
          dispatch({ type: "SET_LOAD", payload: "" });
        });
    };

    loadContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container maxWidth="md">
      <div
        style={{
          marginTop: "50px",
          width: "100%",
        }}
      >
        <ImageListing type={"collection"} />
      </div>
    </Container>
  );
};

export default SingleCollection;
