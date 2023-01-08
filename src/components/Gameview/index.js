import {Component} from 'react'

import NavBar from '../NavBar'

import TabsList from '../TabsList'

import ImagesList from '../ImagesList'

import './index.css'

class Gameview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      time: 60,
      game: true,
      matchImage: props.imagesList[0].id,
      categorySelected: props.imagesList[0].category,
      numbers: [0],
    }
  }

  componentDidMount() {
    this.timerId = setInterval(this.runTime, 1000)
  }

  runTime = () => {
    const {time} = this.state
    if (time !== 0) {
      this.setState(prevState => ({time: prevState.time - 1}))
    } else {
      clearTimeout(this.timerId)
      this.setState({game: false})
    }
  }

  checkMatchThumbnail = id => {
    const {matchImage, numbers} = this.state
    const {imagesList} = this.props
    if (matchImage === id) {
      let condition = true
      while (condition) {
        const num = Math.floor(Math.random() * imagesList.length)
        const {category} = imagesList[num]
        const newCategory = category
        const oldCategory = imagesList.filter(eachItem => eachItem.id === id)

        if (!numbers.includes(num) && oldCategory[0].category !== newCategory) {
          this.setState(prevState => ({numbers: [...prevState.numbers, num]}))
          this.setState({
            matchImage: imagesList[num].id,
          })
          condition = false
        }
      }
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      clearTimeout(this.timerId)
      this.setState({game: false})
    }
  }

  changeTabs = tabId => {
    this.setState({categorySelected: tabId})
  }

  playAgain = () => {
    const {imagesList} = this.props
    this.setState({
      time: 60,
      score: 0,
      game: true,
      matchImage: imagesList[0].id,
      categorySelected: imagesList[0].category,
      numbers: [0],
    })
    this.timerId = setInterval(this.runTime, 1000)
  }

  render() {
    const {score, time, game, matchImage, categorySelected} = this.state
    const {tabsList, imagesList} = this.props
    const itemType = categorySelected
    const selectedList = imagesList.filter(
      eachItem => itemType === eachItem.category,
    )
    const randomImage = imagesList.filter(
      eachItem => eachItem.id === matchImage,
    )
    return (
      <div className="main-container">
        <NavBar score={score} time={time} />
        {game ? (
          <div className="game-view-container">
            <div className="display-img-box">
              <img
                src={randomImage[0].imageUrl}
                alt="match"
                className="display-match-img"
              />
            </div>
            <ul className="tabs-box">
              {tabsList.map(eachItem => (
                <TabsList
                  key={eachItem.tabId}
                  tabsList={eachItem}
                  changeTabs={this.changeTabs}
                  categorySelected={categorySelected}
                />
              ))}
            </ul>
            <ul className="thumbnails-box">
              {selectedList.map(eachItem => (
                <ImagesList
                  key={eachItem.id}
                  imagesList={eachItem}
                  checkMatchThumbnail={this.checkMatchThumbnail}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="scoreCard">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
                className="trophy"
                alt="trophy"
              />
            </div>
            <p className="score-card-text">YOUR SCORE</p>
            <h1 className="score-number">{score}</h1>
            <button
              type="button"
              className="play-again"
              onClick={this.playAgain}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
                className="reset"
                alt="reset"
              />
              <p>PLAY AGAIN</p>
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Gameview
