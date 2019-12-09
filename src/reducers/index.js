let nextTodoId = 2;
const initialState = [
    {
        id: 0,
        text: 'Consider using Redux',
        completed: true
    },
    {
        id: 1,
        text: 'Keep all state in a single tree',
        completed: false
    }
]

export default function rootReducer(state = initialState, action) {
    console.log(action);

    switch (action.type) {

        case 'PUSH_TODO':
            return [...state, { id: nextTodoId++, text: action.payload.text, completed: false }]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
        case 'CLEAR_COMPLETE':
            return state.filter((todo) => todo.completed !== true)
        default:
            return state;
    }
    // console.log(action);
    // return state;
}

// export default function rootReducer() { }