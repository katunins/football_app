import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../services/api.service';
import { PAGINATION_LIMIT } from './consts';
import { Team, TeamsResponse } from '../services/types/team';
import { RootState } from '../store';

export const fetchTeams = createAsyncThunk(
  'teams/fetchTeams',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const page = state.teams.page;
    const response = await apiService.get<TeamsResponse>('/teams', { params: { limit: PAGINATION_LIMIT, offset: page * PAGINATION_LIMIT } });
    if (response.data.count === PAGINATION_LIMIT) {
      thunkAPI.dispatch(teamsSlice.actions.incrementPage())
    }
    return response.data.teams;
  }
);

export const reFetchTeams = createAsyncThunk(
  'teams/fetchTeams',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(teamsSlice.actions.resetTeams());
    await thunkAPI.dispatch(fetchTeams());
  }
);

const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    items: [] as Team[],
    loading: false,
    error: null as string | null,
    page: 0,
  },
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    resetTeams(state) {
      state.items = [];
      state.page = 0;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки';
      })
  },
});

export default teamsSlice.reducer;