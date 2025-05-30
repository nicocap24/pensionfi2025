import React, { useState, useEffect } from 'react'
import '../App.css'
import DatePicker from 'react-datepicker'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { es } from 'date-fns/locale'
import { startOfYear } from 'date-fns'
import { FaCalendarAlt } from 'react-icons/fa'
import 'react-datepicker/dist/react-datepicker.css'
import ChartComponent from './ChartComponent '

// Registrar y establecer la localización en español
registerLocale('es', es)
setDefaultLocale('es')

const DataCalculation = () => {
	// Obtén la fecha actual
	const today = new Date()

	// Establece el primer día del año
	const firstDayOfYear = startOfYear(today)

	const [fetchData, setFetchData] = useState([])
	const [data, setData] = useState([])
	const [titulo, setTitulo] = useState('')
	const [listaFondos, setListaFondos] = useState([])
	const [listaAFPs, setListaAFPs] = useState([])
	const [loading, setLoading] = useState(false)
	const [fechaInicial, setFechaInicial] = useState(firstDayOfYear)
	const [fechaFinal, setFechaFinal] = useState(today)
	const [noData, setNoData] = useState(false)
	const [actualizado, setActualizado] = useState('')

	const handleCheckboxChange = fondo => {
		setListaFondos(prevState => {
			if (prevState.includes(fondo)) {
				return prevState.filter(item => item !== fondo)
			} else {
				return [...prevState, fondo]
			}
		})
	}

	const handleSelectChange = e => {
		const selectedValue = e.target.value
		if (selectedValue !== 'select') {
			setListaAFPs([selectedValue])
		} else {
			setListaAFPs([])
		}
	}
	const formatearFecha = fecha => {
		const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' }
		return new Date(fecha).toLocaleDateString('es-ES', opciones)
	}

	const apiUrl = import.meta.env.VITE_APP_API_URL || window.location.origin

	const handleBuscar = async e => {
		e.preventDefault()
		setLoading(true)
		setNoData(false)
		setActualizado('')
		// Formatear las fechas antes de enviarlas a la API
		const fechaInicialFormateada = fechaInicial
			? formatearFecha(fechaInicial)
			: ''
		const fechaFinalFormateada = fechaFinal ? formatearFecha(fechaFinal) : ''

		await fetch(`${apiUrl}/ObtenerCuotas`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				listaAFPs,
				listaFondos,
				fechaInicial: fechaInicialFormateada,
				fechaFinal: fechaFinalFormateada,
			}),
		})
			.then(r => r.json())
			.then(res => {
				if (res.length === 0) {
					setNoData(true)
				} else {
					const last = res[res.length - 1].fecha
					setFetchData(res)
					console.log(res)
				}
				setLoading(false)
			})
			.catch(e => {
				console.log(e)
				setLoading(false)
			})
	}

	useEffect(() => {
		if (fetchData.length > 0) {
			setTitulo(fetchData[0].afp)
			console.log(fetchData)
			const fondos = [
				fetchData[fetchData.length - 5],
				fetchData[fetchData.length - 4],
				fetchData[fetchData.length - 3],
				fetchData[fetchData.length - 2],
				fetchData[fetchData.length - 1],
			]

			// Crear un objeto para almacenar las fechas por fondo
			const fechasActualizadas = {}

			const valorIniciales = {} // Almacenar valores iniciales de cada fondo
			const rentabilidades = {} // Almacenar rentabilidades calculadas para cada fondo

			// Recorrer los datos para establecer los valores iniciales
			fetchData.forEach(element => {
				if (!valorIniciales[element.fondo]) {
					valorIniciales[element.fondo] = element.valor
				}
			})

			const newData = fetchData.map(element => {
				const valorInicial = valorIniciales[element.fondo]
				const rentabilidad =
					((element.valor - valorInicial) / valorInicial) * 100
				const [year, month, day] = element.fecha.split('-').map(Number)
				const date = new Date(year, month - 1, day)
				const timestamp = date.getTime()
				const rentabilidadFormateada = Number(rentabilidad)
				// console.log(element.fecha)
				switch (element.fondo) {
					case 'A':
						rentabilidades.fondoA = rentabilidadFormateada
						break
					case 'B':
						rentabilidades.fondoB = rentabilidadFormateada
						break
					case 'C':
						rentabilidades.fondoC = rentabilidadFormateada
						break
					case 'D':
						rentabilidades.fondoD = rentabilidadFormateada
						break
					case 'E':
						rentabilidades.fondoE = rentabilidadFormateada
						break
					default:
						break
				}

				return {
					date: timestamp,
					value1: rentabilidades.fondoA,
					value2: rentabilidades.fondoB,
					value3: rentabilidades.fondoC,
					value4: rentabilidades.fondoD,
					value5: rentabilidades.fondoE,
				}
			})
			setData(newData)
		}

		// setActualizado('Datos actualizados hasta: ' + last)
		// console.log('Datos actualizados hasta: ' + last)
	}, [fetchData])
	return (
		<>
			<div className='flex flex-col lg:flex-row items-center gap-y-2 gap-x-2 bg-white mb-4'>
				<div className='flex flex-col lg:flex-row  gap-y-2 gap-x-2'>
					<div className='flex relative w-full md:min-w-36'>
						<DatePicker
							selected={fechaInicial}
							locale='es'
							onChange={date => setFechaInicial(date)}
							dateFormat='dd/MM/yyyy'
							className='w-full border-2 border-primario rounded-lg text-center p-2 pl-6 focus:border-none'
						/>
						<FaCalendarAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-primario' />
					</div>

					<div className='relative w-full md:min-w-36'>
						<DatePicker
							selected={fechaFinal}
							locale='es'
							onChange={date => setFechaFinal(date)}
							dateFormat='dd/MM/yyyy'
							className='w-full border-2 border-primario rounded-lg text-center p-2 pl-6 focus:border-none'
						/>
						<FaCalendarAlt className='absolute left-2 top-1/2 transform -translate-y-1/2 text-primario' />
					</div>
				</div>
				<select
					onChange={handleSelectChange}
					className='border-2  border-primario rounded-lg text-center p-2 focus:border-none'
				>
					<option value='select'>-AFP-</option>
					<option value='CUPRUM'>AFP Cuprum</option>
					<option value='HABITAT'>AFP Habitat </option>
					<option value='MODELO'>AFP Modelo</option>
					<option value='PLANVITAL'>AFP PlanVital </option>
					<option value='PROVIDA'>AFP ProVida</option>
					<option value='UNO'>AFP Uno</option>
				</select>
				<div className='flex md:w-full '>
					<div className='flex flex-wrap gap-x-4 w-full justify-center'>
						<label className='inline-flex items-center mt-3'>
							<input
								type='checkbox'
								className='form-checkbox h-5 w-5 text-orange-600'
								onChange={() => handleCheckboxChange('A')}
							/>
							<span className='ml-2 text-gray-700'>FONDO A</span>
						</label>
						<label className='inline-flex items-center mt-3'>
							<input
								type='checkbox'
								className='form-checkbox h-5 w-5 text-orange-600'
								onChange={() => handleCheckboxChange('B')}
							/>
							<span className='ml-2 text-gray-700'>FONDO B</span>
						</label>
						<label className='inline-flex items-center mt-3'>
							<input
								type='checkbox'
								className='form-checkbox h-5 w-5 text-orange-600'
								onChange={() => handleCheckboxChange('C')}
							/>
							<span className='ml-2 text-gray-700'>FONDO C</span>
						</label>
						<label className='inline-flex items-center mt-3'>
							<input
								type='checkbox'
								className='form-checkbox h-5 w-5 text-orange-600'
								onChange={() => handleCheckboxChange('D')}
							/>
							<span className='ml-2 text-gray-700'>FONDO D</span>
						</label>
						<label className='inline-flex items-center mt-3'>
							<input
								type='checkbox'
								className='form-checkbox h-5 w-5 text-orange-600'
								onChange={() => handleCheckboxChange('E')}
							/>
							<span className='ml-2 text-gray-700 focus:bg-acento'>
								FONDO E
							</span>
						</label>
					</div>
				</div>
				<button
					className={`px-4 py-2 rounded-lg text-white ${
						listaAFPs.length === 0 || listaFondos.length === 0 || loading
							? 'bg-primario'
							: 'bg-acento'
					}`}
					onClick={handleBuscar}
					disabled={listaAFPs.length == 0 || listaFondos.length == 0 || loading}
				>
					{loading ? (
						<div className='text-center  col-span-2' role='status'>
							<svg
								aria-hidden='true'
								className='inline w-8 h-8 text-secundario animate-spin  fill-green-500'
								viewBox='0 0 100 101'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
									fill='currentColor'
								/>
								<path
									d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
									fill='currentFill'
								/>
							</svg>
							<span className='sr-only'>Calculando...</span>
						</div>
					) : (
						'Comparar'
					)}
				</button>
			</div>
			<ChartComponent
				data={data}
				graphTitle={titulo}
				time={'year'}
				noData={noData}
				actualizado={actualizado}
				interval={1}
			/>
		</>
	)
}

export default DataCalculation
