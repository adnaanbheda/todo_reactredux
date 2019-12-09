export const PUSH_TODO = "PUSH_TODO"

export const TOGGLE_TODO = "TOGGLE_TODO"

export const CLEAR_COMPLETE = "CLEAR_COMPLETE"
export const addTodo = (text) => {
    return {
        type: PUSH_TODO,
        payload: {
            text
        }
    }
};

export const toggleToDo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}
export const clearComplete = () => {
    return {
        type: CLEAR_COMPLETE,
    }
}