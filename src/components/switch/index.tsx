import { Typography } from '@mui/material';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';
import { useDispatch, useSelector } from 'react-redux';


const Switch = () => {
    const dispatch = useDispatch();

    const themeColor = useSelector((state: any) => state?.theme?.theme?.palette?.mode);

    const handleThemeColor = () => {
        dispatch({
            type: "TOGGLE_THEME",
        });
    };

    return (
        <div className='bg-[#1c1d2238] rounded-[22px] h-[42px] flex items-center justify-between p-2 absolute bottom-9 w-72'>
            <div
                className={`${themeColor === 'light' ? 'bg-white' : 'bg-transparent'} basis-1/2 h-[33px] flex items-center rounded-2xl relative`}
                onClick={() => themeColor !== 'light' && handleThemeColor()}
            >
                <div className='flex items-center mx-auto'>
                    <LightModeRoundedIcon fontSize='small' className='mx-2' />
                    <Typography variant='h6'>
                        Light
                    </Typography>
                </div>
            </div>

            <div
                className={`${themeColor === 'dark' ? 'bg-[#ffffff06]' : 'bg-transparent'} basis-1/2 h-[33px] flex items-center rounded-2xl relative`}
                onClick={() => themeColor !== 'dark' && handleThemeColor()}
            >
                <div className='flex items-center mx-auto'>
                    <NightlightRoundRoundedIcon fontSize='small' className='rotate-[-45deg] mr-1.5 mt-1' />
                    <Typography variant='h6'>
                        Dark
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Switch;