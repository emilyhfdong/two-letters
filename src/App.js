import React, { useState } from "react"
import { getRandomTwoLetterWord, isValidScrabbleWord } from "./utils"

const CORRECT_COLOUR = "rgba(143, 255, 148, 0.5)"
const INCORRECT_COLOR = "rgba(255, 143, 143, 0.5)"

const App = () => {
  const [word, setWord] = useState(getRandomTwoLetterWord())
  const [message, setMessage] = useState("")
  const [leftIsActive, setLeftIsActive] = useState(false)
  const [rightIsActive, setRightIsActive] = useState(false)

  const wordIsValid = isValidScrabbleWord(word)

  return (
    <div
      style={{
        height: "80vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(254, 247, 231)"
      }}
    >
      <p style={{ fontWeight: "lighter", position: "absolute", top: "20vh" }}>
        {message}
      </p>
      <h1 style={{ fontWeight: "lighter" }}>{word.toLowerCase()}</h1>
      <div
        onTouchStart={() => {
          setMessage("")
          setLeftIsActive(true)
        }}
        onTouchEnd={() => {
          if (!wordIsValid) {
            setMessage(`${word} is not a word!`)
          }
          setWord(getRandomTwoLetterWord())
          setLeftIsActive(false)
        }}
        style={{
          display: "flex",
          alignItems: "flex-end",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "50vw",
          backgroundColor: leftIsActive
            ? wordIsValid
              ? CORRECT_COLOUR
              : INCORRECT_COLOR
            : "transparent"
        }}
      ></div>
      <div
        onTouchStart={() => {
          setMessage("")
          setRightIsActive(true)
        }}
        onTouchEnd={() => {
          if (wordIsValid) {
            setMessage(`${word} is a word!`)
          }
          setWord(getRandomTwoLetterWord())
          setRightIsActive(false)
        }}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "50vw",
          backgroundColor: rightIsActive
            ? wordIsValid
              ? INCORRECT_COLOR
              : CORRECT_COLOUR
            : "transparent"
        }}
      ></div>
    </div>
  )
}

export default App
