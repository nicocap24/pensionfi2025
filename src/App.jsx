import React, { Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Believe from './components/views/Believe'
import About from './components/views/About'
import Home from './components/views/Home'
import History from './components/views/History'
import Contact from './components/views/Contact'
import Navbar from './components/Navbar'
import Datos from './components/views/Datos'
import Biblioteca from './components/views/Biblioteca'
import Skeleton from './components/Skeleton'
import Home2 from './components/views/Home2'
import Footer from './components/Footer'
import ContactAsesores from './components/views/ContactAsesores'
import whatsapp from './assets/img/whatsapp.png'
import { IdiomaProvider } from './Context/IdiomaContext'
import Oecd from './components/views/Oecd'
import Robert from './components/views/Robert'
import Fiap from './components/views/Fiap'
import Otros from './components/views/Otros'
import Fen from './components/views/Fen'
import Olivia from './components/views/Olivia'
import Mercer from './components/views/Mercer'
import NuevoSimulador from './components/views/NuevoSimulador'
import JosePinera from './components/views/JosePinera'
import TomasFernandez from './components/views/TomasFernandez'
import SuperIntendencia from './components/views/SuperIntendencia'
import DataCalculation from './components/DataCalculation'
import MyFunds from './components/views/MyFunds'
import Panalytics from './components/views/Panalytics'
import Plabs from './components/views/Plabs'
import { v4 as uuidv4 } from 'uuid'
import { IoMdChatboxes } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
const LazyAsesores = React.lazy(() => import('./components/views/Asesores'))
const URL = window.location.href
console.log(URL)

function App() {
	const [isChatOpen, setIsChatOpen] = useState(false)
	const [chatMessage, setChatMessage] = useState('')
	const [chatHistory, setChatHistory] = useState([])
	const [isChatLoading, setIsChatLoading] = useState(false)
	const [sessionId] = useState(uuidv4())
	const [userData] = useState({
		nombre: 'Usuario',
		genero: 'no especificado',
		edad: { anos: 30, meses: 0 },
		nivelEstudios: 'no especificado',
	})

	const formatMessage = message => {
		const messageWithoutThinking = message
			.replace(/<think>.*?<\/think>/s, '')
			.trim()
		return <p>{messageWithoutThinking}</p>
	}

	const handleChatSubmit = async e => {
		e.preventDefault()
		if (!chatMessage.trim()) return

		setIsChatLoading(true)
		setChatHistory(prev => [...prev, { type: 'user', message: chatMessage }])

		try {
			const response = await fetch(
				'https://pensionfi-backend.onrender.com/agent/chat',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						session_id: sessionId,
						user_message: chatMessage,
						message_type: 'text',
						agent_name: 'assistant',
						user_data: userData,
					}),
				},
			)

			const data = await response.json()
			setChatHistory(prev => [
				...prev,
				{ type: 'agent', message: data.response },
			])
		} catch (error) {
			console.error('Error:', error)
			setChatHistory(prev => [
				...prev,
				{
					type: 'agent',
					message: 'Lo siento, hubo un error al procesar tu mensaje.',
				},
			])
		}

		setChatMessage('')
		setIsChatLoading(false)
	}

	return (
		<div className='flex flex-col items-center relative  min-h-screen  pb-4 mx-auto w-full lg:max-w-7xl'>
			<IdiomaProvider>
				<BrowserRouter>
					{/* <a
						href='https://wa.me/56923935961'
						target='_blank'
						className='fixed bottom-2 right-2 z-40 '
					>
						<img src={whatsapp} alt='Whatsapp icon' />
					</a> */}

					{/* Chat Flotante */}
					<div className='fixed bottom-4 right-4 z-50'>
						{/* Botón de chat */}
						<button
							onClick={() => setIsChatOpen(!isChatOpen)}
							className='bg-gradient-to-r from-sky-400 to-green-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center'
						>
							{isChatOpen ? (
								<IoClose className='text-2xl' />
							) : (
								<IoMdChatboxes className='text-2xl' />
							)}
						</button>

						{/* Ventana de chat */}
						{isChatOpen && (
							<div className='absolute bottom-16 right-0 w-[280px] sm:w-80 bg-white rounded-lg shadow-xl transition-all duration-300 border border-gray-200'>
								{/* Header del chat */}
								<div className='bg-gradient-to-r from-sky-400 to-green-400 p-2 sm:p-3 rounded-t-lg'>
									<h3 className='text-white font-semibold text-xs sm:text-sm'>
										Chat con Asistente IA
									</h3>
								</div>

								{/* Mensajes con el nuevo formato */}
								<div className='h-[280px] sm:h-80 overflow-y-auto p-2 sm:p-3 bg-gray-50'>
									{chatHistory.map((msg, index) => (
										<div
											key={index}
											className={`mb-2 sm:mb-3 p-1.5 sm:p-2 rounded-lg max-w-[80%] text-xs sm:text-sm ${
												msg.type === 'user'
													? 'bg-sky-100 ml-auto'
													: 'bg-green-100 mr-auto'
											}`}
										>
											{formatMessage(msg.message)}
										</div>
									))}
									{isChatLoading && (
										<div className='flex justify-center'>
											<div className='animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-sky-500'></div>
										</div>
									)}
								</div>

								{/* Input del chat */}
								<form
									onSubmit={handleChatSubmit}
									className='p-2 sm:p-3 border-t border-gray-200'
								>
									<div className='flex gap-1 sm:gap-2'>
										<input
											type='text'
											value={chatMessage}
											onChange={e => setChatMessage(e.target.value)}
											placeholder='Escribe tu mensaje...'
											className='flex-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-gray-200 focus:outline-none focus:border-sky-400 text-xs sm:text-sm'
										/>
										<button
											type='submit'
											disabled={isChatLoading}
											className='px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-sky-400 to-green-400 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 text-xs sm:text-sm'
										>
											Enviar
										</button>
									</div>
								</form>
							</div>
						)}
					</div>

					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/home2' element={<Home2 />} />
						<Route path='/about' element={<About />} />
						<Route path='/believe' element={<Believe />} />
						<Route path='/history' element={<History />} />
						<Route path='/mi-pension' element={<NuevoSimulador />} />
						<Route path='/contactar-asesor' element={<ContactAsesores />} />
						<Route
							path='asesores'
							element={
								<Suspense fallback={<Skeleton />}>
									<LazyAsesores />
								</Suspense>
							}
						/>
						<Route path='contact' element={<Contact />} />
						{/* <Route
							path='Profit'
							element={
								<h1 className='text-center text-6xl'>Proximamente...</h1>
							}
						/> */}
						<Route path='profit' element={<DataCalculation />} />
						<Route path='data' element={<Datos />} />
						<Route path='biblioteca' element={<Biblioteca />} />
						<Route path='como-voy-con-mi-pension' element={<MyFunds />} />
						<Route
							path='pension-analytics'
							element={
								<h1 className='text-center text-6xl'>Proximamente...</h1>
							}
						/>
						<Route
							path='pension-labs'
							element={
								<h1 className='text-center text-6xl'>Proximamente...</h1>
							}
						/>
						<Route path='/biblioteca/oecd' element={<Oecd />} />
						<Route path='/biblioteca/robert-merton' element={<Robert />} />
						<Route path='/biblioteca/jose-pinera' element={<JosePinera />} />
						<Route
							path='/biblioteca/tomas-fernandez'
							element={<TomasFernandez />}
						/>
						<Route
							path='/biblioteca/superintendencia-de-pensiones'
							element={<SuperIntendencia />}
						/>
						<Route path='/biblioteca/fiap' element={<Fiap />} />
						<Route path='/biblioteca/otros' element={<Otros />} />
						<Route path='/biblioteca/fen-uchile' element={<Fen />} />
						<Route path='/biblioteca/olivia-mitchell' element={<Olivia />} />
						<Route path='/biblioteca/mercer' element={<Mercer />} />
						<Route path='home2' element={<Home />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</IdiomaProvider>
		</div>
	)
}

export default App
