import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <header className={css.Header}>
        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              background: isActive ? '#3a4561' : '#495575',
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/cars"
            style={({ isActive }) => ({
              background: isActive ? '#3a4561' : '#495575',
            })}
          >
            Cars
          </NavLink>
          <NavLink
            to="/favorites"
            style={({ isActive }) => ({
              background: isActive ? '#3a4561' : '#495575',
            })}
          >
            Favorites
          </NavLink>
        </nav>
      </header>
      <main className={css.Main}>
        <Outlet />
      </main>
    </div>
  );
};
