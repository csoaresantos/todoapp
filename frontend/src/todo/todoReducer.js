const INITIAL_STATE = {
    description: 'Description default',
    list: [{
        _id: 1,
        description: 'descricao 1',
        done: false
    },
    {
        _id: 2,
        description: 'descricao 1',
        done: false
    },
    {
        _id: 3,
        description: 'descricao 3',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        default:
            return state
    }
}