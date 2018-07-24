import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = { description: '', list: [] }
    }
    handleAdd() {
        console.log('Funcionou!!!')
    }
    handleChange(e) {
        const attrs = this.state;
        attrs.description = e.target.value
        this.setState(attrs)
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd} description={this.state.description} handleChange={this.handleChange} />
                <TodoList />
            </div>
        )
    }
}