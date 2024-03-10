import css from './Home.module.css';
import image from 'data/home.jpg';

export const Home = () => {
  return (
    <div className={css.Container}>
      <div className={css.Image} style={{ backgroundImage: `url(${image})` }}>
        <div>
          <h1>
            Welcome to Fast Rent, choose a car from the catalog and make your
            dream come true
          </h1>
        </div>
      </div>
    </div>
  );
};
