import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Context } from '../contexts/StoreContext';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { useHistory, Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithGoogle } from '../services/Firebase';
import { auth } from '../services/Firebase';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function NavBar() {
  const [state, dispatch] = React.useContext(Context);
  const history = useHistory();

  const handleLogout = () => {
    auth
      .signOut()
      .then(function (e) {
        console.log(e);
        dispatch({ type: 'SET_AUTH', payload: false });
        dispatch({ type: 'SET_USER', payload: null });
      })
      .catch(function (error) {
        dispatch({ type: 'SET_ERROR', payload: error });
        console.log(error);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              style={{
                textTransform: 'none',
                color: '#fff',
                textDecoration: 'none'
              }}
              to="/"
              underline="none">
              Share Daily
            </Link>
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => history.push('/collections')}
            color="inherit">
            <PermMediaIcon />
          </IconButton>
          {state.user && state.auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => console.log('nothing here')}
                color="inherit">
                <Avatar alt="Remy Sharp" src={`${state?.user?.photoURL}`} />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleLogout}
                color="inherit">
                <ExitToAppIcon />
              </IconButton>
            </div>
          ) : (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={signInWithGoogle}
                color="inherit">
                <GoogleIcon />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
