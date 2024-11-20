import Router from "./app/Router";
import Login from "./Pages/Login";
import { useUserContext } from "./providers/UserProvider";
const App = () =>{
  const {user} = useUserContext();
    return  user ? <Router/> : <Login/>
  
  }
  export default App