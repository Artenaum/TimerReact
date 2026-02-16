import { useEffect, useState } from "react"

const Timer = () => {
	const [seconds, setSeconds] = useState(0)
	const [isRunning, setIsRunning] = useState(false)


	useEffect(() => {
		const interval = setInterval(() => {
			if (isRunning) {
				setSeconds(currentSecond => currentSecond + 1)
			}
		}, 10)

		return () => clearInterval(interval)
	}, [isRunning])

	const startTimer = () => {
		setIsRunning(true)
	}

	const pauseTimer = () => {
		setIsRunning(false)
	}

	const resetTimer = () => {
		setIsRunning(false)
		setSeconds(0)
	}

	return (
		<div>
			{seconds === 0 && (
				<h3>0.00 seconds</h3>
			)}
			{seconds !== 0 && (
				<h3>{Math.floor(seconds / 100) + '.' + seconds % 100 + ' seconds'}</h3>
			)}
			<button onClick={startTimer}>Start</button>
			<button onClick={pauseTimer}>Pause</button>
			<button onClick={resetTimer}>Reset</button>
		</div>
	)
}

export default Timer