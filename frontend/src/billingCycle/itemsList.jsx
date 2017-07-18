import React from 'react'
import {decorateRedux} from "../annotations"
import { arrayInsert, arrayRemove } from 'redux-form'

import Grid from '../common/layout/grid'
import Edit from '../common/form/input'
import If from '../common/operator/if'
import { Field } from 'redux-form'

export default decorateRedux({
    actions: { arrayInsert, arrayRemove }
}, class ItemsList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map( (item, index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].name`}
                           readOnly={this.props.readOnly}
                           placeholder="Informe o nome"
                           component={Edit}/></td>
                <td><Field name={`${this.props.field}[${index}].value`}
                           readOnly={this.props.readOnly}
                           placeholder="Informe o valor"
                           component={Edit}/></td>
                <If test={this.props.showStatus}>
                    <td><Field name={`${this.props.field}[${index}].status`}
                               readOnly={this.props.readOnly}
                               placeholder="Informe o status"
                               component={Edit}/></td>
                </If>
                <td>
                    <If test={(list.length == (index+1))}>
                        <button type="button" className="btn btn-success" onClick={() => this.add(index + 1)}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </If>
                    <button type="button" className="btn btn-warning" onClick={() => this.add(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => this.remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ) )
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                </fieldset>

                <table className="table">
                    <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Valor</td>
                        <If test={this.props.showStatus}><td>Status</td></If>
                        <td className="table-actions">Ações</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRows()}
                    </tbody>
                </table>
            </Grid>
        )
    }

})
