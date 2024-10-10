import { useEffect } from 'react'
type GuessTextProps = {
    currWord: string,
    lettersGuessed: string[],
    setIsWon: React.Dispatch<React.SetStateAction<boolean>>
}

export default function GuessText({ currWord, lettersGuessed, setIsWon }: GuessTextProps) {

    useEffect(() => {
        console.log('word is:', currWord)
        console.log('curr guesses:', lettersGuessed)

        const callback = (arr1: string[], arr2: string[]) => {
            return arr1.every((letter: string) => arr2.includes(letter))
        }
        const winCon = callback(Array.from(currWord), lettersGuessed)

        if (winCon && lettersGuessed.length !== 0) {
            setIsWon(true)
        }

    }, [lettersGuessed])

    return (
        <>
            <div className="flex gap-2 mx-auto">
                {Array.from(currWord).map((ltr, i) => {
                    if (lettersGuessed) {
                        if (lettersGuessed.includes(ltr)) {
                            return <div key={i} className="w-5 border-0 border-b-2 border-black" >{ltr}</div>
                        }
                        return <div key={i} className="w-5 border-0 border-b-2 border-black" />
                    }
                })}
            </div>
        </>
    )
}