import React from 'react'
import {redux} from "../../annotations"

import { selectTab } from './tabActions'
import If from '../operator/if'

@redux({
    states: state => ({ tab: state.tab }),
    actions: { selectTab }
})
export default class TabHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    render() {
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]
        return (
            <If test={visible}>
                <li className={ selected ? 'active' : '' }>
                    <a href="javascript:;"
                       onClick={() => this.props.selectTab(this.props.target)}
                       data-toggle="tab"
                       data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
            </If>
        )
    }

}