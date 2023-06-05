import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgContainer = isDarkTheme
          ? 'bg bg-dark-background'
          : 'bg bg-light-background'
        const heading = isDarkTheme ? 'n-f-heading-dark' : 'n-f-heading-light'
        const nfDescription = isDarkTheme
          ? 'dark-description'
          : 'light-description'
        return (
          <div className={bgContainer}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
              className="not-found-img"
            />
            <h1 className={heading}>Lost Your Way</h1>
            <p className={nfDescription}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default Home
