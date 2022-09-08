import React from 'react';
import {
  Button,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import { CustomTheme } from './theme';
import { MediaQuery } from './MediaQuery';

function App() {
  return (
    <CustomTheme>
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <IconButton sx={{ color: 'text.secondary' }}>Navbar</IconButton>
          </Toolbar>
          <Box
            sx={{
              backgroundColor: 'background.default',
              height: '100vh',
              color: 'primary.light',
            }}
          >
            {/* <Button
              sx={{
                color: 'primary.light',
                backgroundColor: 'secondary.light',
              }}
            >
              Click me
            </Button> */}
            <MediaQuery />
          </Box>
        </AppBar>
      </React.Fragment>
    </CustomTheme>
  );
}

export default App;
