import React, { useEffect, useState } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import Motivation from '../components/Motivation'
import ButtonForAll from '../UI/ButtonForAll'
import classes from './AllTasks.module.css'

const AllTasks = (props) => {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(true)
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		const fetchTasks = async () => {
			const response = await fetch(
				'URL',
			)
			const responseData = await response.json()

			const loadedTasks = []

			for (const key in responseData) {
				loadedTasks.push({
					id: key,
					title: responseData[key].title,
					text: responseData[key].text,
				})
			}

			setLoading(false)
			setTasks(loadedTasks)
		}

		fetchTasks()
	}, [])

	const removeHandler = (event) => {
		setTasks(tasks.filter((elem) => elem.id !== event.target.id))

		fetch(
			`URL/${event.target.id}.json`,
			{
				method: 'DELETE',
			},
		)
	}

	const completedTaskHandler = (event) => {
		const completedTask = tasks.find((elem) => elem.id === event.target.id)
		props.onComplete(completedTask)
		removeHandler(event)
	}

	const addTaskHandler = () => {
		navigate('/add-task')
	}

	const allTasks = tasks.map((elem) => (
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
					variant="primary"
					text="Task Completed"
					id={elem.id}
					onClick={completedTaskHandler}
				/>
			</Card.Body>
		</Card>
	))

	const empty = (
		<div className={classes.width}>
			<h4>
				Looks like you haven't set any new tasks yet!
				<br />
				If you recently added a task and don't see it yet, our database hasn't
				had the time to update yet. please refresh the page to see your task.
				<br />
				Otherwise, click on the 'Add Task' button to add a new task!{' '}
			</h4>
			<ButtonForAll
				variant="primary"
				text="Add Task"
				onClick={addTaskHandler}
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
			{tasks.length > 0 && !loading && <Motivation />}
			{tasks.length === 0 && !loading && empty}
			{allTasks}
		</>
	)
}

export default AllTasks
