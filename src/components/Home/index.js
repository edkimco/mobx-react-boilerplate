import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button } from 'react-bootstrap'

export default class HomeComponent extends Component {
  render() {
    return (
      <Grid>
        <h1>react-mobx-boilerplate</h1>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </Grid>
    )
  }
}
