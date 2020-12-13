const getUserName = state => state.auth.user.name;
const getToken = state => state.auth.token;
const getError = state => state.auth.authError;
const getIsLoading = state => state.auth.authLoading;

export default { getUserName, getToken, getError, getIsLoading };
