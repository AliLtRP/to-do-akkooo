import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Typography } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Collapsed from '../collapse';
import Switch from '../switch';
import { useSelector } from 'react-redux';

const DrawerContent = () => {
    const theme = useSelector((state: any) => state?.theme?.theme?.palette?.background?.default);
    const [open, setOpen] = useState(false);

    const handleMenuClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log(theme, 'theme');

    return (
        <div className={`${theme === '#F9F9FE' ? "bg-white" : "bg-black"} h-screen min-w-72 w-72 px-4 py-6 flex flex-col gap-4`}>
            <div className='flex justify-between items-center'>
                <Typography variant="h5">
                    Projects️
                </Typography>
                <AddCircleIcon />
            </div>

            <div className='flex flex-col gap-4 mt-4'>
                <div className='relative'>
                    <div className='flex justify-between items-center'>
                        <Typography
                            style={{
                                fontWeight: 'bold',
                                color: '#1C1D22',
                                opacity: open ? 1 : 0.5,
                            }}
                        >
                            Team
                        </Typography>
                        <KeyboardArrowDownRoundedIcon
                            onClick={handleMenuClick}
                            style={{ cursor: 'pointer', rotate: open ? '0deg' : '-90deg' }}
                        />
                    </div>

                    <Collapsed open={open} handleClose={handleClose} />
                </div>

            </div>

            <Switch />
        </div>
    );
}

export default DrawerContent;