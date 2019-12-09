//Counter for creating ids for todos
let todo_id = 2;
//Initial State with 2 Todos, one complete and one incomplete
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
            //Adds a new todo item in the state list
            return [...state, { id: todo_id++, text: action.payload.text, completed: false }]
        case 'TOGGLE_TODO':
            //Maps item and checks for id in the action payload, if matched, toggles the completed value
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
        case 'CLEAR_COMPLETE':
            //Filters all completed todos
            return state.filter((todo) => todo.completed !== true)
        default:
            //Default case, nothing changed previous state is returned.
            return state;
    }
}
