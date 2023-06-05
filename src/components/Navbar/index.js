import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickChangeTheme = () => {
        toggleTheme()
      }

      const navHeader = isDarkTheme
        ? 'nav-header nav-header-dark'
        : 'nav-header nav-header-light'
      const navWidthContainer = isDarkTheme
        ? 'nav-width-container nav-width-dark'
        : 'nav-width-container nav-width-light'
      const navLink = isDarkTheme
        ? 'nav-link nav-link-dark'
        : 'nav-link nav-link-light'
      return (
        <nav className={navHeader}>
          <div className={navWidthContainer}>
            <Link to="/">
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
                }
                alt="website logo"
                className="website-logo"
              />
            </Link>
            <ul className="nav-items-container">
              <li>
                <Link to="/" className={navLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={navLink}>
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="theme-button"
              data-testid="theme"
              onClick={onClickChangeTheme}
            >
              <img
                src={
                  !isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                }
                alt="theme"
                className="theme-img"
              />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
