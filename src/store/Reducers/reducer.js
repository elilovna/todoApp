export default function todoReducer(state = [], action) {
    console.log(state, action)
    switch (action.type) {
        case 'CREATE_TODO':
            return [...state, { ...action.todo }]
        default:
            return state
    }
}
