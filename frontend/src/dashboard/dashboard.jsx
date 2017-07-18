import React from 'react'
import {redux} from "../annotations"

import { getSummary } from './dashboardActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

/**
 * Usando o decoratorRedux() para encapsular o componente,
 * passamos somente os states e as actions a serem mapeadas.
 */
@redux({
    states: state => ({ summary: state.dashboard.summary }),
    actions: { getSummary }
})
export default class Dashboard extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"/>
                <Content>

                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit.toFixed(2)}`} text="Total de Créditos"/>
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt.toFixed(2)}`} text="Total de Débitos"/>
                        <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${(credit - debt).toFixed(2)}`} text="Total Consolidade"/>
                    </Row>

                </Content>
            </div>
        )
    }

}