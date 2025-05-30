import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import IdiomaContext from '/src/Context/IdiomaContext'
import book1 from '../../assets/img/book1.png'
import book2 from '../../assets/img/book2.png'
import book3 from '../../assets/img/book3.png'
import book4 from '../../assets/img/book4.png'
import book5 from '../../assets/img/book5.png'
import book6 from '../../assets/img/book6.png'
import book7 from '../../assets/img/book7.png'
import book8 from '../../assets/img/book8.png'
import book9 from '../../assets/img/book9.png'
import book10 from '../../assets/img/book10.png'
import { Helmet } from 'react-helmet'
const URL = window.location.href
const Biblioteca = () => {
	const { textos, handleAllDropdowns } = useContext(IdiomaContext)
	return (
		<div onClick={handleAllDropdowns} className='w-full flex flex-col px-2'>
			<Helmet>
				<title>Pension FI | {textos.menu.library}</title>
				{/* <!-- Facebook Meta Tags --> */}
				<meta
					property='og:title'
					content={('Pension FI | ', textos.menu.library)}
				/>
				<meta property='og:url' content={URL} />
				{/* <!-- Twitter Meta Tags --> */}
				<meta property='twitter:url' content={URL} />
				<meta
					name='twitter:title'
					content={('Pension FI | ', textos.menu.library)}
				/>
			</Helmet>
			<h1 className='text-center font-bold text-2xl'>{textos.library.title}</h1>
			<h2 className='text-center italic text-gray-400 font-semibold mb-4'>
				{textos.library.sub}
			</h2>
			<p className='text-center mb-4'>{textos.library.desc}</p>
			<ul
				role='list'
				className='grid grid-cols-2 gap-x-8 w-full lg:w-2/3 lg:h-[600px] md:grid-cols-3 m-auto gap-y-16 md:col-span-3'
			>
				<li className=''>
					<Link to='robert-merton'>
						<div className='flex relative justify-center w-full'>
							<p className='absolute font-semibold py-2 text-center bg-white w-2/3 mt-6'>
								Robert Merton
							</p>
							<img src={book2} className=' min-w-full w-full' alt='' />
						</div>
					</Link>
				</li>
				<li className=''>
					<Link to='jose-pinera'>
						<div className='flex relative justify-center w-full'>
							<p className='absolute font-semibold py-2 text-center bg-white w-2/3 mt-6'>
								Jose Piñera
							</p>
							<img src={book8} className=' min-w-full w-full' alt='' />
						</div>
					</Link>
				</li>
				<li className=''>
					<Link to='tomas-fernandez'>
						<div className='flex relative justify-center w-full'>
							<p className='absolute font-semibold py-2 text-center bg-white w-2/3 mt-6'>
								Tomás Fernández
							</p>
							<img src={book9} className=' min-w-full w-full' alt='' />
						</div>
					</Link>
				</li>
				<li className=''>
					<Link to='oecd'>
						<div className='flex relative justify-center  w-full'>
							<p className='absolute font-semibold py-2 text-center bg-white w-2/3 mt-6'>
								OECD
							</p>

							<img src={book1} className=' min-w-full w-full' alt='' />
						</div>
					</Link>
				</li>
				<li className=''>
					<Link to='fen-uchile'>
						<div className='flex relative justify-center w-full'>
							<p className='absolute font-semibold py-2 text-center bg-white w-2/3 mt-6'>
								FEN, UChile
							</p>
							<img src={book3} className=' min-w-full w-full' alt='' />
						</div>
					</Link>
				</li>
				<li className=''>
					<Link to='superintendencia-de-pensiones'>
						<div className='flex relative justify-center w-full'>
							<p className='absolute font-semibold py-2 text-center bg-white w-2/3 mt-6'>
								Superintendencia de Pensiones
							</p>
							<img src={book10} className=' min-w-full w-full' alt='' />
						</div>
					</Link>
				</li>
				<li className=''>
					<Link to='fiap'>
						<div className='flex relative justify-center w-full'>
							<p className='absolute font-semibold py-2 text-center bg-white w-2/3 mt-6'>
								FIAP
							</p>
							<img src={book4} className=' min-w-full w-full' alt='' />
						</div>
					</Link>
				</li>
				<li className=''>
					<Link to='mercer'>
						<div className='flex relative justify-center w-full'>
							<p className='absolute font-semibold py-2 text-center bg-white w-2/3 mt-6'>
								Mercer
							</p>
							<img src={book5} className=' min-w-full w-full' alt='' />
						</div>
					</Link>
				</li>
				<li className=''>
					<Link to='olivia-mitchell'>
						<div className='flex relative justify-center w-full'>
							<p className='absolute font-semibold py-2 text-center bg-white w-2/3 mt-6'>
								Olivia Mitchell
							</p>
							<img src={book7} className=' min-w-full w-full' alt='' />
						</div>
					</Link>
				</li>
				<li className=''>
					<Link to='otros'>
						<div className='flex relative justify-center w-full'>
							<p className='absolute font-semibold py-2 text-center bg-white w-2/3 mt-6'>
								Otros
							</p>
							<img src={book6} className=' min-w-full w-full' alt='' />
						</div>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Biblioteca
