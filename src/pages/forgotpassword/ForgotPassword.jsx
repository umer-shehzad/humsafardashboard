import * as React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import ForgotPasswordForm from '../../components/forgot-password/ForgotPasswordForm';
import { colors } from '../../utils/colors';

export default function ForgotPassword() {
	const handleSubmit = (event) => {
		// event.preventDefault();
		// const data = new FormData(event.currentTarget);
		// console.log({
		//     email: data.get('email'),
		//     password: data.get('password'),
		// });
	};

	return (
		<Box
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			height={'100vh'}
			sx={{
				position: 'relative',
				background: `linear-gradient(to bottom right, transparent 70%, ${colors.gradientColor})`,
				overflow: 'hidden',
			}}
		>
			<Grid container component="main" columnGap={6}
				sx={{
					height: { lg: '85vh', xs: '100vh' },
					width: '85%'
				}}
			>
				<CssBaseline />

				{/* Top-left corner image */}
				<Box
					component="img"
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						height: '80vh',
					}}
					alt="Top-left Image"
					src="/forgot/pic2.svg"
				/>

				{/* Image */}
				<Grid
					item
					xs={false}
					lg={6}
					my={'auto'}
				>
					<Box
						component="img"
						sx={{ height: '55vh', display: { xs: 'none', lg: 'block' } }}
						alt="Login Image"
						ml={5}
						src="/forgot/pic1.png"
					/>
				</Grid>

				{/* Form */}
				<Grid item xs={12} sm={8} md={5} lg={5} my={'auto'}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<ForgotPasswordForm />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
