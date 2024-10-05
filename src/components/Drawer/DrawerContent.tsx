import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Typography } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Collapsed from '../collapse';
import Switch from '../switch';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const DrawerContent = () => {
    const theme = useSelector((state: any) => state?.theme?.theme?.palette?.background?.default);
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const handleMenuClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleListIcon = () => {
        if (open) {
            return i18n.dir() === "ltr" ? "rotate(0deg)" : "rotate(0deg)";
        } else {
            return i18n.dir() === "ltr" ? "rotate(-90deg)" : "rotate(90deg)";
        }
    }

    return (
        <div className={`${theme === '#F9F9FE' ? "bg-white" : "bg-[#222327]"} h-screen min-w-72 w-72 px-4 py-6 flex flex-col gap-4 ${theme === '#F9F9FE' ? "border-r-[0.5px]" : ""}`}>
            <div className='flex justify-between items-center'>
                <Typography variant="h5">
                    {t('Projects️')}
                </Typography>
                <AddCircleIcon />
            </div>

            <div className='flex flex-col gap-4 mt-4'>
                <div className='relative'>
                    <div className='flex justify-between items-center'>
                        <Typography
                            style={{
                                fontWeight: 'bold',
                                opacity: open ? 1 : 0.5,
                            }}
                        >
                            {t('Team')}
                        </Typography>
                        <KeyboardArrowDownRoundedIcon
                            onClick={handleMenuClick}
                            style={{ cursor: 'pointer', transform: handleListIcon() }}
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