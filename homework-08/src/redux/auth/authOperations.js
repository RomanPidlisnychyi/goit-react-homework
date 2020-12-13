import authActions from './authActions';
import authSelectors from './authSelectors';

const baseURL = 'https://goit-phonebook-api.herokuapp.com';

const register = credentials => dispatch => {
    dispatch(authActions.registerRequest());

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    };

    fetch(`${baseURL}/users/signup`, options)
        .then(response => response.json())
        .then(data => dispatch(authActions.registerSuccess(data)))
        .catch(() => dispatch(authActions.registerError()));
};

const logIn = credentials => dispatch => {
    dispatch(authActions.loginRequest());

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    };

    fetch(`${baseURL}/users/login`, options)
        .then(response => response.json())
        .then(data => dispatch(authActions.loginSuccess(data)))
        .catch(() => dispatch(authActions.registerError()));
};

const logOut = () => (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();
    dispatch(authActions.logoutRequest());

    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${persistedToken}`,
            'Content-Type': 'application/json',
        },
    };
    fetch(`${baseURL}/users/logout`, options)
        .then(() => dispatch(authActions.logoutSuccess()))
        .catch(() => dispatch(authActions.registerError()));
};

const getCurrentUser = () => (dispatch, getState) => {
    const persistedToken = authSelectors.getToken(getState());
    if (!persistedToken) {
        return;
    }
    dispatch(authActions.getCurrentUserRequest());

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${persistedToken}`,
            'Content-Type': 'application/json',
        },
    };

    fetch(`${baseURL}/users/current`, options)
        .then(response => response.json())
        .then(data => dispatch(authActions.getCurrentUserSuccess(data)))
        .catch(error => dispatch(authActions.getCurrentUserError(error)));
};

export default { register, logIn, logOut, getCurrentUser };
