import React, { useContext } from 'react'
import logo from '../assets/img/logo.png'
import es from '../assets/img/es.png'
import en from '../assets/img/en.png'
import { NavLink } from 'react-router-dom'
import { MdArrowDropDown } from 'react-icons/md'
import IdiomaContext from '../Context/IdiomaContext'
const Navbar = () => {
	const {
		textos,
		handleTraduce,
		dropdownAbout,
		setDropdownAbout,
		dropdownAprende,
		setDropdownAprende,
		dropdownTools,
		setDropdownTools,
		isOpen,
		setIsOpen,
		dropdownProducts,
		setDropdownProducts,
	} = useContext(IdiomaContext)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}
	const toggleTools = () => {
		setDropdownAprende(false)
		setDropdownAbout(false)
		setDropdownProducts(false)
		setDropdownTools(!dropdownTools)
	}
	const toggleProducts = () => {
		setDropdownAprende(false)
		setDropdownAbout(false)
		setDropdownProducts(!dropdownProducts)
		setDropdownTools(false)
	}
	const toggleAprende = () => {
		setDropdownAprende(!dropdownAprende)
		setDropdownTools(false)
		setDropdownAbout(false)
		setDropdownProducts(false)
	}
	const toggleAbout = () => {
		setDropdownAprende(false)
		setDropdownTools(false)
		setDropdownAbout(!dropdownAbout)
		setDropdownProducts(false)
	}
	const blurAprende = () => {
		setIsOpen(false)
		setDropdownAprende(false)
	}
	const blurProducts = () => {
		setIsOpen(false)
		setDropdownProducts(false)
	}
	const blurrTools = () => {
		setIsOpen(false)
		setDropdownTools(false)
	}
	const BlurAbout = () => {
		setIsOpen(false)
		setDropdownAbout(false)
	}

	return (
		<nav className='bg-white border-gray-200 w-full landscape:min-w-2/6 md:w-full  md:flex md:flex-row md:justify-between'>
			<div className='max-w-screen-xl flex md:w-full justify-between items-center mx-auto p-4'>
				<NavLink to='/'>
					<img src={logo} className='w-32 mr-3' alt='Pensión FI Logo' />
				</NavLink>

				<div className='flex md:order-1'>
					<button
						type='button'
						onClick={toggleMenu}
						className='inline-flex z-[1000] items-center p-2 w-10 h-10 justify-center text-sm text-primario rounded-lg md:hidden hover:bg-secundario focus:outline-none focus:ring-2 focus:ring-primario '
					>
						<svg
							className='w-5 h-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 17 14'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 1h15M1 7h15M1 13h15'
							/>
						</svg>
					</button>
				</div>
				<div
					className={`menu-container ${isOpen ? '' : 'hidden'} bg-white left-0 top-0 absolute z-[900] h-screen md:h-auto items-center justify-between w-full md:relative  md:flex md:w-auto md:order-1`}
					id='navbar-search'
				>
					<ul className='flex flex-col items-center. text-center  p-12 md:p-0 mt-4 gap-y-4 font-medium border bg-white border-gray-100 rounded-lg text-sm lg:text-lg md:flex-row md:gap-x-4 md:mt-0 md:border-0  '>
						<NavLink
							onClick={toggleMenu}
							className={({ isActive, isPending }) =>
								isPending
									? ''
									: isActive
										? 'text-primario font-bold underline md:py-2 text-sm lg:text-lg'
										: 'text-gray-600 text-sm lg:text-lg md:py-2'
							}
							to='/'
						>
							{textos.menu.home}
						</NavLink>
						<div className='flex items-center justify-center'>
							<div className='relative group'>
								<button
									onClick={toggleAbout}
									className='inline-flex relative w-full text-sm lg:text-lg font-medium text-gray-600 bg-white rounded-md shadow-sm '
								>
									<span className='text-sm lg:text-lg'>
										{textos.menu.about}
									</span>
									<MdArrowDropDown className='w-5 h-5   -mr-1' />
								</button>
								<div
									className={
										!dropdownAbout
											? 'hidden'
											: 'md:absolute z-50 p-2 flex flex-col  right-0 mt-2 rounded-md shadow-lg bg-white md:w-40 ring-1 ring-black ring-opacity-5 space-y-1'
									}
								>
									<NavLink
										onClick={BlurAbout}
										className={({ isActive, isPending }) =>
											isPending
												? ''
												: isActive
													? 'text-primario font-bold underline text-sm lg:text-lg'
													: 'text-gray-600 text-sm lg:text-lg'
										}
										to='/believe'
									>
										{textos.menu.believe}
									</NavLink>
									<NavLink
										onClick={BlurAbout}
										className={({ isActive, isPending }) =>
											isPending
												? ''
												: isActive
													? 'text-primario font-bold underline text-sm lg:text-lg'
													: 'text-gray-600 text-sm lg:text-lg'
										}
										to='/about'
									>
										{textos.menu.who}
									</NavLink>
									<NavLink
										onClick={BlurAbout}
										className={({ isActive, isPending }) =>
											isPending
												? ''
												: isActive
													? 'text-primario font-bold underline text-sm lg:text-lg'
													: 'text-gray-600 text-sm lg:text-lg'
										}
										to='/history'
									>
										<p>{textos.menu.history}</p>
									</NavLink>
								</div>
							</div>
						</div>
						<div className='flex items-center justify-center'>
							<div className='relative group'>
								<button
									onClick={toggleTools}
									className='inline-flex justify-center w-full text-sm lg:text-lg font-medium text-gray-600 bg-white rounded-md shadow-sm '
								>
									<span className='text-sm lg:text-lg'>
										{textos.menu.tools}
									</span>
									<MdArrowDropDown className='w-5 h-5  -mr-1' />
								</button>
								<div
									className={
										!dropdownTools
											? 'hidden'
											: 'md:absolute z-50 flex flex-col  right-0 mt-2 rounded-md shadow-lg bg-white md:w-52 ring-1 ring-black ring-opacity-5 p-2 space-y-1'
									}
								>
									<NavLink
										onClick={blurrTools}
										className={({ isActive, isPending }) =>
											isPending
												? ''
												: isActive
													? 'text-primario font-bold underline text-sm lg:text-lg'
													: 'text-gray-600 text-sm lg:text-lg'
										}
										to='/Profit'
									>
										{textos.menu.pension_status}
									</NavLink>
									<a
										onClick={blurrTools}
										className='text-gray-600 text-sm lg:text-lg'
										href='https://www.decidetu.cl/'
										target='_blank'
									>
										{textos.menu.simulator}
									</a>
									<a
										onClick={blurrTools}
										className='text-gray-600 text-sm lg:text-lg'
										href='https://simulador.pensionfi.com/'
										target='_blank'
									>
										{textos.menu.pensionfi_simulator}
									</a>
									<a
										onClick={blurrTools}
										className='text-gray-600 text-sm lg:text-lg'
										href='https://www.valorizame.com/'
										target='_blank'
									>
										{textos.menu.valorizame}
									</a>
									<NavLink
										onClick={blurrTools}
										className={({ isActive, isPending }) =>
											isPending
												? ''
												: isActive
													? 'text-primario font-bold underline text-sm lg:text-lg'
													: 'text-gray-600 text-sm lg:text-lg'
										}
										to='/como-voy-con-mi-pension'
									>
										{textos.menu.myfunds}
									</NavLink>
									<NavLink
										onClick={blurrTools}
										className={({ isActive, isPending }) =>
											isPending
												? ''
												: isActive
													? 'text-primario font-bold underline text-sm lg:text-lg'
													: 'text-gray-600 text-sm lg:text-lg'
										}
										to='/contactar-asesor'
									>
										{textos.menu.advisors}
									</NavLink>
								</div>
							</div>
						</div>
						<div className='flex items-center justify-center'>
							<div className='relative group'>
								<button
									onClick={toggleProducts}
									className='inline-flex justify-center w-full text-sm lg:text-lg font-medium text-gray-600 bg-white rounded-md shadow-sm '
								>
									<span className='text-sm lg:text-lg'>
										{textos.menu.product}
									</span>
									<MdArrowDropDown className='w-5 h-5  -mr-1' />
								</button>
								<div
									className={
										!dropdownProducts
											? 'hidden'
											: 'md:absolute z-50 flex flex-col  right-0 mt-2 rounded-md shadow-lg bg-white md:w-52 ring-1 ring-black ring-opacity-5 p-2 space-y-1'
									}
								>
									<NavLink
										onClick={blurProducts}
										className={({ isActive, isPending }) =>
											isPending
												? ''
												: isActive
													? 'text-primario font-bold underline text-sm lg:text-lg'
													: 'text-gray-600 text-sm lg:text-lg'
										}
										to='/pension-analytics'
									>
										{textos.menu.panalytics}
									</NavLink>
									<NavLink
										onClick={blurProducts}
										className={({ isActive, isPending }) =>
											isPending
												? ''
												: isActive
													? 'text-primario font-bold underline text-sm lg:text-lg'
													: 'text-gray-600 text-sm lg:text-lg'
										}
										to='/pension-labs'
									>
										{textos.menu.plabs}
									</NavLink>
								</div>
							</div>
						</div>

						<div className='flex items-center justify-center'>
							<div className='relative group'>
								<button
									onClick={toggleAprende}
									className='inline-flex justify-center w-full  text-sm lg:text-lg font-medium text-gray-600 bg-white rounded-md shadow-sm '
								>
									<span className='text-sm lg:text-lg'>
										{textos.menu.learn}
									</span>
									<MdArrowDropDown className='w-5 h-5  -mr-1' />
								</button>
								<div
									className={
										!dropdownAprende
											? 'hidden'
											: 'md:absolute z-50 flex flex-col  right-0 mt-2 rounded-md shadow-lg bg-white md:w-40 ring-1 ring-black ring-opacity-5 p-1 space-y-1'
									}
								>
									<NavLink
										onClick={blurAprende}
										className={({ isActive, isPending }) =>
											isPending
												? ''
												: isActive
													? 'text-primario font-bold underline text-sm lg:text-lg'
													: 'text-gray-600 text-sm lg:text-lg'
										}
										to='/data'
									>
										{textos.menu.data}
									</NavLink>
									<NavLink
										onClick={blurAprende}
										className={({ isActive, isPending }) =>
											isPending
												? ''
												: isActive
													? 'text-primario font-bold underline text-sm lg:text-lg'
													: 'text-gray-600 text-sm lg:text-lg'
										}
										to='/biblioteca'
									>
										{textos.menu.library}
									</NavLink>
								</div>
							</div>
						</div>

						<NavLink
							onClick={toggleMenu}
							className={({ isActive, isPending }) =>
								isPending
									? ''
									: isActive
										? 'text-primario font-bold underline md:py-2 text-sm lg:text-lg'
										: 'text-gray-600 text-sm lg:text-lg md:py-2'
							}
							to='/contact'
						>
							{textos.menu.contact}
						</NavLink>
						<div className='flex flex-row md:pt-2 justify-center '>
							<div className='w-6'>
								<img src={es} alt='spanish icon' />
							</div>
							<div>
								<label
									className='relative inline-flex cursor-pointer items-center'
									onChange={handleTraduce}
									id='trasnalte-btn'
								>
									<input
										id='switch'
										type='checkbox'
										className='peer sr-only'
										defaultChecked='true'
									/>
									<label htmlFor='switch' className='hidden'></label>
									<div className="peer h-6 w-11 rounded-full border bg-secundario after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primario peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
								</label>
							</div>
							<div className='w-6'>
								<img src={en} alt='english icon' />
							</div>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
