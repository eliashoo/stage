import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as todo_actions from '../actions/todos';
import {toggle_checklist} from '../actions/actions';
import Checklist from './Checklist'

let checks = 0;

const mapStateToProps = (state) => {''
  return {
    show:state.showChecklist,
    checks:state.todos,
  }
}

export default connect(mapStateToProps,{...todo_actions,toggle_checklist})(Checklist);