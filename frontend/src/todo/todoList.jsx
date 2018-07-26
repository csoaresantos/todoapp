import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(elem => 
            (
                <tr key={elem._id}>
                    <td className={elem.done ? 'markAsDone' : ''}>
                        {elem.description}
                    </td>
                    <td>
                        <IconButton style='sucess' icon='check' onClick={() => props.handleMarkAsDone(elem)} hide={elem.done} />
                        <IconButton style='warning' icon='undo' onClick={() => props.handleMarkAsPending(elem)} hide={!elem.done} />
                        <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(elem)} hide={!elem.done} />
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