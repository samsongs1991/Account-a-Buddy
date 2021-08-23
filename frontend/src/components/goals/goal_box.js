import React from 'react';
import "./goal_index.css"
import { findGoalMatch } from "../../util/goal_api_util";

class GoalBox extends React.Component {

  // TEST CODE ===================================
  constructor(props) {
    super(props);
    this.findBuddy = this.findBuddy.bind(this);
    this.switchAvailableStatus = this.switchAvailableStatus.bind(this);
  }
  
  // #findBuddy will find an matching goal in the DB and ... 
  // create a chat room with an empty array as the conversation, 
  // update the local store to include that chat room what was just created
  findBuddy() {
    const { goal, createRoom } = this.props
    findGoalMatch(goal)
      .then(goals => {
        if(goals.data) {
          const randomEl = Math.floor(Math.random() * goals.data.length);
          this.setState({ match: goals.data[randomEl] })
          const match = goals.data[randomEl];
          this.switchAvailableStatus(goal);
          this.switchAvailableStatus(match);
          return match;
        } else {
          console.log("No available buddies. You will be notified as soon as a match is found.");
        }
      })
      .then(match => {
        const newRoom = {
          user1: goal, 
          user2: match, 
          goal1: goal, 
          goal2: match
        };
        createRoom(newRoom);
      })
  }

  switchAvailableStatus(goal) {
    const { updateGoal} = this.props
    let newGoal = Object.assign({}, goal);
    if(goal.available) {
      newGoal.available = false;
    } else {
      newGoal.available = true;
    }
    updateGoal(newGoal);    
  }
  // =============================================
  

  render() {
    const { category, title, description, author, _id, available } = this.props.goal
    const { goal } = this.props
    return (
        <div>
            <div className="goalbox-cont">
              <h3 className="goals-text1">{title}</h3>
              <div className="goals-text2">{description}</div>

              {/* TEST CODE =========================== */}
              <button onClick={() => this.switchAvailableStatus(goal)} >Available: {available ? "true" : "false"}</button>
              <button onClick={this.findBuddy} >Find a buddy</button>
              {/* ===================================== */}
            </div>
        </div>
    );
  }
}

export default GoalBox;