import { AppBar, Toolbar, Typography } from '@mui/material';
import Sider from '../../components/Drawer';
import DrawerContent from '../../components/Drawer/DrawerContent';

const Home = () => {
    return (
        <div className='w-full h-full flex overflow-clip'>
            <Sider />
            <DrawerContent />

            <AppBar position="static" style={{ width: '100%', backgroundColor: "#fff", boxShadow: "none" }}>
                <Toolbar>
                    <Typography className='text-black' variant="h6">Welcome back, Vincent 👋</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Home;