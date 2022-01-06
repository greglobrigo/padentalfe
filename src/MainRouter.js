import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'



const MainRouter = () => {
    return (
        <div>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/users" component={Users} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <PrivateRoute exact path="/post/create" component={NewPost} /> */}
            </Switch>
        </div>
    )
}

export default MainRouter;
