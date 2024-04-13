import { useRoutes } from "react-router-dom";
import './App.css';
import Home from './routes/Home'
import CreateACrewmate from "./routes/CreateACrewmate";
import CrewmateGallery from "./routes/CrewmateGallery";
import EditCrewmate from "./routes/EditCrewmate";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/create/",
      element: <CreateACrewmate/>,
    },
    {
      path: "/gallery/",
      element: <CrewmateGallery/>,
    },
    {
      path:"/gallery/edit/:id",
      element: <EditCrewmate />
    },
  ]);
  return(
    <div>
      {element}
    </div>
  );
}

export default App;
