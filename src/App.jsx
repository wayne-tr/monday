import useRoutesCustom from './routes/useRoutesCustom'
import {useSelector} from 'react-redux'
function App() {
  const {name} = useSelector((state) => state);
  console.log(name);
  const routes = useRoutesCustom();
  return routes
}

export default App
