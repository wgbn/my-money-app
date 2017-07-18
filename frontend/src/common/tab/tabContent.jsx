import React from 'react'
import {redux} from "../../annotations"

import If from '../operator/if'

@redux({
    states: state => ({ tab: state.tab })
})
export default class TabContent extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    render() {
        const selected = this.props.tab.selected === this.props.id
        const visible = this.props.tab.visible[this.props.id]
        return (
            <If test={visible}>
                <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                    {this.props.children}
                </div>
            </If>
        )
    }

}