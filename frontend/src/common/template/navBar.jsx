import React from 'react'
import {decorateRedux} from "../../annotations"

import { logout } from '../../auth/authActions'

export default decorateRedux({
    states: state => ({ user: state.auth.user }),
    actions: { logout }
}, class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    changeOpen() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { name, email } = this.props.user
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li onMouseLeave={() => this.changeOpen()} className={`dropdown user user-menu ${this.state.open ? 'open':''}`}>
                        <a href="javascript:;" onClick={() => this.changeOpen()}
                           aria-expanded={this.state.open ? 'true':'alse'}
                           data-toggle="dropdown"
                           className="dropdown-toggle">
                            <img src="http://lorempixel.com/160/160/abstract" alt="User Image" className="user-image"/>
                            <span className="hidden-xs">{name}</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="http://lorempixel.com/160/160/abstract" alt="User" className="img-circle"/>
                                <p>{name} <small>{email}</small></p>
                            </li>
                            <li className="user-footer">
                                <div className="pull-right">
                                    <a href="#" onClick={this.props.logout} className="btn btn-default btn-flat">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }

})