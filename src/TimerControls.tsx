import { memo, useEffect } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TimerControls = (props: any) => {
	
		const {isRunning, setSeconds, setIsRunning} = props

		useEffect(() => {
			const interval = setInterval(() => {
				if (props.isRunning) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					setSeconds((currentSecond: any) => currentSecond + 1)
				}
			}, 10)
	
			return () => clearInterval(interval)
		}, [props.isRunning, props.setSeconds])
	
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
		<>
			<button disabled={isRunning} onClick={startTimer}>
				{isRunning && (
					<span>Resume</span>
				)}
				{!isRunning && (
					<span>Start</span>
				)}
			</button>
			<button onClick={pauseTimer}>Pause</button>
			<button disabled={isRunning} onClick={resetTimer}>Reset</button>
		</>
	)
}

export default memo(TimerControls)