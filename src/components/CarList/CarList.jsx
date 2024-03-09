import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../redux/favorite/favoriteSlice';
import { selectFavorite } from '../../redux/favorite/favoriteSelectors';
import css from './CarList.module.css';
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
                <i>delete favorite</i>
              ) : (
                <i>add favorite</i>
              )}
            </button>
          </section>
          <section className={css.Title}>
            <span>
              {item.make}
              {item.model}, {item.year}
            </span>
            <span>{item.rentalPrice}</span>
          </section>
          <section>
            <span>{item.city}</span>
            <span>{item.country}</span>
            <span>{item.rentalCompany}</span>
            <span>{item.type}</span>
            <span>{item.make}</span>
            <span>{item.id}</span>
            <span>{item.feature}</span>
          </section>
          <section className={css.ButtonMore}>
            <button>more</button>
          </section>
        </div>
      ))}
    </div>
  );
};
