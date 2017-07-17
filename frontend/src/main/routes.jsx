import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Movies from '../movies/movies'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path="billingCycle" component={BillingCycle}/>
            <Route path="movies" component={Movies}/>
        </Route>

        <Redirect from="*" to="/"/>
    </Router>
)