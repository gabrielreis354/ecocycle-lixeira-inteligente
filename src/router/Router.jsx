import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

function Router() {
	return (
		<div className='content-wrapper'>
			<div className='content'>
				<Routes>
					<Route index path='/' element={ <Home/> } />
					<Route path='*' element={ <></> }/>
				</Routes>
			</div>
		</div>
	)
}

export default Router
