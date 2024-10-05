import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import Sider from '../../components/Drawer';
import DrawerContent from '../../components/Drawer/DrawerContent';
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Calender from '../../icons/calendar';
import StackIcon from '../../icons/stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Todo from '../../components/Todo';

const Home = () => {
    const theme: string = useSelector((state: any) => state?.theme?.theme?.palette?.background?.default);
    const drawerFlag = useSelector((state: any) => state?.drawerFlag?.flag);

    const textColor = theme === '#000000' ? '#FFFFFF' : '#1C1D22';

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
                <AppBar position="static" style={{ backgroundColor: theme !== "#000000" ? "#fff" : "#292B31", boxShadow: "none", height: "100dvh" }}>
                    <Toolbar className='w-full h-full flex flex-col'>
                        <div className='w-full flex items-center justify-between py-4'>
                            <Typography variant="h6" style={{ color: textColor }}>
                                Welcome back, Vincent 👋
                            </Typography>

                            <div className='flex items-center gap-4'>
                                <SearchIcon style={{ color: textColor }} />
                                <NotificationsIcon style={{ color: textColor }} />

                                <Calender color={textColor} className="-ml-5" />

                                <Typography variant="h6" style={{ color: textColor, fontWeight: "600", marginLeft: "-20px" }}>
                                    19 May 2022
                                </Typography>

                                <Avatar sx={{ width: 30, height: 30 }} />
                            </div>
                        </div>

                        <div className='w-full flex flex-col relative'>
                            <div className='flex justify-between pb-3'>
                                <div className='flex gap-4'>
                                    <div className='flex items-center gap-2 relative'>
                                        <StackIcon className="mt-0.5" color={theme === "#000000" ? "#fff" : "#1C1D22"} />
                                        <Typography variant='h6' style={{ fontWeight: "600", color: textColor }}>
                                            Board view
                                        </Typography>

                                        <div className={`w-[102%] z-10 border-b-[1.5px] ${theme !== "#000000" ? "border-black" : "border-white"} -bottom-[11.5px] absolute`}></div>
                                    </div>

                                    <div className='flex items-center gap-2'>
                                        <AddCircleIcon fontSize="small" className={`${theme === "#000000" ? "text-[#fff]" : "text-[#1C1D22]"}`} style={{ marginTop: "3px" }} />

                                        <Typography variant='h6' style={{ fontWeight: "600", color: theme === "#000000" ? "#FFFFFF" : "#1C1D22", opacity: '0.5' }}>
                                            Add view
                                        </Typography>
                                    </div>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <Typography style={{ color: textColor, fontWeight: "600" }}>
                                        Filter
                                    </Typography>

                                    <Typography style={{ color: theme === "#000000" ? "#fff" : "#1C1D22", opacity: "0.5", fontWeight: "600" }}>
                                        Sort
                                    </Typography>

                                    <div className={`flex justify-center items-center border-[2px] ${theme === "#000000" ? "border-[#5a5c65]" : "border-[#E8E8E9]"} rounded-full`}>
                                        <MoreHorizIcon style={{ color: theme === "#000000" ? "#fff" : "#1C1D22" }} fontSize="small" />
                                    </div>

                                    <button className={`rounded-[19px] text-sm font-semibold px-4 py-2 ${theme === "#000000" ? "bg-[#4B69FF]" : "bg-black"}`}>
                                        New template
                                    </button>
                                </div>
                            </div>

                            <div className={`w-full z-0 border-[1.5px] ${theme === "#000000" ? "border-[#ffffff16]" : "border-[#1c1d2216]"} absolute bottom-0 right-0`}></div>
                        </div>

                        <div className='w-full h-full flex gap-6 py-6 justify-between drop-shadow-sm'>
                            <Todo theme={theme} />
                            <Todo theme={theme} />
                            <Todo theme={theme} />
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
};

export default Home;