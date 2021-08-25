import React from "react";
import "./goal_form.css"
// import Milestone from "./milestone";

class GoalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            category: null, 
            milestoneArray: [],
            // TEST CODE =============================
            available: false
            // =======================================
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.addMilestone = this.addMilestone.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createGoal(this.state)
            .then(() => {
                this.props.history.push('/goals');
            })
    }

    renderErrors(e) {
        (this.props.errors.length > 0) ? (
            <div>this.props.errors</div>
        ) : (<div></div>)
    }

    addMilestone() {
        let newArray = this.state.milestoneArray;
        newArray.push("test")
        this.setState({milestoneArray: newArray})
    }

    render() {
        return(
            <div className="goal-form">
                {/* <div className="clear-fix">clearfix</div> */}
                <form className="goal-form-box" onSubmit={this.handleSubmit}>
                    <h1 className="goal-form-title">Create a Goal</h1>
                    <label className="goal-type">What kind of habit are you trying to work on?</label>
                        <br />
                        <div>
                            <input 
                                type="radio" 
                                name="goal-type"
                                className="goal-form-radio" 
                                value="breaking-habit"
                                onChange={this.update('category')}
                            />
                            <label for="goal-type-1" className="goal-form-radio-label">Breaking a Habit</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="goal-type"
                                className="goal-form-radio" 
                                value="making-habit" 
                                onChange={this.update('category')}
                            />
                        <label for="goal-type-1" className="goal-form-radio-label">Making a Habit</label>
                        </div>
                    <br />
                    <div>
                        {/* <label>Title</label> */}
                        {/* <br /> */}
                        <input 
                            type="text"
                            placeholder="Title"
                            value={this.state.title}
                            className="goal-form-text-input"
                            onChange={this.update('title')}
                        />
                    </div>
                    <div>
                        {/* <label>Description</label> */}
                        {/* <br /> */}
                        <textarea 
                            placeholder="Description"
                            value={this.state.description}
                            className="goal-form-text-input"
                            onChange={this.update('description')}
                        />
                    </div>

                    {/* <Milestone props={this.props} /> */}
                    {this.state.milestoneArray.map(milestone => {
                        return (
                        <input 
                            placeholder="Milestone"
                            // onChange={this.update('milestone')}
                        />
                        )
                    }
                    )} 

                    <button onClick={this.addMilestone}>Add Milestone</button>

                    <br />
                    <div className="goal-form-submit-div">
                        <input className="goal-form-submit" type="submit" value="Submit"/>
                    </div>
                </form>
                <div className="clear-fix2"></div>
            </div>
        )
    }
}

export default GoalForm;