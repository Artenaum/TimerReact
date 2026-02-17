import { useState } from "react"
import TimerDisplay from "./TimerDisplay"
import TimerControls from "./TimerControls"
import TimerSettings from "./TimerSettings"

const Timer = () => {
	const [seconds, setSeconds] = useState(0)
	const [isRunning, setIsRunning] = useState(false)

	// 1. Сделать шестерёнку с настройками. Выбор между секундами и миллисекундами через радио кнопку
	// 2. Сохранять время по нажатию reset в local storage в виде списка
	// 3. В списке отображается выбранный формат
	// 4. При наведении на элемент списка выделить элемент
	// 5. Редактирование (кнопка удаления) так чтобы не было ререндера всего списка

	return (
		<div>
			<TimerDisplay seconds={seconds}/>
			<div style={{display: 'flex', gap: '10px'}}>
				<TimerControls isRunning={isRunning} setSeconds={setSeconds} setIsRunning={setIsRunning}/>
				<TimerSettings/>
			</div>
		</div>
	)
}

export default Timer