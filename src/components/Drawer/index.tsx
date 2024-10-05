import { Drawer } from '@mui/material';
import { useState } from 'react';
import Logo from "../../icons/Logo";
import UserIcon from "../../icons/user";
import Calendar from "../../icons/calendar";
import Status from '../../icons/status';
import Docs from '../../icons/docs';
import Settings from '../../icons/settings';
import Home from '../../icons/Home';
import DrawerFooter from './DrawerFooter';
import i18n from '../../i18n';

const Sider = () => {
    const [toggle, setToggle] = useState<boolean>(true);
    const [select, setSelect] = useState<number>(0);

    const handleClick = () => {
        setToggle(!toggle);
    };

    const handleSelect = (pos: number) => {
        setSelect(pos);
    };

    const handlePos = () => {
        return {
            right: i18n.dir() === 'rtl' ? 0 : 'auto',
            left: i18n.dir() === "ltr" ? 0 : 'auto',
        };
    };

    return (
        <Drawer
            variant="permanent"
            open={toggle}
            onClick={handleClick}
            sx={{
                width: '90px',
                flexShrink: 0,
                ...handlePos(),
                '& .MuiDrawer-paper': {
                    backgroundColor: '#1C1D22',
                    width: '90px',
                    borderRight: 'none',
                    ...handlePos(),
                },
            }}
        >
            <div className='h-full flex flex-col justify-between items-center py-10'>
                <div className='w-full h-full flex flex-col items-center gap-10'>
                    <Logo />
                    <Home className="hover:cursor-pointer" flag={select === 0} color={select === 0 ? "#fff" : "#8D8E90"} onClick={() => handleSelect(0)} />
                    <UserIcon className="hover:cursor-pointer" flag={select === 1} color={select === 1 ? "#fff" : "#8D8E90"} onClick={() => handleSelect(1)} />
                    <Calendar className="hover:cursor-pointer" flag={select === 2} color={select === 2 ? "#fff" : "#8D8E90"} onClick={() => handleSelect(2)} />
                    <Status className="hover:cursor-pointer" flag={select === 3} color={select === 3 ? "#fff" : "#8D8E90"} onClick={() => handleSelect(3)} />
                    <Docs className="hover:cursor-pointer" flag={select === 4} color={select === 4 ? "#fff" : "#8D8E90"} onClick={() => handleSelect(4)} />
                    <Settings className="hover:cursor-pointer" flag={select === 5} color={select === 5 ? "#fff" : "#8D8E90"} onClick={() => handleSelect(5)} />
                </div>

                <DrawerFooter />
            </div>
        </Drawer>
    );
};

export default Sider;