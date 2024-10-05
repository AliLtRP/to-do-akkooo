import { AppBar, Avatar, Card, CardContent, LinearProgress, Toolbar, Typography } from '@mui/material';
import Sider from '../../components/Drawer';
import DrawerContent from '../../components/Drawer/DrawerContent';
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Calender from '../../icons/calendar';
import StackIcon from '../../icons/stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Progress from '../../icons/progress';
import CommentICon from '../../icons/comment';
import Clip from '../../icons/clip';

const Home = () => {
    const theme = useSelector((state: any) => state?.theme?.theme?.palette?.background?.default);
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
                <AppBar position="static" style={{ backgroundColor: theme !== "#000000" ? "#fff" : "#292B31", boxShadow: "none", height: "100%" }}>
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

                                    <div className={`flex justify-center items-center border-[2px] ${theme === "#000000" ? "border-[#ffffff25]" : "border-[#00000025]"} border-[#ffffff25] rounded-full p-`}>
                                        <MoreHorizIcon style={{ color: theme === "#000000" ? "#fff" : "#1C1D22" }} fontSize="small" />
                                    </div>

                                    <button className={`rounded-[19px] text-sm font-semibold px-4 py-2 ${theme === "#000000" ? "bg-[#4B69FF]" : "bg-black"}`}>
                                        New template
                                    </button>
                                </div>
                            </div>

                            <div className={`w-full z-0 border-[1.5px] ${theme === "#000000" ? "border-[#ffffff16]" : "border-[#1c1d2216]"} absolute bottom-0 right-0`}></div>
                        </div>

                        <div className='w-full h-full shadow-sm flex gap-6 py-6 justify-between'>
                            <div className='h-full flex flex-col gap-3 basis-1/3 border-white border-[2px] border-dashed rounded-xl p-3'>
                                <div className='flex justify-between items-center'>
                                    <Typography variant="h6" className='font-semibold text-sm' style={{ fontWeight: "600", fontSize: "14px" }}>
                                        To do (4)
                                    </Typography>

                                    <div className='flex items-center gap-2'>
                                        <AddCircleIcon fontSize="inherit" className={`${theme === "#000000" ? "text-[#fff]" : "text-[#1C1D22]"}`} style={{ marginTop: "3px" }} />

                                        <Typography variant='h6' style={{ fontWeight: "600", fontSize: "14px", color: theme === "#000000" ? "#FFFFFF" : "#1C1D22", opacity: '0.5' }}>
                                            Add view
                                        </Typography>
                                    </div>
                                </div>

                                <Card variant="outlined" style={{ borderRadius: "12px", border: '2px solid #1c1d2216' }}>
                                    <CardContent className='rounded-xl bg-whit' style={{ paddingBottom: '16px' }}>
                                        <div className='w-full h-10 flex flex-col justify-between mb-2.5'>
                                            <div className='flex w-full items-center justify-between'>
                                                <Typography variant="h6" style={{ fontSize: '16px', fontWeight: '800' }}>
                                                    Design system update
                                                </Typography>

                                                <div className={`flex justify-center items-center border-[2px] ${theme === "#000000" ? "border-[#ffffff25]" : "border-[#00000025]"} border-[#ffffff25] rounded-full`}>
                                                    <MoreHorizIcon style={{ color: theme === "#000000" ? "#fff" : "#1C1D22" }} fontSize="small" />
                                                </div>
                                            </div>

                                            <Typography variant="h6" style={{ fontSize: '14px', color: "#8D8E90", fontWeight: '500' }}>
                                                Oreo website project
                                            </Typography>
                                        </div>

                                        <div className='flex flex-col gap-2 justify-between'>
                                            <div className='flex w-full h-10 items-center justify-between'>
                                                <div className='flex items-center gap-2'>
                                                    <Progress percent={50} />
                                                    <Typography variant="h6" style={{ fontSize: '14px', color: "#8D8E90", fontWeight: '500' }}>
                                                        Progress
                                                    </Typography>
                                                </div>

                                                <Typography style={{ fontSize: "14px", fontWeight: '600' }}>
                                                    1/10
                                                </Typography>
                                            </div>
                                            <LinearProgress variant="determinate" value={10} />

                                            <div className='w-full flex items-center justify-between mt-2'>
                                                <Typography style={{ backgroundColor: "#F3F3F6", fontSize: '14px' }} className='px-4 py-2 rounded-full'>
                                                    24 Aug 2022
                                                </Typography>

                                                <div className='flex items-center gap-3'>
                                                    <div className='flex items-center gap-1.5'>
                                                        <CommentICon />
                                                        <Typography style={{ fontSize: '14px' }} >
                                                            2
                                                        </Typography>
                                                    </div>
                                                    <div className='flex items-center gap-1.5'>
                                                        <Clip />
                                                        <Typography style={{ fontSize: '14px' }} >
                                                            2
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className='h-full basis-1/3 border-white border-[2px] border-dashed rounded-xl'>ssdf</div>
                            <div className='h-full basis-1/3 border-white border-[2px] border-dashed rounded-xl'>ssdf</div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
};

export default Home;