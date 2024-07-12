import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

import { matchPath,NavLink, useLocation } from 'react-router-dom';
import CustomButton from '../../common/CustomButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MenuData } from '../../../utils/driverMenuData';
import { colors } from '../../../utils/colors';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: 'black',
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

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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
    // ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    // }),
    // ...(!open && {
    //   ...closedMixin(theme),
    //   '& .MuiDrawer-paper': closedMixin(theme),
    // }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const checkActive = (path) => {
    return !!matchPath({ path: path, end: false }, location.pathname) || location.pathname.startsWith(path);
  };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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

      <Box component="main" mt={2} p={5} sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
