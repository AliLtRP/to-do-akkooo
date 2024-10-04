import { AppBar, Toolbar, Typography } from '@mui/material';
import Sider from '../../components/Drawer';
import DrawerContent from '../../components/Drawer/DrawerContent';
import { useSelector } from 'react-redux';

const Home = () => {
    const theme = useSelector((state: any) => state?.theme?.theme?.palette?.background?.default);

    return (
        <div className='w-full h-full flex overflow-clip'>
            <Sider />
            <DrawerContent />

            <AppBar position="static" style={{ width: '100%', backgroundColor: theme, boxShadow: "none", zIndex: '0' }}>
                <Toolbar>
                    <Typography className='text-black' variant="h6">Welcome back, Vincent 👋</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Home;