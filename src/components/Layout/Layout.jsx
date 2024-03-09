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
              background: isActive ? 'darkblue' : 'blue',
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            style={({ isActive }) => ({
              background: isActive ? 'darkblue' : 'blue',
            })}
          >
            Catalog
          </NavLink>
          <NavLink
            to="/favorites"
            style={({ isActive }) => ({
              background: isActive ? 'darkblue' : 'blue',
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
