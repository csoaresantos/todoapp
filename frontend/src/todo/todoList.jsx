import React from 'react'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(elem => 
            (
                <tr key={elem._id}>
                    <td className={elem.done ? 'markAsDone' : ''}>
                        {elem.description}
                    </td>
                    <td>
                        <IconButton style='sucess' icon='check' onClick={() => props.markAsDone(elem)} hide={elem.done} />
                        <IconButton style='warning' icon='undo' onClick={() => props.markAsPending(elem)} hide={!elem.done} />
                        <IconButton style='danger' icon='trash-o' onClick={() => props.remove(elem)} hide={!elem.done} />
                    </td>
                </tr>
            )
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => (
    { list: state.todo.list }
)
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)