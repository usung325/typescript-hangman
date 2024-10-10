type HangManProps = {
    errCount: number
}

export default function HangMan({ errCount }: HangManProps) {
    return (
        <>
            <p>{errCount}</p>
        </>
    )
}