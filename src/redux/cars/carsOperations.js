import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65e9e8e4c9bf92ae3d3a983d.mockapi.io';

export const getCars = createAsyncThunk(
	'cars/getCars',
	async (page, { thunkApi }) => {
		try {
			const { data } = await axios.get(`/cars?page=${page}&limit=12`)
			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error.message)
		}
	}
);

export const getCarsForFilter = createAsyncThunk(
	'cars/getCarsForFilter',
	async (_, { thunkApi }) => {
		try {
			const { data } = await axios.get(`/cars?page=1&limit=12`)
			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error.message)
		}
	}
);
