import { Card, CardContent, Popover, Typography } from '@mui/material'
import Progress from '../../../icons/progress'
import Clip from '../../../icons/clip'
import CommentICon from '../../../icons/comment'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useTranslation } from 'react-i18next';
import { ITodo } from '../../../types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoCard = ({ theme, todo }: { theme: string, todo: ITodo }) => {
    const { t } = useTranslation();
    const [popFlag, setPopFlag] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useDispatch();

    const isLight = (): string => {
        return theme !== '#000000' ? "#fff" : "#292B30";
    };

    const progressTypoColor = () => {
        return theme !== '#000000' ? "#8D8E90" : "#949598";
    };

    const dateBackgroundColor = () => {
        return theme !== "#000000" ? "#F3F3F6" : "#35373D";
    };

    const dateColor = () => {
        return theme !== "#000000" ? "#888DA7" : "#989CAA";
    };

    const changeTaskStatus = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setPopFlag(!popFlag);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setPopFlag(false);
    };

    const handleProgress = () => {
        dispatch({ type: "PROGRESS_TASK", payload: todo });
        handleClose();
    }

    const handleDone = () => {
        dispatch({ type: "COMPLETE_TASK", payload: todo });
        handleClose();
    }

    const handleTodo = () => {
        dispatch({ type: "ADD_TASK", payload: todo });
        handleClose();
    }

    return (
        <Card variant="outlined" style={{ borderRadius: "12px", border: '2px solid #1c1d2216', height: '200px', minHeight: '200px', backgroundColor: isLight() }}>
            <CardContent className='rounded-xl bg-whit' style={{ paddingBottom: '16px' }}>
                <div className='w-full h-10 flex flex-col justify-between mb-2.5'>
                    <div className='flex w-full items-center justify-between'>
                        <Typography variant="h6" style={{ fontSize: '16px', fontWeight: '800' }}>
                            {todo?.title}
                        </Typography>

                        <div
                            className={`flex justify-center items-center border-[2px] ${theme === "#000000" ? "border-[#3F4147]" : "border-[#E8E8E9]"} rounded-full`}
                            onClick={changeTaskStatus}
                        >
                            <MoreHorizIcon style={{ color: theme === "#000000" ? "#fff" : "#1C1D22" }} fontSize="small" />
                        </div>
                        <Popover
                            open={popFlag}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                        >
                            <ul className='w-full'>
                                <li className='px-4 py-1 text-center' onClick={handleTodo}>To do</li>
                                <li className='px-4 py-1 text-center' onClick={handleProgress}>Progress</li>
                                <li className='px-4 py-1 text-center' onClick={handleDone}>Done</li>
                            </ul>
                        </Popover>
                    </div>

                    <Typography variant="h6" style={{ fontSize: '14px', color: "#8D8E90", fontWeight: '500' }}>
                        {todo?.description}
                    </Typography>
                </div>

                <div className='flex flex-col gap-2 justify-between'>
                    <div className='flex w-full h-10 items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <Progress percent={50} color={progressTypoColor} />
                            <Typography variant="h6" style={{ fontSize: '14px', fontWeight: '500', color: progressTypoColor() }}>
                                {t('Progress')}
                            </Typography>
                        </div>

                        <Typography style={{ fontSize: "14px", fontWeight: '600' }}>
                            1/10
                        </Typography>
                    </div>

                    <div className='w-full rounded-lg bg-[#EDEDED] flex'>
                        <span className='bg-black w-10 p-0.5 rounded-lg'></span>
                    </div>

                    <div className='w-full flex items-center justify-between mt-2'>
                        <Typography style={{ backgroundColor: dateBackgroundColor(), fontSize: '14px', fontWeight: '600', color: dateColor() }} className='px-4 py-2 rounded-full'>
                            24 Aug 2022
                        </Typography>

                        <div className='flex items-center gap-3'>
                            <div className='flex items-center gap-1.5'>
                                <CommentICon color={progressTypoColor} />
                                <Typography style={{ fontSize: '14px' }} >
                                    2
                                </Typography>
                            </div>
                            <div className='flex items-center gap-1.5'>
                                <Clip color={progressTypoColor} />
                                <Typography style={{ fontSize: '14px' }} >
                                    2
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TodoCard;