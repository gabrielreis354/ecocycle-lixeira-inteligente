
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import { useMemo } from "react"
import ComoFunciona from "../pages/ComoFunciona"
import Dashboard from "../pages/Dashboard"
import Footer from "../components/Footer"

function Router() {
  const location = useLocation()
	
  const isDashboardRoute = useMemo(
    () => location.pathname.startsWith("/dashboard"),
    [location.pathname]
  )

	return (
		<div className='content-wrapper'>
			<div className='content'>
				{/* {!isDashboardRoute && <Header />} */}
			
				<Routes>
					<Route index path='/' element={ <Home/> } />
					<Route path="/funcionamento" element={<ComoFunciona />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path='*' element={ <></> }/>
				</Routes>

				{!isDashboardRoute && <Footer/>}

			</div>
		</div>
	)
}

export default Router
