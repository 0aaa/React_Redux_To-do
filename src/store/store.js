import { createStore } from 'redux'
import { TASKS_ARR } from '../lib/TASKS'
import { reducer } from '../reducers/todosReducer'

const initState = {
    isArchivePrint: false,
    tasksArr: TASKS_ARR
}


const store = createStore(reducer, initState)


export default store