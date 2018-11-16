import React, { Component } from 'react';
import Config from '../../config'
import { Consumer } from '../../context'


class SearchForm extends Component {

    state = {
        value: ''
    }

    onChange(e) {
        this.setState({
            value: e
        })
    }


    render() {
        return (
            <Consumer>
                { context => {

                    return (
                        <div className="form-inline">
                            <input type="search" onChange={(e) => this.onChange(e.target.value)} className="form-control" placeholder="movie title" ></input>
                            <button className="btn btn-default" onClick={() => context.searchMovies(this.state.value)}>search</button>
                        </div>
                    )
                }}
            </Consumer>
            
        )
    }
}

export default SearchForm