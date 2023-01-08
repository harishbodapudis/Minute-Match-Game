import './index.css'

const NavBar = props => {
  const {score, time} = props

  return (
    <ul className="nav-bar">
      <li className="logo-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </li>
      <li className="timer-score-container">
        <div className="score-box">
          <p className="score-text">Score: </p>
          <p className="current-score"> {score}</p>
        </div>
        <div className="timer-box">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="timer-seconds">{time} sec</p>
        </div>
      </li>
    </ul>
  )
}

export default NavBar
