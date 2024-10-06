import { useState } from "react";
import { useDispatch } from "react-redux";

const Form = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const handleCloseForm = () => {
        dispatch({ type: "TOGGLE_FORM_FLAG" });
    };

    const handleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setTask((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const addTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(task, 'add task');

        dispatch({ type: "ADD_TASK", payload: task });
        dispatch({ type: "TOGGLE_FORM_FLAG" });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleCloseForm}></div>

            <form className={`relative z-10 bg-white p-6 rounded-lg shadow-lg max-w-sm w-full`} onSubmit={addTask}>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" name="title" className="border border-gray-300 px-2 py-1 rounded-lg w-full" onChange={handleTask} />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input type="text" name="description" className="border border-gray-300 px-2 py-1 rounded-lg w-full" onChange={handleTask} />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default Form;