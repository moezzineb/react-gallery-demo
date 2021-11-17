import { PhotoCamera } from "@mui/icons-material";
import { IconButton, Input } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Upload = () => {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <label htmlFor="icon-button-file">
      <Input accept="image/*" id="icon-button-file" type="file" />
      <IconButton color="primary" aria-label="upload picture" component="span">
        <PhotoCamera />
      </IconButton>
    </label>
  );
};

export default Upload;
