import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { LinearProgress } from '@mui/material';

// eslint-disable-next-line react/prop-types
const LoadingProgres = ({ type }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
        marginBottom: '20px'
      }}>
      {type === 'linear' ? <LinearProgress /> : <CircularProgress />}
    </Box>
  );
};

export default LoadingProgres;
