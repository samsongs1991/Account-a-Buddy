import { RECEIVE_GOALS, RECEIVE_USER_GOALS, RECEIVE_GOAL, CLEAR_GOALS } from "../actions/goal_actions";

const goalsReducer = (state ={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    let goals;
    switch (action.type) {
        case RECEIVE_GOALS:
            goals = action.goals.data;
            goals.forEach(goal => newState[goal._id] = goal);
            return newState;
        case RECEIVE_USER_GOALS:
            goals = action.goals.data;
            goals.forEach(goal => newState[goal._id] = goal);
            return newState;
        case RECEIVE_GOAL:
            const goal = { ...action.goal.data };
            return { ...state, [goal._id]: goal };
        case CLEAR_GOALS:
            return {};
        default:
            return state;
    }
}

export default goalsReducer;