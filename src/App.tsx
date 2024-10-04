import { useSelector } from 'react-redux';
import './App.css'
import Home from './screens/Home'

function App() {
  const theme = useSelector((state: any) => state?.theme?.theme?.palette?.background?.default);

  return (
    <div className={`${theme === '#000000' ? "!text-white" : "!text-[#1C1D22]"} exo-2`}>
      <Home />
    </div>
  )
}

export default App
