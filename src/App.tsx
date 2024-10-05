import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Home from './screens/Home'
import { useEffect } from 'react';

function App() {
  const theme = useSelector((state: any) => state?.theme?.theme?.palette?.background?.default);

  const todo = useSelector((state: any) => state?.todo);

  console.log(todo, 'todo');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "ADD_TASK", payload: { title: "meow meow", description: "meoowwwwww" } });
  }, []);

  useEffect(() => {
    dispatch({ type: "PROGRESS_TASK", payload: { title: "woof", description: "woof" } })
  }, []);

  useEffect(() => {
    dispatch({ type: "COMPLETE_TASK", payload: { title: "sdsdsd", description: "sdsdsd" } })
  }, []);

  return (
    <div className={`${theme === '#000000' ? "!text-white" : "!text-[#1C1D22]"} exo-2 fade-in`}>
      <Home />
    </div>
  )
}

export default App
