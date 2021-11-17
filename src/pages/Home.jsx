import { Container } from "@mui/material";
import React from "react";
import { ImageListing } from "../components/ImageList";
import { RandomQuote } from "../components/RandomQuote";
import SearchForm from "../components/SearchForm";
import Upload from "../components/Upload";

export const Home = () => {
  return (
    <Container maxWidth="md">
      <div
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
      </div>
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
