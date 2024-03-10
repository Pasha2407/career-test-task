import { useSelector } from 'react-redux';

import css from './Favorites.module.css';
import image from 'data/favorite.jpg';

import { selectFavorite } from '../../redux/favorite/favoriteSelectors';
import { CarList } from 'components/CarList/CarList';
import { getFilteredCars } from 'helpers/getFilteredCars';

export const Favorites = () => {
  const favorite = useSelector(selectFavorite);
  const filteredCars = getFilteredCars(favorite);

  return (
    <div className={css.Container}>
      {favorite.length === 0 ? (
        <div className={css.Image} style={{ backgroundImage: `url(${image})` }}>
          <h1>You don't have any favorite cars yet</h1>
        </div>
      ) : (
        <CarList data={filteredCars} />
      )}
    </div>
  );
};
