import React, { useEffect, useState } from "react"
import { getRandomTwoLetterWord, isValidScrabbleWord } from "./utils"
import "./App.css"
import Confetti from "react-confetti"

const TOTAL_POINTS = 10

const App = () => {
  const [word, setWord] = useState(getRandomTwoLetterWord())
  const [incorrectAnswer, setIncorrectAnswer] = useState(false)
  const [points, setPoints] = useState(0)
  const [winOpacity, setWinOpacity] = useState(0)

  const wordIsValid = isValidScrabbleWord(word)

  useEffect(() => {
    if (incorrectAnswer) {
      setTimeout(() => setIncorrectAnswer(false), 500)
    }
  }, [incorrectAnswer])

  const onClick = (isCorrect) => {
    if (isCorrect) {
      const nextPoints = points + 1
      setPoints(nextPoints)
      setWord(getRandomTwoLetterWord())
      if (nextPoints === TOTAL_POINTS) {
        setTimeout(() => setWinOpacity(1), 500)
      }
    } else {
      setPoints(0)
      setIncorrectAnswer(true)
    }
  }

  const reset = () => {
    setWinOpacity(0)
    setTimeout(() => setPoints(0), 500)
  }

  return (
    <div className="container">
      {points === TOTAL_POINTS && (
        <div
          onClick={reset}
          style={{ opacity: winOpacity }}
          className="win-container"
        >
          <Confetti />
          <h1 className="win-title">
            {TOTAL_POINTS}/{TOTAL_POINTS}
          </h1>
        </div>
      )}
      <div className="progress-bar">
        <div
          style={{ width: `${Math.floor((points / TOTAL_POINTS) * 100)}%` }}
          className="filled-progress"
        />
      </div>
      <h1
        className={`two-letters ${incorrectAnswer ? "incorrect-answer" : ""}`}
      >
        {word.toUpperCase()}
      </h1>
      <div className="buttons-container">
        <button
          className={wordIsValid ? "correct-answer" : "incorrect-answer"}
          onClick={() => onClick(wordIsValid)}
        >
          <p>YES</p>
        </button>
        <button
          className={!wordIsValid ? "correct-answer" : "incorrect-answer"}
          onClick={() => onClick(!wordIsValid)}
        >
          <p>NO</p>
        </button>
      </div>
    </div>
  )
}

export default App
