import axios from 'axios';

export const fetchGoals = () => (
  axios.get(`/api/goals/`)
);

// export const fetchUserGoal = userId => (
//     axios.get(`/api/goals/users/${userId}`)
// );

export const fetchGoal = goalId => (
  axios.get(`/api/goals/${goalId}`)
);

export const createGoal = newGoal => (
  axios.post(`/api/goals/`, newGoal)
);

export const updateGoal = goal => (
  axios.patch(`/api/goals/${goal._id}`, goal)
);

export const deleteGoal = goalId => (
  axios.delete(`/api/goals/${goalId}`)
);