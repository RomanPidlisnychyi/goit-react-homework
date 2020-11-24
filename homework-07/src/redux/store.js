import { configureStore } from '@reduxjs/toolkit';
import phoneBookReduser from './phoneBook/phoneBookReducer';

const store = configureStore({
    reducer: phoneBookReduser,
});

export default store;
