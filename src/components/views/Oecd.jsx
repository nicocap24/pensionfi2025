import React, { useContext } from 'react'
import IdiomaContext from '/src/Context/IdiomaContext'
import GoBiblioteca from '../GoBiblioteca'
import pension_markets from '../../assets/books/Pension-Markets-in-Focus-2021.pdf'
import pension_glance from '../../assets/books/Cobertura en pensiones-  Pensions at a Glance OCDE 2021.pdf'
import pension_funds from '../../assets/books/Pension-Funds-in-Figures-2021.pdf'
import pension_markets2020 from '../../assets/books/Pension-Markets-in-Focus-2020.pdf'
import global_insurance from '../../assets/books/Global-Insurance-Market-Trends-2020.pdf'
import nam from '../../assets/books/national-annuity-markets.pdf'

const Oecd = () => {
	const { handleAllDropdowns } = useContext(IdiomaContext)
	return (
		<div
			onClick={handleAllDropdowns}
			className='w-full min-h-screen flex flex-col px-2'
		>
			<h1 className='text-center font-bold text-2xl'>OECD</h1>
			<ul className='mb-4 flex flex-col gap-y-2 text-blue-500'>
				<li className='underline hover:text-blue-600'>
					<a href={pension_markets} download='pension_markets'>
						Pension Markets in Focus 2021, OECD
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={pension_glance} download='pension_glance'>
						Pensions at a Glance 2021, OECD
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={pension_funds} download='pension_funds'>
						Pension funds in figures, 2021, OECD
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={pension_markets2020} download='pension_markets2020'>
						Pension Markets in Focus 2020, OECD
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={global_insurance} download='global_insurance'>
						Global Insurance market trends, 2020, OECD
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={nam} download='nam'>
						National Annuity Markets, Rob Rusconi
					</a>
				</li>
			</ul>
			<GoBiblioteca />
		</div>
	)
}

export default Oecd
