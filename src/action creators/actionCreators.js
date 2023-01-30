import { ADD, ARCHIVE_PRINT, CHECK, DELETE, EDIT } from "../actions/actions"

export function add() {
    return{
        type: ADD,
        newTask: document.getElementById('toAdd').value
    }
}

export function edit(i){
    return{
        type: EDIT,
        index: i,
        newTask: document.getElementById(i).value
    }
}

export function remove(i){
    return{
        type: DELETE,
        index: i
    }
}

export function check(i){
    return{
        type: CHECK,
        index: i
    }
}

export function archivePrint(){
    return{
        type: ARCHIVE_PRINT
    }
}