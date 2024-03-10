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
              background: isActive ? '#3470FF' : 'none',
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            style={({ isActive }) => ({
              background: isActive ? '#3470FF' : 'none',
            })}
          >
            Catalog
          </NavLink>
          <NavLink
            to="/favorites"
            style={({ isActive }) => ({
              background: isActive ? '#3470FF' : 'none',
            })}
          >
            Favorites
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
