import TodoCard from './todo-card'
import { Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTranslation } from 'react-i18next';

const Todo = ({ theme }: { theme: string }) => {
    const { t } = useTranslation();

    const typoColor = () => {
        if (theme !== "#000000") {
            return "#919295"
        }

        return "#8C8D8F"
    }

    return (
        <div className=' max-h-[calc(100%-102px)] h-full flex flex-col gap-3 basis-1/3 rounded-xl p-3'>
            <div className='flex justify-between items-center'>
                <Typography variant="h6" className='font-semibold text-sm' style={{ fontWeight: "600", fontSize: "14px", color: typoColor() }}>
                    {t('To do')} (4)
                </Typography>

                <div className='flex items-center gap-2'>
                    <AddCircleIcon fontSize="inherit" className={`${theme === "#000000" ? "text-[#fff]" : "text-[#1C1D22]"}`} style={{ marginTop: "3px" }} />

                    <Typography variant='h6' style={{ fontWeight: "600", fontSize: "14px", color: theme === "#000000" ? "#FFFFFF" : "#1C1D22", opacity: '0.5' }}>
                        {t('Add view')}
                    </Typography>
                </div>
            </div>

            <div className='flex flex-col overflow-y-scroll gap-4 no-scrollbar'>
                <TodoCard theme={theme} />
                <TodoCard theme={theme} />
                <TodoCard theme={theme} />
                <TodoCard theme={theme} />
                <TodoCard theme={theme} />
                <TodoCard theme={theme} />
            </div>
        </div>
    )
}

export default Todo