import React, { useContext } from 'react'
import IdiomaContext from '/src/Context/IdiomaContext'
import tree from '../../assets/img/money-tree.png'
import caja from '../../assets/img/caja.jpeg'
import { FaLaptopCode } from 'react-icons/fa6'
import { AiOutlineTeam } from 'react-icons/ai'
import { BsSpeedometer } from 'react-icons/bs'
import { GiTeamIdea } from 'react-icons/gi'

const Home2 = () => {
	const { textos, handleAllDropdowns } = useContext(IdiomaContext)
	return (
		<div
			onClick={handleAllDropdowns}
			className='flex flex-col w-full py-6 items-center gap-y-4 text-center'
		>
			<h1 className='text-6xl font-light'>¿Con cuánto te quieres jubilar?</h1>
			<form className='border-b-2 border-primario'>
				<input type='text' placeholder='$ pesos chilenos' />
			</form>

			<div className='w-60 mt-4 pb-4 flex flex-row'>
				<img src={caja} className='' alt='' />
			</div>
			{/* <div className='w-60 mt-4 pb-4 flex flex-row'>
				<img src={tree} className='' alt='' />
			</div> */}
			<div className='flex flex-col '>
				<section className=' bg-gray-100'>
					<div className=' block  relative bg-opacity-50  z-40  '>
						<div className='relative mx-auto h-full pb-20   md:pb-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl '>
							<div className='mx-auto max-w-7xl relative'>
								<div className='grid grid-cols-1 gap-2 mt-12 sm:grid-cols-2 lg:mt-20   '>
									<a
										href='#!'
										className='transition-all  duration-1000 bg-white hover:bg-primario hover:shadow-xl m-2 p-4 relative group  '
									>
										<div className=' absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  '></div>
										<div className='py-2 px-9 relative  '>
											<FaLaptopCode className='w-16 h-16 fill-primario group-hover:fill-white' />

											<p className='mt-4 text-base text-gray-600 group-hover:text-white  '>
												{textos.home2.company.fst}
											</p>
										</div>
									</a>

									<a
										href='#!'
										className='transition-all  duration-1000 bg-white hover:bg-primario hover:shadow-xl m-2 p-4 relative  group  '
									>
										<div className=' absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  '></div>
										<div className='py-2 px-9 relative  '>
											<AiOutlineTeam className='w-16 h-16 fill-primario group-hover:fill-white' />

											<p className='mt-4 text-base text-gray-600 group-hover:text-white'>
												{textos.home2.company.scnd}
											</p>
										</div>
									</a>

									<a
										href='#!'
										className='transition-all  duration-1000 bg-white hover:bg-primario  hover:shadow-xl m-2 p-4 relative group  '
									>
										<div className=' absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  '></div>
										<div className='py-2 px-9 relative  '>
											<BsSpeedometer className='w-16 h-16 fill-primario group-hover:fill-white' />
											<p className='mt-4 text-base text-gray-600 group-hover:text-white'>
												{textos.home2.company.trd}
											</p>
										</div>
									</a>

									<a
										href='#!'
										className='transition-all  duration-1000 bg-white hover:bg-primario  hover:shadow-xl m-2 p-4 relative  group  '
									>
										<div className=' absolute  bg-primario top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  '></div>
										<div className='py-2 px-9 relative  '>
											<GiTeamIdea className='w-16 h-16 fill-primario group-hover:fill-white' />
											<p className='mt-4 text-base text-gray-600 group-hover:text-white'>
												{textos.home2.company.frd}
											</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Home2
