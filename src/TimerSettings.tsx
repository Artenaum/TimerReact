import { memo, useEffect, useState, type ChangeEvent } from "react"
import gearIcon from './assets/gear.png'

const TimerSettings = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [selection, setSelection] = useState('seconds')

	const toggleSettings = () => {
		setMenuOpen(!menuOpen)
	}

	useEffect(() => {
		window.localStorage.setItem('unit', selection)
		window.dispatchEvent(new Event('storage'))
	}, [selection])

	const unitChanged = (e: ChangeEvent<HTMLInputElement>) => {
		setSelection(e.target.value)
	}

	return (
		<>
			<button onClick={toggleSettings}>
				<img src={gearIcon} height="17" width="17"/>
			</button>

			{menuOpen && (
				<div style={{display: "flex", flexDirection: "column"}}>
					<div>
						<input
							id="radioSeconds"
							type="radio"
							name="displayUnit"
							value="seconds"
							checked={selection === 'seconds'}
							onChange={unitChanged}
						/>
						<label htmlFor="radioSeconds">Display in seconds</label>
					</div>

					<div>
						<input
							id="radioMilliseconds"
							type="radio"
							name="displayUnit"
							value="milliseconds"
							checked={selection === 'milliseconds'}
							onChange={unitChanged}
						/>
						<label htmlFor="radioMilliseconds">Display in milliseconds</label>
					</div>
				</div>
			)}
		</>
	)
}

export default memo(TimerSettings)