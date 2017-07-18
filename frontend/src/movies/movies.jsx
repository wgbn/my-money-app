import React from 'react'
import {redux} from "../annotations"

import { getMovies } from './moviesActions'
import MovieItem from './movieItem'
import Row from '../common/layout/row'

@redux({
    states: state => ({ movies: state.netflix.movies }),
    actions: { getMovies }
})
export default class Movies extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getMovies()
    }

    render() {
        const { items } = this.props.movies

        if (items){
            return (
                <Row>
                    <div className="movie-list">
                        { items.map(m => (<MovieItem key={m.created} cover={m.enclosures[0].url} title={m.title} votes="0"/>) ) }
                    </div>
                </Row>
            )
        } else {
            return (<em>loading...</em>)
        }

    }

}