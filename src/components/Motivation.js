import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

import ButtonForAll from '../UI/ButtonForAll'
import classes from './Motivation.module.css'

const Motivation = () => {
	const [showMotivation, setShowMotivation] = useState(false)
	const [quote, setQuote] = useState({})

	const getQuoteHandler = async () => {
		const number = Math.floor(Math.random() * 20)
		const response = await fetch(
			`URL/quotes/${number}.json`,
		)
		const responseData = await response.json()
		setQuote(responseData)
		setShowMotivation(true)
	}

	const hideQuoteHandler = () => {
		setShowMotivation(false)
	}

	const initial = (
		<Card>
			<Card.Body>
				<h3>Need some motivation to finish your tasks? Click the button!</h3>
				<ButtonForAll
					variant="primary"
					text="Motivation!"
					onClick={getQuoteHandler}
				/>{' '}
			</Card.Body>
		</Card>
	)

	const showQuote = (
		<Card>
			<Card.Header>
				<h4 className="float-start">{quote.author}</h4>
			</Card.Header>
			<Card.Body>
				<Card.Text className="float-start">{quote.text}</Card.Text>
				<ButtonForAll variant="danger" text="Hide" onClick={hideQuoteHandler} />
				<ButtonForAll variant="primary" text="More" onClick={getQuoteHandler} />
			</Card.Body>
		</Card>
	)

	return (
		<div className={classes.width}>{!showMotivation ? initial : showQuote}</div>
	)
}

export default Motivation
