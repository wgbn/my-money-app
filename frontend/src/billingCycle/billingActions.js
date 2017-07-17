import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003'
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export function getList() {
    const request = axios.get(`${BASE_URL}/billingcycle`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function createBilling(values) {
    return submit(values, 'post')
}

export function updateBilling(values) {
    return submit(values, 'put')
}

export function removeBilling(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values.id || ''
        axios[method](`${BASE_URL}/billingcycle/${id}`, values)
            .then( resp => {
                toastr.success('Sucesso!', 'Operação realizada com sucesso.')
                dispatch(init())
            } )
            .catch( e => toastr.error('Erro!', 'Ocorreu um erro na operação.') )
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}