import { memo } from "react"
import styles from './styles/Timer.module.css'
import TimerDisplay from "./TimerDisplay"
import TimerDeleteButton from "./TimerDeleteButton"

interface TimerListItemProps {
	recordId: number
	recordTime: number
}

const TimerListItem = (props: TimerListItemProps) => {
	return (
		<div className={styles.timerListItem}>
			{props.recordId}. <TimerDisplay type={'TableDisplay'} seconds={props.recordTime}/> <TimerDeleteButton timeRecordId={props.recordId}/>
		</div>
	)
}

export default memo(TimerListItem)