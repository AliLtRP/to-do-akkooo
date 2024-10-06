import { useSelector } from 'react-redux';
import './App.css'
import Home from './screens/Home'
import Form from './components/form';

function App() {
  const theme = useSelector((state: any) => state?.theme?.theme?.palette?.background?.default);
  const flag = useSelector((state: any) => state?.form?.flag);

  return (
    <div className={`${theme === '#000000' ? "!text-white" : "!text-[#1C1D22]"} exo-2 fade-in`}>
      <Home />
      {flag && <Form />}
    </div>
  )
}

export default App
