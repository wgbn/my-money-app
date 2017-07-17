import React from 'react'

export default props => (
    <div className="movie-card">
        <div className="cover">
            <img src={props.cover}/>
        </div>
        <div className="dados">
            <strong>{props.title}</strong>
            <p>{props.description}</p>
        </div>
    </div>
)