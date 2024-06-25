import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import useMediaQuery from '@mui/material/useMediaQuery';

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

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
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

// Search related styles
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#D9D9D9', 0.5),
  '&:hover': {
    backgroundColor: alpha('#DFDFDF', 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(4),
    width: '30vw',
  },
  display: 'flex',
  alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const MenuData = [
    {
      itemName: 'Dashboard',
      itemIcon: '/icons/dashboard.svg',
    },
    {
      itemName: 'Manage Drivers',
      itemIcon: '/icons/wheel.svg',
    },
    {
      itemName: 'Manage Owners',
      itemIcon: '/icons/manage-owner.svg',
    },
    {
      itemName: 'Statistics',
      itemIcon: '/icons/statistics.svg',
    },
    {
      itemName: 'Approvals',
      itemIcon: '/icons/approval.svg',
    },
    {
      itemName: 'Chats',
      itemIcon: '/icons/chats.svg',
    },
    {
      itemName: 'Help and Support',
      itemIcon: '/icons/help.svg',
    }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* App Bar */}
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #ccc' }}>
        <Toolbar>
          <Box
            component="img"
            sx={{ height: 40, marginRight: 2 }}
            alt="Logo"
            src="/humsafar-logo.svg"
          />
          <Search>
            <StyledInputBase
              placeholder="Search here"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: 'black' }}
            />
            <SearchIconWrapper>
              <SearchIcon style={{ color: '#464646' }}/>
            </SearchIconWrapper>
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          {/* Display icons and text on all screen sizes */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge>
                <NotificationsIcon style={{ color: '#454545', width: 30, height: 30 }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle style={{ color: '#454545', width: 30, height: 30 }}/>
            </IconButton>
            <Typography variant="body1" noWrap component="div" sx={{ marginLeft: 2, marginRight: 5, color: 'black' }}>
              Admin
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>


      {/* Drawer */}
      <Drawer variant="permanent">
        <DrawerHeader />
        <Divider />
        <List sx={{ marginTop: 1 }}>
          {MenuData.map((item, index) => (
            <ListItem key={item.itemName} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'initial',
                  px: 4.5,
                  ...(theme.breakpoints.down('sm') && {
                    justifyContent: 'center',
                  })
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 2,
                    justifyContent: 'center',
                  }}
                >
                  <img src={item.itemIcon} alt={item.itemName} style={{ width: 20, height: 20 }} />
                </ListItemIcon>
                <ListItemText
                  primary={item.itemName}
                  sx={{
                    opacity: 1,
                    display: isSmallScreen ? 'none' : 'block',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider sx={{ width: '100%' }} /> */}
        <Box sx={{ textAlign: 'center', width: '100%', marginTop: 3 }}>
          <Button
            sx={{
              backgroundColor: '#E58600',
              color: 'white',
              width: '70%',
              marginTop: theme.spacing(2),
              '&:hover': {
                backgroundColor: '#D57500',
              },
            }}
          >
            Log out
          </Button>
        </Box>
      </Drawer>

      {/* main */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
    </Box>
  );
}
