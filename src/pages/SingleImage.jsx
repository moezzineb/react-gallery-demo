import { ShareSocial } from "react-share-social";
import { Avatar, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import config from "../constants/Config";
import { Context } from "../contexts/StoreContext";

export const SingleImage = () => {
  const Id = window.location.href.split("/").pop();
  const [state, dispatch] = useContext(Context);
  const style = {
    background: "transparent",
    borderRadius: 3,
    border: 0,
    color: "white",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  };

  useEffect(async () => {
    const loadContent = () => {
      config.unsplash.photos.get({ photoId: Id }).then((json) => {
        dispatch({ type: "SET_IMG", payload: json.response });
        console.log(json.response);
        console.log(state.image);
      });
    };

    await loadContent();
  }, [Id]);
  return (
    <Container maxWidth="md">
      <div
        style={{
          marginTop: "50px",
          width: "100%",
        }}
      >
        <img src={`${state?.image?.urls?.small}`} alt={`${state?.image?.id}`} />

        <div>
          <Box sx={{ p: 2, display: "flex" }}>
            <Avatar
              variant="rounded"
              src={`${state?.image?.user?.profile_image?.medium}`}
            />
            <Stack spacing={0.8} sx={{ marginLeft: "10px" }}>
              <Typography
                fontWeight={700}
              >{`${state?.image?.user?.username}`}</Typography>
              {state?.image?.description && (
                <Typography fontWeight={500}>
                  {`${state?.image?.description}`}
                </Typography>
              )}
            </Stack>
          </Box>
          <Box sx={{ display: "flex" }}>
            <ShareSocial
              style={style}
              url={`${state?.image?.urls?.full}`}
              socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
            />
          </Box>
        </div>
      </div>
    </Container>
  );
};
