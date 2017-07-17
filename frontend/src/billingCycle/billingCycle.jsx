import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectTab, showTabs } from '../common/tab/tabActions'
import { createBilling, updateBilling, removeBilling } from './billingActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'

import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingForm'

class BillingCycle extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamento" small="Cadastro"/>
                <Content>

                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList"/>
                            <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete"/>
                        </TabsHeader>

                        <TabsContent>
                            <TabContent id="tabList">
                                <BillingCycleList/>
                            </TabContent>

                            <TabContent id="tabCreate">
                                <BillingCycleForm onSubmit={this.props.createBilling} submitLabel="Incluir" submitClass="primary"/>
                            </TabContent>

                            <TabContent id="tabUpdate">
                                <BillingCycleForm onSubmit={this.props.updateBilling} submitLabel="Alterar" submitClass="warning"/>
                            </TabContent>

                            <TabContent id="tabDelete">
                                <BillingCycleForm onSubmit={this.props.removeBilling} readOnly="true" submitLabel="Excluir" submitClass="danger"/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }

}

//const mapStateToProps = state => ({ [state] })
const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab,
    showTabs,
    createBilling,
    updateBilling,
    removeBilling
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)