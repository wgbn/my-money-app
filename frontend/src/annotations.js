import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm as FormRedux } from 'redux-form'

export function decorateRedux(config, target) {
    let mapStateToProps = null, mapDispatchToProps = null
    if (config.states) mapStateToProps = config.states
    if (config.actions) mapDispatchToProps = dispatch => bindActionCreators(config.actions, dispatch)
    return connect(mapStateToProps, mapDispatchToProps)(target)
}

export function redux(config) {
    return function decorator(target) {
        return decorateRedux(config, target)
    }
}

export function reduxForm(config) {
    return function decorator(target) {
        if (config.formOptions) target = FormRedux(config.formOptions)(target)
        return decorateRedux(config, target)
    }
}