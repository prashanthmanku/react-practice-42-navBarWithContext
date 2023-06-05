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
        const heading = isDarkTheme ? 'heading-dark' : 'heading-light'
        return (
          <div className={bgContainer}>
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
              alt="about"
              className="home-img"
            />
            <h1 className={heading}>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default Home
