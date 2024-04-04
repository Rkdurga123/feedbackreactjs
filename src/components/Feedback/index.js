// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  setIsFeddbackSelected = () => {
    const {isEmojiClicked} = this.state
    this.setState(prevState => ({isEmojiClicked: false}))
  }

  renderEmojiContainer = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData

    return (
      <div className="container">
        <h1 className="description">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="card">
          {emojis.map(eachEmoji => (
            <li
              className="list-item-container"
              key={eachEmoji.id}
              onClick={this.setIsFeddbackSelected}
            >
              <img
                src={eachEmoji.imageUrl}
                alt={eachEmoji.name}
                className="image"
              />
              <p className="description">{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderSuccessfulContainer = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData

    return (
      <div className="Thankyou-container">
        <img src={loveEmojiUrl} className="image" alt="love emoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="description">
          We,ll use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          {isEmojiClicked
            ? this.renderEmojiContainer()
            : this.renderSuccessfulContainer()}
        </div>
      </div>
    )
  }
}
export default Feedback
