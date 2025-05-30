import React, { useContext } from 'react'
import IdiomaContext from '/src/Context/IdiomaContext'
import GoBiblioteca from '../GoBiblioteca'
import Innovacion_Baseline_RP_Ing_Tomas_Fernandez from '../../assets/books/Innovacion_tomas.pdf'

const TomasFernandez = () => {
	const { handleAllDropdowns } = useContext(IdiomaContext)
	return (
		<div
			onClick={handleAllDropdowns}
			className='w-full min-h-screen flex flex-col px-2'
		>
			<h1 className='text-center font-bold text-2xl'>Tomás Fernández</h1>
			<ul className='mb-4 flex flex-col gap-y-2 text-blue-500'>
				<li className='underline hover:text-blue-600'>
					<a
						href={Innovacion_Baseline_RP_Ing_Tomas_Fernandez}
						download='Innovacion_Baseline_RP_Ing_Tomas_Fernandez'
					>
						Innovacion Baseline RP Ing Tomas Fernandez
					</a>
				</li>
			</ul>
			<GoBiblioteca />
		</div>
	)
}

export default TomasFernandez
