import { AppBar, Toolbar, Typography } from '@mui/material';
import Sider from '../../components/Drawer';
import DrawerContent from '../../components/Drawer/DrawerContent';
import { useSelector } from 'react-redux';

const Home = () => {
    const theme = useSelector((state: any) => state?.theme?.theme?.palette?.background?.default);
    const drawerFlag = useSelector((state: any) => state?.drawerFlag?.flag);

    return (
        <div className='w-full h-full flex overflow-hidden'>
            <Sider />

            <div
                className={`transform ${drawerFlag ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
                style={{ minWidth: '18rem' }}
            >
                <DrawerContent />
            </div>

            <div className={`flex-grow ${drawerFlag ? 'ml-0' : '-ml-72'} transition-all duration-300 ease-in-out`}>
                <AppBar position="static" style={{ backgroundColor: theme, boxShadow: "none" }}>
                    <Toolbar>
                        <Typography variant="h6">Welcome back, Vincent 👋</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
};

export default Home;