import React from 'react'

export default props => (
    <input {...props.input}
           placeholder={props.placeholder}
           readOnly={props.readOnly}
           type={props.type}
           className="form-control"/>
)