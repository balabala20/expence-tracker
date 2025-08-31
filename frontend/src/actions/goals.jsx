import axios from 'axios';
import { GET_GOALS, ADD_GOAL, DELETE_GOAL, UPDATE_GOAL_DETAILS, UPDATE_GOAL_PROGRESS, GOAL_ERROR } from './types';
import { setAlert } from './alert';


const API_URL = 'https://expence-tracker-backend-w1v0.onrender.com' || 'http://localhost:5000';
// Get all goals for a user
export const getGoals = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/api/goals`);
    dispatch({ type: GET_GOALS, payload: res.data });
  } catch (err) {
    dispatch({ type: GOAL_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
  }
};

// Add a new goal
export const addGoal = (formData) => async (dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const res = await axios.post(`${API_URL}/api/goals`, formData, config);
    dispatch({ type: ADD_GOAL, payload: res.data });
    dispatch(setAlert('Goal Added', 'success'));
  } catch (err) {
    dispatch({ type: GOAL_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
  }
};

// Delete a goal
export const deleteGoal = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/api/goals/${id}`);
    dispatch({ type: DELETE_GOAL, payload: id });
    dispatch(setAlert('Goal Removed', 'success'));
  } catch (err) {
    dispatch({ type: GOAL_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
  }
};

// Update a goal's details (name, target amount, date)
export const updateGoalDetails = (id, formData) => async (dispatch) => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
        const res = await axios.put(`${API_URL}/api/goals/${id}`, formData, config);
        dispatch({ type: UPDATE_GOAL_DETAILS, payload: res.data });
        dispatch(setAlert('Goal Updated', 'success'));
    } catch (err) {
        dispatch({ type: GOAL_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};

// Update a goal's progress (add savings)
export const updateGoalProgress = (id, currentAmount) => async (dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const res = await axios.put(`${API_URL}/api/goals/${id}`, { currentAmount }, config);
    dispatch({ type: UPDATE_GOAL_PROGRESS, payload: res.data });
    dispatch(setAlert('Goal Progress Updated', 'success'));
  } catch (err) {
    dispatch({ type: GOAL_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
  }
};