import { Card, CardContent, LinearProgress, Typography } from '@mui/material'
import Progress from '../../../icons/progress'
import Clip from '../../../icons/clip'
import CommentICon from '../../../icons/comment'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const TodoCard = ({ theme }: { theme: string }) => {

    const isLight = (): string => {
        if(theme !== '#000000') {
            return "#fff"
        }

        return "#292B30"
    }

    const progressTypoColor = () => {
        if(theme !== '#000000') {
            return "#8D8E90"
        }

        return "#949598"
    }

    const dateBackgroundColor = () => {
        if(theme !== "#000000") {
            return "#F3F3F6"
        }

        return "#35373D"
    }

    const dateColor = () => {
        if(theme !== "#000000") {
            return "#888DA7";
        }

        return "#989CAA";
    }

    return (
        <Card variant="outlined" style={{ borderRadius: "12px", border: '2px solid #1c1d2216', height: '200px', minHeight: '200px', backgroundColor: isLight() }}>
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
                            <Progress percent={50} color={progressTypoColor}/>
                            <Typography variant="h6" style={{ fontSize: '14px', fontWeight: '500', color: progressTypoColor() }}>
                                Progress
                            </Typography>
                        </div>

                        <Typography style={{ fontSize: "14px", fontWeight: '600' }}>
                            1/10
                        </Typography>
                    </div>

                    <LinearProgress variant="determinate" value={10} />

                    <div className='w-full flex items-center justify-between mt-2'>
                        <Typography style={{ backgroundColor: dateBackgroundColor(), fontSize: '14px', fontWeight: '600', color: dateColor() }} className='px-4 py-2 rounded-full'>
                            24 Aug 2022
                        </Typography>

                        <div className='flex items-center gap-3'>
                            <div className='flex items-center gap-1.5'>
                                <CommentICon color={progressTypoColor}/>
                                <Typography style={{ fontSize: '14px' }} >
                                    2
                                </Typography>
                            </div>
                            <div className='flex items-center gap-1.5'>
                                <Clip color={progressTypoColor}/>
                                <Typography style={{ fontSize: '14px' }} >
                                    2
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default TodoCard