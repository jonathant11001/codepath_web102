import { useRoutes } from "react-router-dom";
import './App.css';
import Home from './routes/Home'

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home/>,
    },
  ]);
  return(
    <div>
      {element}
    </div>
  );
}

export default App;
