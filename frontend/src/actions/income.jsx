import axios from 'axios';
import { GET_INCOMES, INCOME_ERROR, ADD_INCOME, DELETE_INCOME, UPDATE_INCOME } from './types';
import { setAlert } from './alert';

export const getIncomes = () => async dispatch => {
    try {
        const res = await axios.get('/api/income');
        dispatch({ type: GET_INCOMES, payload: res.data });
    } catch (err) {
        dispatch({ type: INCOME_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};

export const addIncome = formData => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
        const res = await axios.post('/api/income', formData, config);
        dispatch({ type: ADD_INCOME, payload: res.data });
        dispatch(setAlert('Income Added', 'success'));
    } catch (err) {
        dispatch({ type: INCOME_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};

export const deleteIncome = id => async dispatch => {
    try {
        await axios.delete(`/api/income/${id}`);
        dispatch({ type: DELETE_INCOME, payload: id });
        dispatch(setAlert('Income Removed', 'success'));
    } catch (err) {
        dispatch({ type: INCOME_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};

export const updateIncome = (id, formData) => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
        const res = await axios.put(`/api/income/${id}`, formData, config);
        dispatch({ type: UPDATE_INCOME, payload: res.data });
        dispatch(setAlert('Income Updated', 'success'));
    } catch (err) {
        dispatch({ type: INCOME_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
};
