import React from "react";
import { connect } from 'react-redux'
import { check, edit, remove } from "../../action creators/actionCreators";

function Task(props) {

    return (
        <li className={(!props.tasksArr[props.index].isDone || props.isArchivePrint) ? 'd-block mt-2' : 'd-none mt-2'}>

            <input type='checkbox'
                checked={props.tasksArr[props.index].isDone}
                onChange={() => props.check(props.index)} />

            <input id={props.index}
                disabled={true}
                value={props.tasksArr[props.index].taskName}
                onChange={() => props.edit(props.index)}
                className='mx-2 form-control d-inline w-auto' />

            <button onClick={() => {
                document.getElementById(props.index).disabled = !document.getElementById(props.index).disabled
            }}
                className='me-2 btn btn-outline-danger'>Edit</button>

            <button onClick={() => props.delete(props.index)}
                className='btn btn-outline-danger'>Delete</button>
        </li>
    )
}


function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        edit: (i) => dispatch(edit(i)),

        delete: (i) => dispatch(remove(i)),

        check: (i) => dispatch(check(i))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Task)