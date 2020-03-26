import { BrowserRouter , Route , Switch} from 'react-router-dom'
import React from 'react'


import Login from './pages/Logon'
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncidents';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= "/" component={Login}/>
                <Route path= "/register" component={Register}/>
                <Route path= "/profile" component= {Profile}/>
                <Route path= "/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;