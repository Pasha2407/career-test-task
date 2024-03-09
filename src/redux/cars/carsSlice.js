import { createSlice } from '@reduxjs/toolkit';
import { getCars, getCarsForFilter } from './carsOperations';

const carsInitialState = {
	cars: [],
	carsForFilter: [],
	isLoading: false,
	error: null,
};

const handlePending = state => {
	state.isLoading = true
};

const getCarsFulfilled = (state, { payload }) => {
	state.isLoading = false
	state.error = null
	state.cars = [...state.cars, ...payload]
};

const getCarsForFilterFulfilled = (state, { payload }) => {
	state.isLoading = false
	state.error = null
	state.carsForFilter = [...state.carsForFilter, ...payload]
};

const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload
};

export const carsSlice = createSlice({
	name: 'cars',
	initialState: carsInitialState,
	reducers: {
		clearCarsData: state => {
			state.cars = []
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getCars.fulfilled, getCarsFulfilled)
			.addCase(getCarsForFilter.fulfilled, getCarsForFilterFulfilled)
			.addMatcher(action => action.type.endsWith('/pending'), handlePending)
			.addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
	},
});

export const { clearCarsData } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
