import * as React from 'react';
import { matchPath,NavLink, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { colors } from '../../../utils/colors';
import { MenuData } from '../../../utils/driverMenuData';
import CustomButton from '../../common/CustomButton';

import NavBar from './NavBar';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: colors.sideBarBgCOlor,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  paddingRight: 3,
  boxShadow: '4px 0px 4px 4px rgba(0,0,0,0.12)',
  [theme.breakpoints.down('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
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

  const checkActive = (path) => {
    return !!matchPath({ path: path, end: false }, location.pathname) || location.pathname.startsWith(path);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Drawer variant="permanent">
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 113,
            background: `url('/logoBg.svg') no-repeat center center`,
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 3.5,
          }}
        >
          <Box
            component="img"
            sx={{ height: 40 }}
            alt="Logo"
            src="/humsafar-logo.svg"
          />
        </Box>

        <List sx={{ marginTop: 0, paddingTop: 0 }}>
          {MenuData.map((item, index) => {
            const isActive = checkActive(item.path);
            return (
              <ListItem key={item.itemName} disablePadding sx={{ display: 'block' }}>
                <NavLink
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: 48,
                    padding: theme.spacing(0, 2.5),
                    justifyContent: 'initial',
                    ...(theme.breakpoints.down('sm') && {
                      justifyContent: 'center',
                    }),
                    backgroundColor: isActive ? `${colors.primaryColor}` : 'inherit',
                    borderRadius: isActive ? '0 10px 10px 0' : ''
                  }}
                >
                  <ListItemIcon
                    sx={{
                      justifyContent: 'center',
                      color: isActive ? `${colors.btnBgColor}` : `${colors.primaryColor}`,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.itemName}
                    sx={{
                      opacity: 1,
                      display: isSmallScreen ? 'none' : 'block',
                      color: isActive ? `${colors.btnBgColor}` : `${colors.primaryColor}`,
                    }}
                  />
                </NavLink>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ textAlign: 'center', width: '100%', marginTop: 3 }}>
          <CustomButton btnName={'Log Out'} width={'70%'} borderRadius={'8px'} />
        </Box>
      </Drawer>
      <Box component="main" mt={3} p={3} sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}

export default MiniDrawer;
