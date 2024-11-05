import {Route,BrowserRouter,Switch} from "react-router-dom"
import Login from "./components/loginPage";
import Home from "./components/homePage";

const App = () => (
  <BrowserRouter>
  <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/login" component={Login} />
   </Switch>
  </BrowserRouter>
)

export default App