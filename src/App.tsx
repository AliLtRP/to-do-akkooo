import { useSelector } from 'react-redux';
import './App.css'
import Home from './screens/Home'
import Form from './components/form';
import useI18n from './i18n';

function App() {
  const theme = useSelector((state: any) => state?.theme?.theme?.palette?.background?.default);
  const flag = useSelector((state: any) => state?.form?.flag);

  const todo = useSelector((state: any) => state?.todo);

  console.log(todo);

  useI18n();

  return (
    <div className={`${theme === '#000000' ? "!text-white" : "!text-[#1C1D22]"} exo-2 fade-in`}>
      <Home />
      {flag && <Form />}
    </div>
  )
}

export default App
