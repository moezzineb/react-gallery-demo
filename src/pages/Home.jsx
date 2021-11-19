import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ImageListing } from "../components/ImageList";
import { RandomQuote } from "../components/RandomQuote";
import SearchForm from "../components/SearchForm";
import Upload from "../components/Upload";
import { Context } from "../contexts/StoreContext";
import { auth } from "../services/Firebase";
import unsplashServ from "../services/unsplash.service";

export const Home = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch({ type: "SET_AUTH", payload: true });
      dispatch({ type: "SET_USER", payload: user });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="md">
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Upload />
      </div> */}
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SearchForm />
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
        }}
      >
        <RandomQuote />
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
        }}
      >
        <ImageListing />
      </div>
    </Container>
  );
};
