import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReduer'
import BilingCyclesReducer from '../billingCycle/billingReducer'
import AuthReducer from '../auth/authReducer'
import MoviesReducer from '../movies/moviesReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BilingCyclesReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer,
    netflix: MoviesReducer
})

export default rootReducer