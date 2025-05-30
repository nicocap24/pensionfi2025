import React, { useContext } from 'react'
import IdiomaContext from '/src/Context/IdiomaContext'
import GoBiblioteca from '../GoBiblioteca'
import gender_policies from '../../assets/books/IREF-S-20-01407.pdf'
import hipoteca_reversa from '../../assets/books/Clase_A_Hipoteca_reversa.pdf'
import papc from '../../assets/books/biblio-fen-el-sistema-de-pensiones-administrado-por-el-sector-privado-en-chile-un-analisis-institucional.pdf'
import informe from '../../assets/books/INFORME DESEMPEÑO FINANCIERO.pdf'

const Fen = () => {
	const { handleAllDropdowns } = useContext(IdiomaContext)
	return (
		<div
			onClick={handleAllDropdowns}
			className='w-full min-h-screen flex flex-col px-2'
		>
			<h1 className='text-center font-bold text-2xl'>Fen</h1>
			<ul className='mb-4 flex flex-col gap-y-2 text-blue-500'>
				<li className='underline hover:text-blue-600'>
					<a href={gender_policies} download='gender_policies'>
						Gender policies, governance and financial inclusion, Jose Luis Ruiz,
						2020
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={hipoteca_reversa} download='hipoteca_reversa'>
						Hipoteca reversa, Jose Luis Ruiz
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={papc} download='papc'>
						El sistema de pensiones administrado por el sector privado en chile,
						2000
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={informe} download='informe'>
						Tamaño de los fondos de pensiones y su desempeño financiero,
						Patricio Arrau, 1997
					</a>
				</li>
			</ul>
			<GoBiblioteca />
		</div>
	)
}

export default Fen
