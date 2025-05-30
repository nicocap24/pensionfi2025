import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import IdiomaContext from '/src/Context/IdiomaContext'
// import caja from '../../assets/img/caja.jpeg'
import { FaCalculator } from 'react-icons/fa6'
import { RiTeamFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import useRecaptchaV3 from '../hooks/useRecaptchaV3'

const Home = () => {
	const executeRecaptcha = useRecaptchaV3({
		SITE_KEY: import.meta.env.VITE_APP_RECAPTCHA_SITEKEY,
	})
	const { textos, handleAllDropdowns } = useContext(IdiomaContext)
	const [correo, setMail] = useState('')
	const [name, setName] = useState('')
	const [loading, setLoading] = useState(false)
	const [emptyField, setEmptyField] = useState(false)
	const name_error = document.getElementById('name_error')
	const email_error = document.getElementById('email_error')
	const correcto = document.getElementById('respuesta')
	const error = document.getElementById('error')
	const emailFormat =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
	const containNumbers = /\d/
	const URL = window.location.href
	const handleJoin = async e => {
		e.preventDefault()
		setLoading(true)
		correcto.classList.add('hidden')
		error.classList.add('hidden')
		name_error.classList.add('hidden')
		email_error.classList.add('hidden')
		if (!name || specialChars.test(name) || containNumbers.test(name)) {
			name_error.classList.remove('hidden')
			setEmptyField(true)
		}
		if (!correo || !emailFormat.test(correo)) {
			email_error.classList.remove('hidden')
			setEmptyField(true)
		}
		const recaptchaToken = await executeRecaptcha('newsletteraction')
		// Obtener la fecha y hora actuales en milisegundos desde el epoch
		const now = Date.now()

		// Crear un objeto Date a partir del timestamp actual
		const date = new Date(now)

		// Especificar la región y opciones de formato para Chile
		const options = {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			timeZone: 'America/Santiago', // Zona horaria específica de Chile
			hour12: false, // Utiliza formato de 24 horas
		}

		// Crear el formateador de fecha y hora para la región especificada
		const dateTimeFormat = new Intl.DateTimeFormat('es-CL', options)

		// Formatear la fecha
		const formattedDate = dateTimeFormat.format(date)
		const data = {
			name,
			correo,
			recaptchaToken,
			FECHA: formattedDate,
		}
		const apiUrl = import.meta.env.VITE_APP_API_URL || window.location.origin
		emptyField && setLoading(false)
		!emptyField &&
			(await fetch(`${apiUrl}/waitlist`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify(data),
			})
				.then(async res => {
					if (!res.ok) {
						const errorData = await res.json()
						error.classList.remove('hidden')
						throw new Error(
							errorData.msg || errorData || 'Todos los campos son requeridos',
						)
					}
					return res.json()
				})
				.then(response => {
					correcto.classList.remove('hidden')
					setMail('')
					setName('')
				})
				.catch(err => {
					setLoading(false)
					error.innerHTML = err.message
					error.classList.remove('hidden')
				})
				.finally(() => {
					setLoading(false)
					setTimeout(() => {
						correcto.classList.add('hidden')
						error.classList.add('hidden')
					}, 100000)
				}))
	}

	return (
		<div
			onClick={handleAllDropdowns}
			className='flex flex-col w-full h-screen bg-gradient-to-br from-sky-50 via-green-50 to-teal-50 text-slate-800 relative overflow-hidden'
		>
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2lyY2xlcyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSI4IiBmaWxsPSJub25lIiBzdHJva2U9IiNlZWUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjaXJjbGVzKSIvPjwvc3ZnPg==')] opacity-10"></div>

			{/* Background shapes */}
			<div className='absolute inset-0'>
				{/* Original blobs */}
				<div className='absolute -top-48 -left-48 w-96 h-96 bg-gradient-to-r from-sky-300/50 to-green-300/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
				<div className='absolute top-48 -right-48 w-96 h-96 bg-gradient-to-r from-green-300/50 to-blue-300/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
				<div className='absolute -bottom-48 left-48 w-96 h-96 bg-gradient-to-r from-blue-300/50 to-sky-300/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>

				{/* Additional smaller forms */}
				<div className='absolute top-1/4 left-1/4 w-48 h-48 bg-green-200/30 rounded-lg rotate-12 animate-float'></div>
				<div className='absolute top-1/3 right-1/3 w-32 h-32 bg-sky-200/30 rounded-full animate-float animation-delay-1000'></div>
				<div className='absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-200/30 rounded-lg -rotate-12 animate-float animation-delay-2000'></div>
				<div className='absolute bottom-1/3 left-1/3 w-36 h-36 bg-green-200/30 rounded-full animate-float animation-delay-3000'></div>
			</div>

			<Helmet>
				<title>Pension FI</title>
				<meta property='og:title' content='Pensión FI' />
				<meta
					property='og:url'
					content='https://testing-server-c1028.web.app/contactar-asesor'
				/>
				<meta
					property='twitter:url'
					content='https://testing-server-c1028.web.app/contactar-asesor'
				/>
				<meta name='twitter:title' content='Pensión FI' />
			</Helmet>

			<div className='h-screen overflow-y-auto'>
				<div className='flex flex-col-reverse md:flex-row justify-center items-center px-4 md:px-12 relative z-10'>
					<div className='w-full max-w-4xl mx-auto'>
						<h1 className='text-4xl md:text-5xl mb-8 mt-8 font-bold animate-fade-in-down'>
							<span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-green-400 to-blue-500 animate-[gradient_3s_ease-in-out_infinite]'>
								{textos.home.header}
							</span>
						</h1>

						<div className='backdrop-blur-xl bg-white/60 rounded-3xl p-8 mb-12 shadow-lg shadow-sky-100 hover:shadow-green-100 transition-all duration-500 animate-fade-in-up'>
							<p className='text-xl mb-6 font-medium bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent'>
								{textos.home.newsletter.title}
							</p>
							<form className='flex flex-col md:flex-row gap-4'>
								<div className='flex-1 group'>
									<input
										type='text'
										placeholder={textos.home.newsletter.name}
										value={name}
										onChange={e => setName(e.target.value)}
										className='w-full px-4 py-3 rounded-lg bg-white/80 border border-sky-100 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/20 transition-all duration-300 group-hover:border-sky-200'
									/>
									<span
										id='name_error'
										className='text-red-400 text-sm mt-1 hidden'
									>
										{textos.home.newsletter.response.name}
									</span>
								</div>
								<div className='flex-1 group'>
									<input
										type='email'
										placeholder='Email'
										value={correo}
										onChange={e => setMail(e.target.value)}
										className='w-full px-4 py-3 rounded-lg bg-white/80 border border-sky-100 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/20 transition-all duration-300 group-hover:border-sky-200'
									/>
									<span
										id='email_error'
										className='text-red-400 text-sm mt-1 hidden'
									>
										{textos.home.newsletter.response.email}
									</span>
								</div>
								<button
									onClick={handleJoin}
									disabled={loading}
									className='px-8 py-3 bg-gradient-to-r from-sky-400 to-green-400 text-white font-medium rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-green-100 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100'
								>
									{textos.home.newsletter.btn}
								</button>
							</form>

							{loading && (
								<div className='mt-4 text-center' role='status'>
									<svg
										className='inline w-8 h-8 animate-spin text-sky-400'
										viewBox='0 0 100 101'
										fill='none'
									>
										<path
											d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
											fill='currentColor'
										/>
										<path
											d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
											fill='currentColor'
										/>
									</svg>
								</div>
							)}

							<p
								id='respuesta'
								className='mt-4 text-sky-500 text-center hidden animate-fade-in'
							>
								{textos.home.newsletter.response.ok}
							</p>
							<p
								id='error'
								className='mt-4 text-red-400 text-center hidden animate-fade-in'
							></p>
						</div>
					</div>
				</div>

				<div className='py-20 px-4 md:px-12 relative z-10'>
					<h2 className='text-4xl md:text-6xl font-bold text-center mb-16'>
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-green-400 to-blue-400 animate-gradient-x'>
							{textos.home.products.title}
						</span>
					</h2>

					<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-8'>
						<div className='backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg rounded-3xl p-8 hover:scale-105 transition-all duration-500 group hover:shadow-lg hover:shadow-sky-100'>
							<FaCalculator className='text-6xl text-sky-400 mb-6 group-hover:scale-110 transition-transform duration-500' />
							<h3 className='text-2xl font-bold mb-4 text-slate-800'>
								{textos.home.products.stitle}
							</h3>
							<p className='text-slate-600 mb-8'>
								{textos.home.products.sdesc}
							</p>
							<a
								href='https://www.decidetu.cl/'
								target='_blank'
								className='inline-flex items-center px-6 py-3 rounded-lg border-2 border-sky-300 text-sky-500 hover:bg-sky-400 hover:text-white transition-all duration-300'
							>
								{textos.home.products.sbtn}
							</a>
						</div>

						<div className='backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg rounded-3xl p-8 hover:scale-105 transition-all duration-500 group hover:shadow-lg hover:shadow-green-100'>
							<RiTeamFill className='text-6xl text-green-400 mb-6 group-hover:scale-110 transition-transform duration-500' />
							<h3 className='text-2xl font-bold mb-4 text-slate-800'>
								{textos.home.products.atitle}
							</h3>
							<p className='text-slate-600 mb-8'>
								{textos.home.products.adesc}
							</p>
							<NavLink
								to='/contactar-asesor'
								className='inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-sky-400 to-green-400 text-white hover:shadow-lg hover:shadow-green-100 transition-all duration-300'
							>
								{textos.home.products.abtn}
							</NavLink>
						</div>
					</div>
				</div>

				<p className='text-center pb-12 relative z-10'>
					<NavLink
						className='text-sky-500 hover:text-green-500 transition-all duration-300 hover:underline'
						to='/contact'
					>
						{textos.home.cta}
					</NavLink>
				</p>
			</div>
		</div>
	)
}

export default Home
