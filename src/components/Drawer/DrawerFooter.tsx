import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import Arrow from "../../icons/arrow";
import { useEffect, useState } from "react";



const DrawerFooter = () => {
    const theme = useSelector((state: any) => state?.theme?.theme);
    const dispatch = useDispatch();

    console.log(theme, 'theme');

    const handleToggle = () => {
        dispatch({
            type: "TOGGLE_DERICTION",
        });
    }

    const [isLTR, setIsLTR] = useState(theme.direction === 'ltr');

    useEffect(() => {
        setIsLTR(theme.direction === 'ltr');
    }, [theme.direction]);

    return (
        <div className='flex flex-col items-center justify-end bg-[#1C1D22]'>
            <IconButton
                onClick={handleToggle}
                className="transition-transform duration-1000 transform"
                style={{ transform: isLTR ? 'rotate(0deg)' : 'rotate(180deg)' }}
            >
                <Arrow />
            </IconButton>
        </div>
    )
}

export default DrawerFooter