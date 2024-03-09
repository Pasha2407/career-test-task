import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
	brand: '',
	price: '',
	mileageFrom: '',
	mileageTo: '',
	onFilter: false,
};

const filterSlice = createSlice({
	name: 'filter',
	initialState: filterInitialState,
	reducers: {
		setValueFilter(state, { payload }) {
			state.brand = payload.brand
			state.price = payload.price
			state.mileageFrom = payload.mileageFrom
			state.mileageTo = payload.mileageTo
			state.onFilter = payload.onFilter
		},
	},
});

export const { setValueFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
