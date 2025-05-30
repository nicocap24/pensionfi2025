import React, { useContext } from 'react'
import IdiomaContext from '/src/Context/IdiomaContext'
import GoBiblioteca from '../GoBiblioteca'
import solving from '../../assets/books/Solving-Global-Challenges-Using-Finance-Science-EFMA-2019.pdf'
import selfie_brazil from '../../assets/books/SeLFIES for Brazil.pdf'
import financial_innovator from '../../assets/books/The-financial-innovator.pdf'
import crisis from '../../assets/books/aa The-Crisis-in-Retirement-Planning-HBR-2014-Merton.pdf'
import robmcf from '../../assets/books/robert-merton-science-finance.pdf'

const Robert = () => {
	const { handleAllDropdowns } = useContext(IdiomaContext)
	return (
		<div
			onClick={handleAllDropdowns}
			className='w-full min-h-screen flex flex-col px-2'
		>
			<h1 className='text-center font-bold text-2xl'>Robert Merton</h1>
			<ul className='mb-4 flex flex-col gap-y-2 text-blue-500'>
				<li className='underline hover:text-blue-600'>
					<a href={solving} download='solving'>
						Solving Global Challenges using Finance Science, Robert C Merton
						2019
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={selfie_brazil} download='selfie_brazil'>
						SelFies for Brazil, Robert C Merton, 2020
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={financial_innovator} download='financial_innovator'>
						The financial innovator 2012 Robert C Merton
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={crisis} download='crisis'>
						The Crisis in Retirement Planning, Robert Merton, Harvard Review
						July-August 2014
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={robmcf} download='robmcf'>
						Robert C Merton and the science of finance
					</a>
				</li>
			</ul>
			<GoBiblioteca />
		</div>
	)
}

export default Robert
