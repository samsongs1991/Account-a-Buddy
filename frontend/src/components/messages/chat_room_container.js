import { connect } from 'react-redux'
import ChatRoom from './chat_room'
import { addMsgToConvo, fetchRoom, clearRoom, receiveMessage } from '../../actions/room_actions'
import { fetchUserGoals, clearGoals } from '../../actions/goal_actions'

const mSTP = (state) => {
    return({
        user: state.session.user,
        goals: state.goals,
        room: state.room
    })
}

const mDTP = dispatch => {
    return (
        {
            fetchUserGoals: userId => dispatch(fetchUserGoals(userId)),
            clearGoals: () => dispatch(clearGoals()),
            addMsgToConvo: (room, message) => dispatch(addMsgToConvo(room, message)), 
            fetchRoom: goalId => dispatch(fetchRoom(goalId)), 
            clearRoom: () => dispatch(clearRoom()), 
            receiveMessage: message => dispatch(receiveMessage(message))
        }
    );
}

export default connect(mSTP,mDTP)(ChatRoom)