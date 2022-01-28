import React, { useEffect, useState } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import ButtonForAll from '../UI/ButtonForAll'
import classes from './CompletedTasks.module.css'

const CompletedTasks = () => {
	const [completedTasks, setCompletedTasks] = useState([])
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		const fetchCompletedTasks = async () => {
			const response = await fetch(
				'URL/completed.json',
			)

			const responseData = await response.json()

			const completedTask = []

			for (const key in responseData) {
				completedTask.push({
					id: key,
					title: responseData[key].title,
					text: responseData[key].text,
				})
			}

			setLoading(false)
			setCompletedTasks(completedTask)
		}

		fetchCompletedTasks()
	}, [])

	const removeHandler = (event) => {
		setCompletedTasks(
			completedTasks.filter((elem) => elem.id !== event.target.id),
		)

		fetch(
			`URL/completed/${event.target.id}.json`,
			{
				method: 'DELETE',
			},
		)
	}

	const redirectHandler = () => {
		navigate('/all-tasks')
	}

	const completedTasksList = completedTasks.map((elem) => (
		<Card className={classes.width} key={elem.id}>
			<Card.Header>
				<h4 className="float-start">{elem.title}</h4>
			</Card.Header>
			<Card.Body>
				<Card.Text className="float-start">{elem.text}</Card.Text>
				<ButtonForAll
					variant="danger"
					text="Remove Task"
					onClick={removeHandler}
					id={elem.id}
				/>
				<ButtonForAll
					variant="secondary"
					text="Completed"
					disabled="disabled"
				/>
			</Card.Body>
		</Card>
	))

	const empty = (
		<div className={classes.width}>
			<h4>Looks like you haven't completed any tasks yet, you lazy pig!</h4>
			<ButtonForAll
				variant="primary"
				text="See Tasks"
				onClick={redirectHandler}
			/>
		</div>
	)

	return (
		<>
			{loading && (
				<Spinner
					style={{ marginTop: 100 }}
					animation="border"
					variant="primary"
				/>
			)}
			{completedTasks.length === 0 && !loading && empty}
			{completedTasksList}
		</>
	)
}

export default CompletedTasks
