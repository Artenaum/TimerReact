import { useEffect, useState } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TimerDisplay = (props: any) => {

	const [unit, setUnit] = useState('seconds')

	useEffect(() => {
		const checkSelectedUnit = () => {
			const selectedUnit = window.localStorage.getItem('unit')

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
		<div className="inline-component">
			{unit === 'seconds' && props.type === 'MainDisplay' && (
				props.seconds === 0 ? (
					<h3>0.00 seconds</h3>
				) : (
					<h3>{Math.floor(props.seconds / 100) + '.' + props.seconds % 100 + ' seconds'}</h3>
				)
			)}
			{unit === 'milliseconds' && props.type === 'MainDisplay' && (
				<h3>{props.seconds * 10} milliseconds</h3>
			)}

			{unit === 'seconds' && props.type === 'TableDisplay' && (
				<p>{Math.floor(props.seconds / 100) + '.' + props.seconds % 100 + ' seconds'}</p>
			)}
			{unit === 'milliseconds' && props.type === 'TableDisplay' && (
				<p>{props.seconds * 10} milliseconds</p>
			)}
		</div>
	)
}

export default TimerDisplay