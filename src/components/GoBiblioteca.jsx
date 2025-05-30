import React from 'react'
import { NavLink } from 'react-router-dom'

const GoBiblioteca = () => {
	return (
		<a className='underline mt-auto mb-6 text-blue-700 hover:text-blue-800 font-bold+++'>
			<NavLink to='/biblioteca'>Regresar a biblioteca</NavLink>
		</a>
	)
}

export default GoBiblioteca
