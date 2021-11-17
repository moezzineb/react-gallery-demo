import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertIndicator = (props) => {
  const alertCompo = () => {
    switch (props.type) {
      case "error":
        return (
          <Alert severity="error">This is an error alert — check it out!</Alert>
        );
      case "warning":
        return (
          <Alert severity="warning">
            This is a warning alert — check it out!
          </Alert>
        );
      case "info":
        return (
          <Alert severity="info">This is an info alert — check it out!</Alert>
        );
      case "success":
        return (
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>
        );

      default:
        return (
          <Alert severity="warning">
            This is a warning alert — check it out!
          </Alert>
        );
    }
  };
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {alertCompo}
    </Stack>
  );
};

export default AlertIndicator;
