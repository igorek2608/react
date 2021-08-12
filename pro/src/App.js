import "./App.css";

import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Repos from "./pages/Repos";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavLink activeStyle={{ color: "red" }} to="/repos">
          Repositories
        </NavLink>
      <Switch>
        
        <Route path="/repos" component={Repos}></Route>
        {/* <Route path="/users" component={Users}></Route> */}
        {/* <Route>no match</Route> */}
      </Switch>
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;
