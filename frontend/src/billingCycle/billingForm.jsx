import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingActions'
import InputLabel from '../common/form/inputWithLabel'

class BillingForm extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={InputLabel} readOnly={readOnly} label="Nome" placeholder="Informe o nome" cols="12 4"/>
                    <Field name="month" component={InputLabel} readOnly={readOnly} label="Mês" placeholder="Informe o mês" cols="12 4"/>
                    <Field name="year" component={InputLabel} readOnly={readOnly} label="Ano" placeholder="Informe o ano" cols="12 4"/>
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
//const mapStateToProps = state => ({ [state] })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(null, mapDispatchToProps)(BillingForm)