import React, { useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ButtonForAll from '../UI/ButtonForAll'

import classes from './AddTask.module.css'

const AddTask = () => {
	const navigate = useNavigate()
	const [warning, setWarning] = useState('')
	const titleRef = useRef()
	const textRef = useRef()

	const submitHandler = (event) => {
		event.preventDefault()

		if (
			titleRef.current.value.trim().length === 0 ||
			textRef.current.value.trim().length === 0
		) {
			setWarning('Please fill in all the fields.')
			return
		}

		setWarning('')

		fetch('URL', {
			method: 'POST',
			body: JSON.stringify({
				title: titleRef.current.value,
				text: textRef.current.value,
			}),
		})

		navigate('/all-tasks')
	}

	return (
		<div>
			<Form className={classes.width} onSubmit={submitHandler}>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>
						<h2>Title</h2>
					</Form.Label>
					<Form.Control
						type="text"
						placeholder="Title of the task"
						ref={titleRef}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>
						<h2>Task</h2>
					</Form.Label>
					<Form.Control as="textarea" rows={4} ref={textRef} />
				</Form.Group>
				{warning.length > 1 && <p style={{ color: 'red' }}>{warning}</p>}
				<ButtonForAll type="submit" variant="primary" text="Add Task" />
			</Form>
		</div>
	)
}

export default AddTask
