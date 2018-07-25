import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const URL = 'http://localhost:3000/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.state = { description: '', list: [] }
        this.refresh()
    }
    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description }).then(resp => this.refresh())
        
    }
    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }
    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
        .then(res => {
            this.setState({...this.setState, description: '', list: res.data})
        })
    }
    handleRemove(entity) {
        axios.delete(`${URL}/${entity._id}`)
            .then(resp => this.refresh())
    }
    handleMarkAsDone(entity) {
        axios.put(`${URL}/${entity._id}`, { ...entity, done: true }).
            then(resp => this.refresh())
    }
    handleMarkAsPending(entity) {
        axios.put(`${URL}/${entity._id}`, { ...entity, done: false })
            .then(resp => this.refresh())
    }
    render() {
        return (
            <div>
                <PageHeader 
                name='Tarefas' 
                small='Cadastro' />

                <TodoForm 
                handleAdd={this.handleAdd} 
                description={this.state.description} 
                handleChange={this.handleChange} />

                <TodoList 
                list={this.state.list} 
                handleRemove={this.handleRemove} 
                handleMarkAsDone={this.handleMarkAsDone}
                handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}