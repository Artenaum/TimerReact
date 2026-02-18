import { useEffect, useState } from "react"
import type { TimeRecord } from "./types/Timer.types"
import TimerListItem from "./TimerListItem"

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
					<TimerListItem key={time.id} recordId={time.id} recordTime={time.time}/>
				)
			)}
		</div>
	)
}

export default TimerList