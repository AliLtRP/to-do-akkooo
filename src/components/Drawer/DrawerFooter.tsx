import { IconButton } from "@mui/material"
import { useDispatch } from "react-redux"
import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import i18n from "../../i18n";


const DrawerFooter = () => {
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(false);

    const handleToggle = () => {
        dispatch({
            type: "TOGGLE_DERICTION",
        });

        dispatch({
            type: "TOGGLE_FLAG"
        });
    }

    const handleIcon = () => {
        setFlag(!flag);
        handleToggle()
    }

    return (
        <div className='flex flex-col items-center justify-end bg-[#1C1D22]'>
            <IconButton
                onClick={handleIcon}
                className="transition-transform duration-1000 transform"
                style={{ transform: flag ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
                <ArrowForwardIosIcon style={{ color: "#8D8E90", transform: i18n.dir() === 'ltr' ? 'rotate(0deg)' : 'rotate(180deg)' }} />
            </IconButton>
        </div>
    )
}

export default DrawerFooter