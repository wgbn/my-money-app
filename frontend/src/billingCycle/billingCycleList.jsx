import React from 'react'
import {redux} from "../annotations"

import { getList, showUpdate, showDelete } from './billingActions'

@redux({
    states: state => ({ list: state.billingCycle.list }),
    actions: { getList, showUpdate, showDelete }
})
export default class BillingCycleList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []

        if (list.length){
            return list.map( bc => (
                <tr key={bc.id}>
                    <td>{bc.name}</td>
                    <td>{bc.month}</td>
                    <td>{bc.year}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.props.showUpdate(bc)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger" onClick={() => this.props.showDelete(bc)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            ))
        } else {
            return '';
        }
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th className="table-actions">Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.renderRows() }
                    </tbody>
                </table>
            </div>
        )
    }

}