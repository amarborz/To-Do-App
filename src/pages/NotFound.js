import React from 'react'
import { Card } from 'react-bootstrap'

import classes from './NotFound.module.css'

const NotFound = () => {
	return (
		<Card className={classes.width}>
			<Card.Body>
				<h4>
					Unfortunately, we couldn't find the page you were looking for. Maybe
					next time refrain from typing random words after the website URL, and
					instead just use the navigation links in the top right corner? It
					might not look like it, but a lot of effort has been put into creating
					them!
				</h4>
			</Card.Body>
		</Card>
	)
}

export default NotFound
