import { Home } from 'pages'
import { FC } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'

export const App: FC = (): JSX.Element => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/rick-and-morty' element={<Home />} />
			</Routes>
		</div>
	)
}
