import { memo, useEffect } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TimerControls = (props: any) => {
	
		const {isRunning, seconds, setSeconds, setIsRunning} = props

		useEffect(() => {
			const interval = setInterval(() => {
				if (props.isRunning) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					setSeconds((currentSecond: any) => currentSecond + 1)
				}
			}, 10)
	
			return () => clearInterval(interval)
		}, [props.isRunning, setSeconds])
	
		const startTimer = () => {
			setIsRunning(true)
		}
	
		const pauseTimer = () => {
			setIsRunning(false)
		}
	
		const resetTimer = () => {
			setIsRunning(false)
			setSeconds(0)
			saveData(seconds)
		}

		const saveData = (time: number) => {
			const storedData = window.localStorage.getItem('savedTimes')

			if (storedData) {
				const parsedStoredData = JSON.parse(storedData)
				
				const lastId = parsedStoredData[parsedStoredData.length - 1].id

				const dataToSave = [...parsedStoredData, {
					id: lastId + 1,
					time
				}]

				window.localStorage.setItem('savedTimes', JSON.stringify(dataToSave))
				window.dispatchEvent(new Event('storage'))
			} else {
				const dataToSave = [
					{
						id: 1,
						time
					}
				]

				window.localStorage.setItem('savedTimes', JSON.stringify(dataToSave))
				window.dispatchEvent(new Event('storage'))
			}
		}

	return (
		<>
			<button disabled={isRunning} onClick={startTimer}>
				{!isRunning && seconds !== 0 && (
					<span>Resume</span>
				)}
				{(isRunning || seconds === 0) && (
					<span>Start</span>
				)}
			</button>
			<button disabled={!isRunning} onClick={pauseTimer}>Pause</button>
			<button disabled={isRunning || seconds === 0} onClick={resetTimer}>Reset</button>
		</>
	)
}

export default memo(TimerControls)