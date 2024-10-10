import './App.css'
import wordData from './components/words.json'
import { useState, useEffect } from 'react'
import HangMan from './components/HangMan'
import GuessText from './components/GuessText'
import KeyBoard from './components/KeyBoard'
import Win from './components/Win'
import Lose from './components/Lose'

export type KeyBoardProps = {
  keys: string[],
  setKeys: React.Dispatch<React.SetStateAction<string[]>>,
  setErrCount: React.Dispatch<React.SetStateAction<number>>,
  setLettersGuessed: React.Dispatch<React.SetStateAction<string[]>>,
  currWord: string
}

function App() {
  const [errCount, setErrCount] = useState<number>(0)
  const [currWord, setCurrWord] = useState<string>('')
  const [lettersGuessed, setLettersGuessed] = useState<string[]>([])
  const [keys, setKeys] = useState<string[]>([])
  const [isWon, setIsWon] = useState<boolean>(false)

  const props: KeyBoardProps = {
    keys,
    setKeys,
    setErrCount,
    setLettersGuessed,
    currWord
  }

  const { words } = wordData

  useEffect(() => {
    setCurrWord(words[Math.floor(Math.random() * words.length)])
  }, [])

  return (

    <>
      {isWon ? (
        <div className="wrapper flex w-full h-screen items-center justify-center text-center bg-blue-100">
          <Win />
        </div>
      ) : errCount == 5 ? (
        <div className="wrapper flex w-full h-screen items-center justify-center text-center bg-blue-100">
          <Lose />
        </div >
      ) : (
        <div className="wrapper flex w-full h-screen items-center justify-center text-center bg-blue-100">
          <div className="flex flex-col gap-y-5">
            <HangMan errCount={errCount} />
            <GuessText currWord={currWord} lettersGuessed={lettersGuessed} setIsWon={setIsWon} />
            <KeyBoard {...props} />
          </div>
        </div>

      )
      }


    </>
  )
}

export default App
