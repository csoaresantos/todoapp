import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandle = this.keyHandle.bind(this)
    }
    keyHandle(e){
        if(e.key === 'Enter') {
            e.shiftKey ? this.props.handleChange() : this.props.handleAdd()
        } else if(e.key === 'Escape') {
            this.props.handleClear()
        }
    }
    componentWillMount() {
        this.props.search()
    }
    render () {
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' 
                placeholder='Adicione uma tarefa'
                value={this.props.description} 
                onChange={this.props.changeDescription}
                onKeyUp={this.keyHandle} ></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={this.props.handleAdd} />
                <IconButton style='info' icon='search' onClick={this.props.handleSearch} />
                <IconButton style='default' icon='close' onClick={this.props.handleClear} />
            </Grid>
        </div>
    }
}
const mapStateToPops = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToPops, mapDispatchToProps)(TodoForm)