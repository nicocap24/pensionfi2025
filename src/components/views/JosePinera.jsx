import React, { useContext } from 'react'
import IdiomaContext from '/src/Context/IdiomaContext'
import GoBiblioteca from '../GoBiblioteca'
import el_cascabel_al_gato from '../../assets/books/el_cascabel_al_gato.pdf'
import Libertad_libertad from '../../assets/books/Libertad_libertad.pdf'

const JosePinera = () => {
	const { handleAllDropdowns } = useContext(IdiomaContext)
	return (
		<div
			onClick={handleAllDropdowns}
			className='w-full min-h-screen flex flex-col px-2'
		>
			<h1 className='text-center font-bold text-2xl'>Jose Piñeda</h1>
			<ul className='mb-4 flex flex-col gap-y-2 text-blue-500'>
				<li className='underline hover:text-blue-600'>
					<a href={el_cascabel_al_gato} download='el_cascabel_al_gato'>
						El cascabel al gato
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={Libertad_libertad} download='Libertad_libertad'>
						Libertad libertad
					</a>
				</li>
			</ul>
			<GoBiblioteca />
		</div>
	)
}

export default JosePinera
