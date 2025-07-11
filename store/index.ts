import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './teams.slice';

export const store = configureStore({
    reducer: {
        teams: teamsReducer,
        // другие редьюсеры
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;