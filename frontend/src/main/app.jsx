import React from 'react'

import Header from '../common/template/header'
import Footer from '../common/template/footer'
import SideBar from '../common/template/sideBar'
import Messages from '../common/msg/messages'

export default props => (
    <div className="wrapper">
        <Header/>
        <SideBar/>

        <div className="content-wrapper">
            {props.children}
        </div>

        <Footer/>
        <Messages/>
    </div>
)