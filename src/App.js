import * as React from 'react'
import NavBar from './components/NavBar';
import './App.css'
import { Container, IconButton, Input, TextField } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { styled } from "@mui/material/styles";
import { ImageListing } from "./components/ImageList";
import Store from "./contexts/StoreContext";

const App = () => {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <Store>
      <NavBar />
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
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
        <div>
          <TextField
            id="standard-search"
            label="Search name, collection, tag ..."
            type="search"
            variant="standard"
            fullWidth
          />
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
    </Store>
  );
}

export default App;
