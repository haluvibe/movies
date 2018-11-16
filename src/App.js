import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import SearchForm from './components/SearchForm/SearchForm'
import Results from './components/Results/Results'
import Config from './config'
import { Grid, Jumbotron, Button } from 'react-bootstrap'
import { Provider } from './context'
import axios from 'axios'


class App extends Component {

  state = {
    movies: [
    ]
  }

  handleSearchMovies = async (query) => {

    try {
      
      const res = await axios.get(Config.remote_url + 'search/movie?query='+ query + '&api_key=' + Config.api_key)

      this.setState( prevState => ({
        movies: res.data.results
      }))
      
    } catch(error) {
      // Log the error
    } 
  }

  render() {
    return (
        <Provider value={{
            movies: this.state.movies,
            searchMovies: this.handleSearchMovies
          }}>    

          <div>
            <Jumbotron>
              <Grid>
                <h1>Find your movies</h1>
                <p>
                  This is a search application.
                </p>
                <SearchForm />
              </Grid>
            </Jumbotron>
            <Results />
          </div>

        </Provider>   
    )
  }
}

export default App;
