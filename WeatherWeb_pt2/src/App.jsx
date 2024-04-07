import { useRoutes } from "react-router-dom";
import './App.css';
import Home from './routes/Home'
import DetailView from "./routes/DetailView";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/DayDescription/:day",
      element: <DetailView />,
    },
  ]);
  return(
    <div>
      {element}
    </div>
  );
}

export default App;
