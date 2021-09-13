import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'
import room from './room_reducer'
import goals from './goals_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    goals,
    ui,
    room
});

export default RootReducer;