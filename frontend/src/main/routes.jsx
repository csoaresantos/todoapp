import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from '../about/about'
import Todo from '../todo/todo'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/about' component={About} />
            <Route path='/todos' component={Todo} />
            <Route path='*' component={Todo} />
        </Switch>
    </ BrowserRouter>
)
