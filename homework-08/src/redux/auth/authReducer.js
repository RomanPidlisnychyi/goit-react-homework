import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './authActions';

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
    [authActions.registerSuccess]: (_, action) => action.payload.user,
    [authActions.registerCleanError]: () => initialState,
    [authActions.loginSuccess]: (_, action) => action.payload.user,
    [authActions.getCurrentUserSuccess]: (_, action) => action.payload,
    [authActions.logoutSuccess]: () => initialState,
});

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, action) => action.payload.token,
    [authActions.loginSuccess]: (_, action) => action.payload.token,
    [authActions.logoutSuccess]: () => null,
});

const authLoading = createReducer(false, {
    [authActions.registerRequest]: () => true,
    [authActions.registerSuccess]: () => false,
    [authActions.registerError]: () => false,
    [authActions.loginRequest]: () => true,
    [authActions.loginSuccess]: () => false,
    [authActions.loginError]: () => false,
    [authActions.getCurrentUserRequest]: () => true,
    [authActions.getCurrentUserSuccess]: () => false,
    [authActions.getCurrentUserError]: () => false,
});

const authError = createReducer(null, {
    [authActions.registerError]: () => true,
    [authActions.registerCleanError]: () => null,
    [authActions.registerSuccess]: () => null,
    [authActions.loginError]: () => true,
    [authActions.loginSuccess]: () => null,
    [authActions.logoutError]: () => true,
    [authActions.logoutSuccess]: () => null,
    [authActions.getCurrentUserError]: () => true,
    [authActions.getCurrentUserSuccess]: () => null,
});

export default combineReducers({
    user,
    token,
    authError,
    authLoading,
});
