import Task from "./sub_models/Task";
import React from "react";
import { connect } from "react-redux";
import { add, archivePrint } from "../action creators/actionCreators";

function App(props) {

  return (
    <>
      <input id='toAdd' className='m-2 ms-5 form-control d-inline-block w-auto' />
      <button onClick={props.add} className='mx-1 btn btn-outline-danger'>Add</button>

      <button onClick={props.archivePrint} className='btn btn-outline-danger'>Archive</button>

      <ul>
        {props.tasksArr.sort((tsk0, tsk1) => tsk1.isDone - tsk0.isDone)
          .map(tsk =>
            <Task index={props.tasksArr.indexOf(tsk)} />)}
      </ul>
    </>
  );
}



function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch(add()),

    archivePrint: () => dispatch(archivePrint())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
