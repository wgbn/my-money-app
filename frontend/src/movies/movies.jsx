import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getMovies } from './moviesActions'
import MovieItem from './movieItem'
import If from '../common/operator/if'
import Row from '../common/layout/row'

class Movies extends React.Component {

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

const mapStateToProps = state => ({ movies: state.netflix.movies })
const mapDispatchToProps = dispatch => bindActionCreators({ getMovies }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Movies)