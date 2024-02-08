import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { navItems } from 'src/config/constants';
import CloseIcon from '@mui/icons-material/Close';
import AppleIcon from '@mui/icons-material/Apple';
import { useRouter } from 'next/router';

interface Props {
	window?: () => Window;
}

const Navbar = ({ window }: Props) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const router = useRouter()

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	const drawer = (
		<Box sx={{ textAlign: 'center' }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '20px' }}>
				<Box sx={{ my: 2, display: 'flex', alignItems: 'center', gap: '5px' }}  >
					<Box sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'row' }} onClick={() => router.push(`/`)}>
						<AppleIcon />
						<Typography variant='h6'>iNote</Typography>
					</Box>
				</Box>
				<CloseIcon onClick={handleDrawerToggle} sx={{ cursor: 'pointer' }} />
			</Box>
			<Divider />
			<List>
				{navItems.map(item => (
					<ListItem key={item.route} disablePadding>
						<ListItemButton onClick={() => router.push(item.route)} sx={{ textAlign: 'center' }}>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box sx={{ display: 'flex', height: '9vh' }}>
			<AppBar sx={{ height: '9vh', backgroundColor: '#141414', }} component='nav'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ marginRight: '2px', marginTop: '15px', display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ my: 4, alignItems: 'center', gap: '5px', flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
						<Box sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'row' }} onClick={() => router.push(`/`)}>
							<AppleIcon />
							<Typography variant='h6' component='div'>
								iNote
							</Typography>
						</Box>
					</Box>

					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map(item => (
							<Button onClick={() => router.push(item.route)} key={item?.route} sx={{ color: '#fff' }}>
								{item.label}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: `100%` }
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
};

export default Navbar;
