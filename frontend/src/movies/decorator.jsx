import React from 'react'
import {redux} from "../annotations";

import {selectTab, showTabs} from "../common/tab/tabActions"

@redux({
    states: state => ({tab: state.tab, list: state.billingCycle.list}),
    actions: {selectTab, showTabs}
})
class Decorate extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('Decorators will mount')
    }

    render() {
        return (
            <div>olá decoradores</div>
        )
    }

}
export default Decorate