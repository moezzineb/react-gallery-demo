import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";

const LoadingProgres = ({ type }) => {
  const loadingCompo = () => {
    switch (type) {
      case "cercular":
        return <CircularProgress />;
      case "linear":
        return <LinearProgress />;

      default:
        return <CircularProgress />;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        marginBottom: "20px",
      }}
    >
      {loadingCompo}
    </Box>
  );
};

export default LoadingProgres;
