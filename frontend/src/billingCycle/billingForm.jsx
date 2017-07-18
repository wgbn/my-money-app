import React from 'react'
import {reduxForm} from "../annotations"
import {Field, formValueSelector} from 'redux-form'

import {init} from './billingActions'
import InputLabel from '../common/form/inputWithLabel'
import ItemsList from './itemsList'
import Summary from './summary'

/**
 * Aqui, antes de usar o decorator, pegamos as configurações
 * que queremos passar pro ReactForm e States
 */
const selector = formValueSelector('billingCycleForm')

/**
 * Usando o decoratorRedux() para encapsular o componente,
 * passamos somente os states e as actions a serem mapeadas.
 */
@reduxForm({
    states: state => ({
        credits: selector(state, 'credits'),
        debts: selector(state, 'debts')
    }),
    actions: {init},
    formOptions: {form: 'billingCycleForm', destroyOnUnmount: false}
})
export default class BillingForm extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    calculateSummary() {
        const sum = (acc, val) => acc + val
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum),
        }
    }

    render() {
        const {handleSubmit, readOnly, credits, debts} = this.props
        const {sumOfCredits, sumOfDebts} = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={InputLabel} readOnly={readOnly} label="Nome"
                           placeholder="Informe o nome" cols="12 4"/>
                    <Field name="month" component={InputLabel} readOnly={readOnly} label="Mês"
                           placeholder="Informe o mês" cols="12 4"/>
                    <Field name="year" component={InputLabel} readOnly={readOnly} label="Ano"
                           placeholder="Informe o ano" cols="12 4"/>

                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>

                    <ItemsList cols="2 6"
                               field="credits"
                               legend="Créditos"
                               readOnly={readOnly}
                               list={credits}/>

                    <ItemsList cols="2 6"
                               field="debts"
                               legend="Débitos"
                               readOnly={readOnly}
                               showStatus={true}
                               list={debts}/>
                </div>
                <div className="box-footer">
                    <button className={`btn btn-${this.props.submitClass}`}
                            type="submit">{this.props.submitLabel}</button>
                    &nbsp;
                    <button className="btn btn-default" type="button" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }

}