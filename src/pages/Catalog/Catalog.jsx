import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Catalog.module.css';

import { getCars, getCarsForFilter } from '../../redux/cars/carsOperations';
import { clearCarsData } from '../../redux/cars/carsSlice';

import {
  selectCars,
  selectCarsForFilter,
  selectIsLoading,
  selectError,
} from '../../redux/cars/carsSelectors';

import {
  selectBrand,
  selectPrice,
  selectMileageFrom,
  selectMileageTo,
  selectOnFilter,
} from '../../redux/filter/filterSelectors';

import { Filter } from 'components/Filter/Filter';
import { CarList } from 'components/CarList/CarList';
import { getFilteredCars } from 'helpers/getFilteredCars';

export const Catalog = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);

  const cars = useSelector(selectCars);
  const carsForFilter = useSelector(selectCarsForFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const onFilter = useSelector(selectOnFilter);
  const brandFilter = useSelector(selectBrand);
  const priceFilter = useSelector(selectPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  useEffect(() => {
    dispatch(clearCarsData());
    setShowButton(false);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCars(page));
    setShowButton(true);
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(getCarsForFilter());
  }, [dispatch]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const filteredCars = getFilteredCars(
    carsForFilter,
    brandFilter,
    priceFilter,
    mileageFrom,
    mileageTo
  );

  const showButtonMore = cars.length / 12 >= page && !isLoading && showButton;

  return (
    <div className={css.Container}>
      {isLoading && !error && <i>Loading...</i>}
      <Filter />
      {onFilter ? (
        <section>
          <CarList data={filteredCars} />
        </section>
      ) : (
        <section>
          <CarList data={cars} />
          {showButtonMore && <button onClick={nextPage}>Load more</button>}
        </section>
      )}
    </div>
  );
};
