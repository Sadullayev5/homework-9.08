import { useLocation } from "react-router-dom"
import Nav from "./Components/Nav"
import RouteController from "./routes/RouteController"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {

  const { pathname } = useLocation();

  return (
    <>
      {pathname !=="/login" && <Nav/>}
      <RouteController/>
    </>
  )
}

export default App
