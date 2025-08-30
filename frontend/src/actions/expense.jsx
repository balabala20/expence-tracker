import axios from 'axios';
import { GET_EXPENSES, EXPENSE_ERROR, ADD_EXPENSE, DELETE_EXPENSE, UPDATE_EXPENSE } from './types';
import { setAlert } from './alert';

export const getExpenses = () => async dispatch => {
    try {
        const res = await axios.get('/api/expense');
        dispatch({ type: GET_EXPENSES, payload: res.data });
    } catch (err) {
        dispatch({ type: EXPENSE_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};

export const addExpense = formData => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
        const res = await axios.post('/api/expense', formData, config);
        dispatch({ type: ADD_EXPENSE, payload: res.data });
        dispatch(setAlert('Expense Added', 'success'));
    } catch (err) {
        dispatch({ type: EXPENSE_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};

export const deleteExpense = id => async dispatch => {
    try {
        await axios.delete(`/api/expense/${id}`);
        dispatch({ type: DELETE_EXPENSE, payload: id });
        dispatch(setAlert('Expense Removed', 'success'));
    } catch (err) {
        dispatch({ type: EXPENSE_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};

export const updateExpense = (id, formData) => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
        const res = await axios.put(`/api/expense/${id}`, formData, config);
        dispatch({ type: UPDATE_EXPENSE, payload: res.data });
        dispatch(setAlert('Expense Updated', 'success'));
    } catch (err) {
        dispatch({ type: EXPENSE_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};
