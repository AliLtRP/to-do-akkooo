import TodoCard from './todo-card'
import { Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ITodo } from '../../types';
import { useMemo } from 'react';

const Todo = ({ theme, type }: { theme: string, type: string }) => {
    const { t } = useTranslation();
    const todo = useSelector((state: any) => state?.todo);
    const dispatch = useDispatch();

    const typoColor = () => {
        if (theme !== "#000000") {
            return "#919295"
        }

        return "#8C8D8F"
    }

    const handleTodo = () => {
        if (type === "todo") {
            return todo?.todo
        } else if (type === "progress") {
            return todo?.progress;
        } else {
            return todo?.done
        }
    }

    const todoTasks = useMemo(() => handleTodo(), [type, todo]);

    const addTodoTask = () => {
        dispatch({ type: "TOGGLE_FORM_FLAG" });
    }

    return (
        <div className=' max-h-[calc(100%-102px)] h-full flex flex-col gap-3 basis-1/3 rounded-xl p-3'>
            <div className='flex justify-between items-center'>
                <Typography variant="h6" className='font-semibold text-sm' style={{ fontWeight: "600", fontSize: "14px", color: typoColor() }}>
                    {t('To do')} (4)
                </Typography>

                <div className='flex items-center gap-2' onClick={addTodoTask}>
                    <AddCircleIcon fontSize="inherit" className={`${theme === "#000000" ? "text-[#fff]" : "text-[#1C1D22]"}`} style={{ marginTop: "3px" }} />

                    <Typography variant='h6' style={{ fontWeight: "600", fontSize: "14px", color: theme === "#000000" ? "#FFFFFF" : "#1C1D22", opacity: '0.5' }}>
                        {t('Add New')}
                    </Typography>
                </div>
            </div>

            <div className='h-[100vh] flex flex-col overflow-y-scroll gap-4 no-scrollbar'>
                {
                    todoTasks?.map((v: ITodo) => {
                        return (
                            <TodoCard type={type} todo={v} theme={theme} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Todo;