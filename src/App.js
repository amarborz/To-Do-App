import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddTask from './pages/AddTask'
import AllTasks from './pages/AllTasks'
import CompletedTasks from './pages/CompletedTasks'
import Header from './components/Header'
import NotFound from './pages/NotFound'

/* This is my first ever React project done complete by myself, 
without the use of any tutorials or Youtube videos. 
I did reference the documentations for some libraries on the odd occasion. 
There is still a lot to improve, but the task for this project was to practice 
all the knowledge I had gathered so far and use it in a real project.
The premise is simple, a to-do app, but I added some complex functions (complex to me), 
like react-router, back-end server (firebase) and a styling library (bootstrap).
I initially wanted to add Redux toolkit as well, but soon noticed it might make the 
app unnecessarily complex, so instead decided to showcase my Redux skills in another app.
There are still some things I'm not pleased with, and I had to come up with sub-par solutions 
to make the page re-render in some cases (which you might notice if you take a look at 
the dependencies for both useEffect methods, or a quick look at the console).
Also left an error in the console that 2 <a> can't be nested inside each other, 
but I left it that way to avoid issues with styling. One last thing, i know 
the CSS modules were unnecessary, since I use minimum styling and get most of my styling
from Bootstrap, and it would have even been better to just use one App.css, especially
since I reuse the same elements in almost all components, but nonetheless I decided
to use them to show I know how to (or maybe that actually shows I don't know how to use them correctly?).
Anyway, had a blast making this, took me about 5-6 hours for the whole project, quite 
proud of myself if I do say so myself, hope you like it! Sorry for the long comments :)
 */

function App() {
	const completedTaskHandler = (task) => {
		fetch(
			'https://to-do-app-81e16-default-rtdb.firebaseio.com/completed.json',
			{
				method: 'POST',
				body: JSON.stringify({
					title: task.title,
					text: task.text,
				}),
			},
		)
	}

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<AllTasks />} />
				<Route path="add-task" element={<AddTask />} />
				<Route
					path="all-tasks"
					element={<AllTasks onComplete={completedTaskHandler} />}
				/>
				<Route path="completed-tasks" element={<CompletedTasks />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
