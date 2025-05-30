import React, { useContext } from 'react'
import IdiomaContext from '/src/Context/IdiomaContext'
import GoBiblioteca from '../GoBiblioteca'
import ficha_estadística_previsional_2023 from '../../assets/books/ficha-estadística-previsional-2023.pdf'
import Inversión_de_los_fondos_de_pensiones_2023 from '../../assets/books/Inversión de los fondos de pensiones 2023.pdf'
import mitos from '../../assets/books/mitos.pdf'
import seleccion_de_modalidad_de_pensión_2017 from '../../assets/books/seleccion de modalidad de pensión 2017.pdf'
import selección_de_modalidad_de_pensión_2023 from '../../assets/books/selección de modalidad de pensión 2023.pdf'

const SuperIntendencia = () => {
	const { handleAllDropdowns } = useContext(IdiomaContext)
	return (
		<div
			onClick={handleAllDropdowns}
			className='w-full min-h-screen flex flex-col px-2'
		>
			<h1 className='text-center font-bold text-2xl'>
				Superintendencia de Pensiones
			</h1>
			<ul className='mb-4 flex flex-col gap-y-2 text-blue-500'>
				<li className='underline hover:text-blue-600'>
					<a
						href={ficha_estadística_previsional_2023}
						download='ficha_estadística_previsional_2023'
					>
						ficha estadística previsional 2023
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a
						href={Inversión_de_los_fondos_de_pensiones_2023}
						download='Inversión_de_los_fondos_de_pensiones_2023'
					>
						Inversión de los fondos de pensiones 2023
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={mitos} download='mitos'>
						Mitos
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a
						href={seleccion_de_modalidad_de_pensión_2017}
						download='seleccion_de_modalidad_de_pensión_2017'
					>
						Selección de modalidad de pensión 2017
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a
						href={selección_de_modalidad_de_pensión_2023}
						download='selección_de_modalidad_de_pensión_2023'
					>
						Selección de modalidad de pensión 2023
					</a>
				</li>
			</ul>
			<GoBiblioteca />
		</div>
	)
}

export default SuperIntendencia
