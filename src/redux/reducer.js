import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { carsReducer } from './cars/carsSlice';
import { filterReducer } from './filter/filterSlice';
import { favoriteReducer } from './favorite/favoriteSlice';

const filterPersistConfig = {
	key: 'filter',
	storage,
};

const favoritePersistConfig = {
	key: 'favorite',
	storage,
};

export const reducer = {
	cars: carsReducer,
	favorite: persistReducer(favoritePersistConfig, favoriteReducer),
	filter: persistReducer(filterPersistConfig, filterReducer),
};
