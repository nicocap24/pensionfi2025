import React, { useContext } from 'react'
import IdiomaContext from '/src/Context/IdiomaContext'
import GoBiblioteca from '../GoBiblioteca'
import pen_chile2023 from '../../assets/books/Pensiones_chile2023.pdf'
import fixed from '../../assets/books/Fixed_and_Variable_Longevity_Annuities_in_Defined_Contribution Pl.pdf'
import renta_privada from '../../assets/books/Rentas_Privadas_BiceLifePlan.pdf'
import informe2022 from '../../assets/books/Informe2022.pdf'
import ficha from '../../assets/books/ficha estadística previsional n°129-agosto 2023.pdf'
import deloitte from '../../assets/books/deloitte.pdf'
import retirement from '../../assets/books/2023_Retirement_Income_Pulse_Check.pdf'
import gloomy from '../../assets/books/How Gloomy is the Retirement Outlook for Millennials_.pdf'
import insurte from '../../assets/books/Memoria-Anual-InsurteChile-2022_.pdf'
import financial_literacy from '../../assets/books/Presentation-Lusardi-EFAMA-Nov30.pdf'
import cmp2023 from '../../assets/books/chile-modalidad-pension-2023.pdf'
import soa from '../../assets/books/society-of-actuaries.pdf'
import dpp from '../../assets/books/designing-payout-phase.pdf'
import financial_market from '../../assets/books/financial-market-history-full-book.pdf'
import ludwig from '../../assets/books/teoria-del-dinero-y-del-credito-de-ludwig-von-mises.pdf'

const Otros = () => {
	const { handleAllDropdowns } = useContext(IdiomaContext)
	return (
		<div
			onClick={handleAllDropdowns}
			className='w-full min-h-screen flex flex-col px-2'
		>
			<h1 className='text-center font-bold text-2xl'>Otros</h1>
			<ul className='mb-4 flex flex-col gap-y-2 text-blue-500'>
				<li className='underline hover:text-blue-600'>
					<a href={pen_chile2023} download='pen_chile2023'>
						Reforma de pensiones Chile, Encuesta Cadem, Diciembre 2023.
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={fixed} download='fixed'>
						Fixed and variable annuities, 2023
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={renta_privada} download='renta_privada'>
						Renta Privadas Bice LifePlan
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={informe2022} download='informe2022'>
						Informe del estado de las microfinanzas Chile 2022
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={ficha} download='ficha'>
						Ficha estadistica previsional Chile, Agosto 2023
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={deloitte} download='deloitte'>
						Deloitte 2022 Reforma previsional Boric
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href='#'>Preserve MYGA Annuity</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={retirement} download='retirement'>
						Fidelity Q2 Retirement Analysis 2023
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a
						href='https://www.df.cl/costo-fiscal-de-la-pgu-sube-29-en-primeros-seis-meses-de-implementacion'
						target='_blank'
					>
						Costo fiscal PGU
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a
						href='https://www.visualcapitalist.com/worlds-100-biggest-pension-funds/'
						target='_blank'
					>
						100 fondos de pensiones más grandes del mundo . Visual Capitalist
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={gloomy} download='gloomy'>
						How Gloomy is the retirement outlook for millennials ? 2022
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={insurte} download='insurte'>
						Memoria annual Insurtech Chile 2022
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={financial_literacy} download='financial_literacy'>
						The importance of financial literacy, Lousardi, 2020
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a
						href='https://journals.openedition.org/estetica/5747'
						target='_blank'
					>
						Diseñando un sistema de pensiones
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href='#' target='_blank'>
						Reverse morgages risk profile
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={cmp2023} download='cmp2023'>
						Selección de modalidad de pensión Superintendencia de pensiones,
						Chile 2023
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={soa} download='soa'>
						Society of actuaries, sample exam questions life contingency, 2016
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={dpp} download='dpp'>
						Designing the payout phase in pension systems, 2010
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={financial_market} download='financial_market'>
						Financial Market History
					</a>
				</li>
				<li className='underline hover:text-blue-600'>
					<a href={ludwig} download='ludwig'>
						Teoría del dinero y del crédito, Ludwig von mises
					</a>
				</li>
			</ul>
			<GoBiblioteca />
		</div>
	)
}

export default Otros
