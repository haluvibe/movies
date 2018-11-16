import React from 'react'
import { Consumer } from '../../context'
import { ListGroup, ListGroupItem, Grid } from 'react-bootstrap'

const Results = () => (
    <Consumer>
        { context => (
            <Grid>
                <h2>
                    Movies
                </h2>
                <ListGroup>
                    {context.movies.map( (movie, index) =>
                        <ListGroupItem key={movie.id} href="#">{ movie.title }</ListGroupItem>
                    )}
                </ListGroup>
            </Grid>
        )}
    </Consumer> 
)

export default Results