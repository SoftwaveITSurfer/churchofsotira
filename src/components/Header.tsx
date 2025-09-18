import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">Sotira Church</div>
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}>
            Home
          </NavLink>
          <NavLink to="/news" className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}>
            News
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
