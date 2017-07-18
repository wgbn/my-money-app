import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Movies from '../movies/movies'
import Decorate from "../movies/decorator";

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={AuthOrApp}>
            <IndexRoute component={Dashboard}/>
            <Route path="billingCycle" component={BillingCycle}/>
            <Route path="movies" component={Movies}/>
            <Route path="decorators" component={Decorate}/>
        </Route>

        <Redirect from="*" to="/"/>
    </Router>
)