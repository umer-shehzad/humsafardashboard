import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';



import Box from '@mui/material/Box';

import MuiDrawer from '@mui/material/Drawer';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';

import { Outlet } from 'react-router-dom';
import { colors } from '../../../utils/colors';

import CustomButton from '../../common/CustomButton';
import { MenuData } from '../../../utils/driverMenuData';
import NavBar from './NavBar';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  [theme.breakpoints.down('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
);

const MiniDrawer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>

      <NavBar />

      {/* Drawer */}
      <Drawer variant="permanent">
        <DrawerHeader />
        <List sx={{ marginTop: 5 }}>
          {MenuData.map((item, index) => (
            <ListItem key={item.itemName} disablePadding sx={{ display: 'block' }}>
              <NavLink
                to={item.path}
                activeClassName="active"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: 48,
                  padding: theme.spacing(0, 4.5),
                  justifyContent: 'initial',
                  ...(theme.breakpoints.down('sm') && {
                    justifyContent: 'center',
                  }),
                  backgroundColor: location.pathname === item.path ? `${colors.textFifthColor}` : 'inherit',
                  borderRadius: location.pathname === item.path ? '0 10px 10px 0' : ''
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 2,
                    justifyContent: 'center',
                    color: location.pathname === item.path ? '#ffffff' : `${colors.textFifthColor}`,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.itemName}
                  sx={{
                    opacity: 1,
                    display: isSmallScreen ? 'none' : 'block',
                    color: location.pathname === item.path ? '#ffffff' : `${colors.textFifthColor}`,
                  }}
                />
              </NavLink>
            </ListItem>
          ))}
        </List>

        <Box sx={{ textAlign: 'center', width: '100%', marginTop: 3 }}>
          <CustomButton btnName={'Log Out'} width={'70%'} borderRadius={'8px'} />
        </Box>
      </Drawer>

      {/* main */}
      <Box component="main" mt={4} sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Outlet />
      </Box>
    </Box>
  );
}

export default MiniDrawer;
