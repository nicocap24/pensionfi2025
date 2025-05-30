import React, { useContext } from 'react'
import IdiomaContext from '/src/Context/IdiomaContext'
import GoBiblioteca from '../GoBiblioteca'
import retirement_security from '../../assets/books/Changing Frameworks for Retirement Security.pdf'
import reshaping from '../../assets/books/How FinTech is Reshaping the Retirement Planning Process.pdf'
import flarp from '../../assets/books/financial-literacy-planning.pdf'
import fdioc from '../../assets/books/FinTech-Chapter-1-Agnew-and-Mitchell.pdf'

const Olivia = () => {
	const { handleAllDropdowns } = useContext(IdiomaContext)
	return (
		<div
			onClick={handleAllDropdowns}
			className='w-full min-h-screen flex flex-col px-2'
		>
			<h1 className='text-center font-bold text-2xl'>Olivia Mitchell</h1>
			<ul className='mb-4 flex flex-col gap-y-2 text-blue-500'>
				<li className='underline hover:text-blue-600'>
					<a href={retirement_security} download='retirement_security'>
						Changing framework for retirement security, Olivia Mitchel, 2014
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={reshaping} download='reshaping'>
						How Fintech is reshaping the retirement planning process, 2018,
						Olivia Mitchell
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href='#' target='_blank'>
						Olivia Mitchell 2019
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={flarp} download='flarp'>
						Financial literacy and financial planning in the United States,
						Olivia Mitchell, 2011
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={fdioc} download='fdioc'>
						The Disruptive Impact of FinTech on Retirement Systems
					</a>
				</li>
			</ul>
			<GoBiblioteca />
		</div>
	)
}

export default Olivia
