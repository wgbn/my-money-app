import React from 'react'
import If from '../operator/if'

export default props => (
    <If test={!props.hide}>
        <div className="form-group has-feedback">
            <input type={props.type}
                   placeholder={props.placeholder}
                   readOnly={props.readOnly}
                   className="form-control" {...props.input}/>
            <span className={`glyphicon glyphicon-${props.icon} form-control-feedback`}></span>
        </div>
    </If>
)