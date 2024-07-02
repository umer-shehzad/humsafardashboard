import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomImage from '../../common/CustomImage';
import MuiAppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { colors } from '../../../utils/colors';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

// Search related styles
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '10px',
  backgroundColor: colors.searchBarColor,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  height: '7vh',
  boxShadow: '1px 5px 5px -2px rgba(0,0,0,0.4)',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(30),
    width: '31vw',
  },
  display: 'flex',
  alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
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
    marginLeft: 25,
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

const NavBar = () => {
  return (
    <>
      <CssBaseline />

      {/* App Bar */}
      <AppBar position='absolute' elevation={0} sx={{ backgroundColor: 'transparent', marginTop: 2 }}>
        <Toolbar>
          <Box display={'flex'} width={'100%'} alignItems={'center'}>
            <Search>
              <StyledInputBase
                placeholder="Search here"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ color: colors.textSixthColor }}
              />
              <SearchIconWrapper>
                <SearchIcon style={{ color: colors.searchBarIconColor }} />
              </SearchIconWrapper>
            </Search>
            <Box sx={{ flexGrow: 1 }} />

            {/* Driver's Profile Info */}
            <Box display={'flex'} columnGap={3}>
              <IconButton
                size="medium"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                {/* Avatar */}
                <CustomImage src={"/driver/avatar.png"} alt={'avatar'} />
              </IconButton>

              <Box mr={10}>
                <Typography color={colors.textFifthColor} fontSize={27} textAlign={'center'} mt={1} height={35}>
                  Rafay
                </Typography>
                <Typography color={colors.textSixthColor} fontSize={15} textAlign={'center'}>
                  Car Owner
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar