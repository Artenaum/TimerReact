import { useEffect, useState } from "react"
import type { TimeRecord } from "./types/Timer.types"
import TimerDisplay from "./TimerDisplay"
import styles from './styles/Timer.module.css'

const TimerList = () => {
	const [times, setTimes] = useState<TimeRecord[]>([])

	useEffect(() => {
		const retreiveTimes = () => {
			const retreivedTimes = window.localStorage.getItem('savedTimes')
			if (retreivedTimes) {
				setTimes(JSON.parse(retreivedTimes))
			}
		}

		retreiveTimes()

		console.log(styles)

		window.addEventListener('storage', retreiveTimes)

		return () => {
			window.removeEventListener('storage', retreiveTimes)
		}
	}, [])

	return (
		<div style={{display: 'flex', flexDirection: 'column', background: '#151515', borderRadius: '10px'}}>
			{times.length === 0 && (
				<div>No records</div>
			)}
			{times.length !== 0 && (
				times.map(time => 
					<div key={time.id} className={styles.timerListItem}>
						{time.id}. <TimerDisplay type={'TableDisplay'} seconds={time.time}/>
					</div>
				)
			)}
		</div>
	)
}

export default TimerList