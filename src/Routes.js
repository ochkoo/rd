import {Switch, Route} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/auth/Login'

function Routes() {
    return (
        <Switch>
            <Route path={"/"} component={Home} exact/>
          <Route path={"/login"} component={Login} exact/>
        </Switch>
    )
}

export default Routes;