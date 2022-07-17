import { Home } from 'pages'
import { FC } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'

export const App: FC = (): JSX.Element => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}
