import React from 'react'
import {redux} from "../annotations"

import { init, createBilling, updateBilling, removeBilling } from './billingActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'

import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingForm'

@redux({
    actions: { init, createBilling, updateBilling, removeBilling }
})
export default class BillingCycle extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.init()
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