import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete } from './billingActions'

class BillingCycleList extends React.Component {

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

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)