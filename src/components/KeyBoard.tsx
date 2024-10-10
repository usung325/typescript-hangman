import { KeyBoardProps } from '../App'


export default function KeyBoard({ keys, setKeys, setErrCount, setLettersGuessed, currWord }: KeyBoardProps) {

    const row1 = 'QWERTYUIOP'
    const row2 = 'ASDFGHJKL'
    const row3 = 'ZXCVBNM'


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const keyVal = e.currentTarget.value.toLowerCase()
        console.log(keyVal)
        if (!keys.includes(keyVal)) {
            setKeys([...keys, keyVal])
            if (currWord.includes(keyVal)) {
                setLettersGuessed(prev => [...prev, keyVal])
            }
            else {
                setErrCount(prev => prev + 1)
            }
        }
        console.log('pressed')
        console.log(keys)
    }

    return (
        <>

            <div className="flex flex-col gap-5 items-center">
                {[row1, row2, row3].map((row) => (
                    <div
                        key={row}
                        className="flex gap-5">
                        {Array.from(row).map((key) => (
                            <button
                                key={key}
                                onClick={(e) => handleClick(e)}
                                value={key}
                                className="flex justify-center text-center items-center w-5 h-5 border-black border">{key}</button>
                        ))}

                    </div>
                ))}
            </div>

        </>
    )
}