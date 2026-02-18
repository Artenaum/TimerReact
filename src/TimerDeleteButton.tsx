import type { TimeRecord } from "./types/Timer.types"

interface TimerDeleteButtonProps {
	timeRecordId: number
}

const TimerDeleteButton = (props: TimerDeleteButtonProps) => {
	const deleteRecord = () => {
		const records = window.localStorage.getItem('savedTimes')
		console.log(records)
		if (records) {
			const parsedRecords = JSON.parse(records)
			const newRecords = parsedRecords.filter((record: TimeRecord) => record.id !== props.timeRecordId)
			window.localStorage.setItem('savedTimes', JSON.stringify(newRecords))
			window.dispatchEvent(new Event('storage'))
		}
	}

	return (
		<button onClick={deleteRecord} className="inline-component">X</button>
	)
}

export default TimerDeleteButton