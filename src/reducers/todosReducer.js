function reducer(state, action) {

    switch (action.type) {
        case 'add':
            state.tasksArr.push({ isDone: false, taskName: action.newTask });
            break
        case 'edit':
            state.tasksArr[action.index].taskName = action.newTask;
            break
        case 'delete':
            state.tasksArr.splice(action.index, 1);
            break
        case 'check':
            state.tasksArr[action.index].isDone = !state.tasksArr[action.index].isDone
            break
        case 'archivePrint':
            state.isArchivePrint = !state.isArchivePrint
            break
        default:
            return state;
    }

    return { ...state, tasksArr: [...state.tasksArr] }
}


export { reducer }