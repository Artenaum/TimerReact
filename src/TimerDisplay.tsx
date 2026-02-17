import { useEffect, useState } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TimerDisplay = (props: any) => {

	const [unit, setUnit] = useState('seconds')

	useEffect(() => {
		const checkSelectedUnit = () => {
			const selectedUnit = window.localStorage.getItem('unit')

			console.log(selectedUnit)
			console.log('hello')

			if (selectedUnit) {
				setUnit(selectedUnit)
			}
		}

		window.addEventListener('storage', checkSelectedUnit)

		return () => {
			window.removeEventListener('storage', checkSelectedUnit)
		}
	}, [])

	return (
		<div>
			{unit === 'seconds' && (
				props.seconds === 0 ? (
					<h3>0.00 seconds</h3>
				) : (
					<h3>{Math.floor(props.seconds / 100) + '.' + props.seconds % 100 + ' seconds'}</h3>
				)
			)}
			{unit === 'milliseconds' && (
				<h3>{props.seconds * 10} milliseconds</h3>
			)}
		</div>
	)
}

export default TimerDisplay