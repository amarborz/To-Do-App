import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
	return (
		<div>
			<Navbar bg="primary" variant="dark">
				<Container className="position-relative">
					<Navbar.Brand>WhatToDo?</Navbar.Brand>
					<Nav className="me-auto position-absolute top-0 end-0">
						<Nav.Link>
							<NavLink to="all-tasks" className={classes.border}>
								All Tasks
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink to="add-task" className={classes.border}>
								Add Task
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink to="completed-tasks" className={classes.border}>
								Completed Tasks
							</NavLink>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	)
}

export default Header
