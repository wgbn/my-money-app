import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingActions'
import InputLabel from '../common/form/inputWithLabel'
import ItemsList from './itemsList'
import Summary from './summary'

class BillingForm extends React.Component {

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
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={InputLabel} readOnly={readOnly} label="Nome" placeholder="Informe o nome" cols="12 4"/>
                    <Field name="month" component={InputLabel} readOnly={readOnly} label="Mês" placeholder="Informe o mês" cols="12 4"/>
                    <Field name="year" component={InputLabel} readOnly={readOnly} label="Ano" placeholder="Informe o ano" cols="12 4"/>

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
                    <button className={`btn btn-${this.props.submitClass}`} type="submit">{this.props.submitLabel}</button>&nbsp;
                    <button className="btn btn-default" type="button" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }

}

BillingForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts'),
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingForm)