import React from 'react'
import { Button } from 'react-bootstrap'

import classes from './ButtonForAll.module.css'

const ButtonForAll = (props) => {
	const buttonClasses = `${classes.margin} float-end `

	return (
		<Button
			variant={props.variant}
			className={buttonClasses}
			disabled={props.disabled}
			onClick={props.onClick}
			type={props.type}
			id={props.id}
		>
			{props.text}
		</Button>
	)
}

export default ButtonForAll
