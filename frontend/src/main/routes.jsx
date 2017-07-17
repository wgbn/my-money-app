import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Movies from '../movies/movies'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard}/>
        <Route path="/billingCycle" component={BillingCycle}/>
        <Route path="/movies" component={Movies}/>
        <Redirect from="*" to="/"/>
    </Router>
)