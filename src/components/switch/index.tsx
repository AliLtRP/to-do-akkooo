import { Typography } from '@mui/material';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useI18n from '../../i18n';

const Switch = ({ translate }: { translate?: boolean }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const i18n = useI18n();

    const themeColor = useSelector((state: any) => state?.theme?.theme?.palette?.background?.default);

    const handleThemeColor = () => {
        dispatch({ type: "TOGGLE_THEME" });
    };

    const handleDir = () => {
        const newLanguage = i18n.language === "en" ? "ar" : "en";
        i18n.changeLanguage(newLanguage);
        document.body.dir = i18n?.dir(newLanguage);
    };

    const handleClick = () => {
        if (translate) {
            handleDir();
        } else {
            handleThemeColor();
        }
    };

    return (
        <div className={`${themeColor === "#000000" ? "bg-[#ffffff0a]" : "bg-[#1c1d2238]"} rounded-[22px] h-[42px] flex items-center justify-between p-2 absolute ${translate ? "bottom-0" : "bottom-12"} w-64 select-none`}>
            <div
                className={`basis-1/2 h-[33px] flex items-center rounded-2xl relative`}
                onClick={handleClick}
            >
                <div className={`flex items-center mx-auto cursor-pointer ${themeColor !== '#000000' ? "rounded-full m-1 py-[6px] px-6 bg-white" : ""}`}>
                    {!translate && <LightModeRoundedIcon fontSize='small' className='mx-2' />}
                    <Typography variant='h6' style={{ fontSize: '14px', fontWeight: '600' }}>
                        {
                            translate ? "en" : t('Light')
                        }
                    </Typography>
                </div>
            </div>

            <div
                className={`${themeColor === '000000' ? 'bg-[#ffffff06]' : 'bg-transparent'} basis-1/2 h-[33px] flex items-center rounded-2xl relative`}
                onClick={handleClick}
            >
                <div className={`flex items-center mx-auto cursor-pointer ${themeColor === '#000000' ? "rounded-full m-1 py-[6px] px-6 bg-[#ffffff0d]" : ""}`}>
                    {!translate && <NightlightRoundRoundedIcon fontSize='small' className='rotate-[-45deg] mr-1.5 mt-1' />}
                    <Typography variant='h6' style={{ fontSize: '14px', fontWeight: '600' }}>
                        {
                            translate ? "ar" : t('Dark')
                        }
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Switch;