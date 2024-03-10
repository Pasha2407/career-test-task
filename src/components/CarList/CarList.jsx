import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../redux/favorite/favoriteSlice';
import { selectFavorite } from '../../redux/favorite/favoriteSelectors';

import css from './CarList.module.css';
import { IconContext } from 'react-icons';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';

export const CarList = ({ data }) => {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);
  const handleFavorite = item => {
    if (!favorite.some(car => car.id === item.id)) {
      dispatch(addToFavorite(item));
    } else {
      dispatch(removeFromFavorite(item));
    }
  };

  return (
    <div className={css.Container}>
      {data.map((item, index) => (
        <div key={`${item.id}-${index}`}>
          <section
            className={css.Image}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <button
              type="button"
              onClick={() => handleFavorite(item)}
              aria-label="Add to Favorites"
            >
              {favorite.some(car => car.id === item.id) ? (
                <IconContext.Provider value={{ color: '#3470FF', size: 22 }}>
                  <MdFavorite />
                </IconContext.Provider>
              ) : (
                <IconContext.Provider
                  value={{ color: 'rgba(255, 255, 255, 0.8)', size: 22 }}
                >
                  <MdFavoriteBorder />
                </IconContext.Provider>
              )}
            </button>
          </section>
          <section className={css.Title}>
            <p>
              {item.make}
              <span style={{ color: '#3470FF' }}> {item.model}</span>,{' '}
              {item.year}
            </p>
            <p>{item.rentalPrice}</p>
          </section>
          <section className={css.Description}>
            <p>
              {item.address.split(',')[1].trim()} |{' '}
              {item.address.split(',')[2].trim()} | {item.rentalCompany}
            </p>
            <p>
              {item.type} | {item.make} | {item.id} | {item.accessories[2]}
            </p>
          </section>
          <section className={css.ButtonMore}>
            <button>Learn more</button>
          </section>
        </div>
      ))}
    </div>
  );
};
