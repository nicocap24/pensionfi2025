import React, { useEffect, useState } from 'react'
import CurrencyInput from 'react-currency-input-field'
import GaugeComponent from 'react-gauge-component'
const MyFunds = () => {
	const [cnu, setCNU] = useState(0)
	const [meta, setMeta] = useState(0)
	const [saldoFuturo, setSaldoFuturo] = useState(0)
	const [pensionEsperada, setPensionEsperada] = useState(0)
	const [cumplimiento, setCumplimiento] = useState(0)
	const [edadJubilacion, setedadJubilacion] = useState(65)
	const rentaAnualPorcentaje = 0.02
	const [conyuge, setConyuge] = useState('no')
	const [pension, setPension] = useState(0)
	const [afp, setAfp] = useState(0)
	const [age, setAge] = useState(0)
	const [gender, setGender] = useState('M')
	const [kids, setKids] = useState(0)
	const [kidsTooltipPosition, setKidsTooltipPosition] = useState(0)
	const [isKidsDragging, setIsKidsDragging] = useState(false)
	const [tooltipPosition, setTooltipPosition] = useState(0)
	const [isDragging, setIsDragging] = useState(false) // Nuevo estado para controlar si el slider está siendo presionado

	const [limit25, setLimit25] = useState(0)
	const [limit50, setLimit50] = useState(0)
	const [limit75, setLimit75] = useState(0)

	const handleSliderChange = e => {
		const newAge = Number(e.target.value)
		setAge(newAge)

		// Calcular la posición del tooltip basada en el valor del slider
		const sliderWidth = e.target.offsetWidth
		const thumbWidth = 16 // Aprox. ancho del controlador del slider (puedes ajustar esto)
		const newPosition = ((newAge - 18) / (65 - 18)) * (sliderWidth - thumbWidth)
		setTooltipPosition(newPosition)
	}

	const handleMouseDown = () => {
		setIsDragging(true) // Activar tooltip al presionar el slider
	}

	const handleMouseUp = () => {
		setIsDragging(false) // Desactivar tooltip al soltar el slider
	}
	const handleKidsSliderChange = e => {
		const newKids = Number(e.target.value)
		setKids(newKids)

		// Calcular la posición del tooltip basada en el valor del slider
		const sliderWidth = e.target.offsetWidth
		const thumbWidth = 16 // Aprox. ancho del controlador del slider (puedes ajustar esto)
		const newPosition = (newKids / 10) * (sliderWidth - thumbWidth)
		setKidsTooltipPosition(newPosition)
	}

	const handleKidsMouseDown = () => {
		setIsKidsDragging(true) // Activar tooltip al presionar el slider
	}

	const handleKidsMouseUp = () => {
		setIsKidsDragging(false) // Desactivar tooltip al soltar el slider
	}

	//Set Moneda
	const handlePension = newValue => {
		if (newValue === undefined) {
			setPension(0)
		} else {
			setPension(Number(newValue))
		}
	}

	const handleSaldoAfp = newValue => {
		if (newValue === undefined) {
			setAfp(0)
		} else {
			setAfp(Number(newValue))
		}
	}
	// edad jubilacion
	useEffect(() => {
		if (gender === 'F') {
			setedadJubilacion(60)
		}
		if (gender === 'M') {
			setedadJubilacion(65)
		}
	}, [gender])
	// Cálculo de la meta
	useEffect(() => {
		const newMeta = pension * cnu * 12
		setMeta(Number(newMeta))
	}, [pension, cnu])

	// Cálculo CNU
	useEffect(() => {
		let newCNU = 0
		if (gender === 'M' && conyuge === 'no' && kids === 0) newCNU = 14.7
		if (gender === 'M' && conyuge === 'si' && kids === 0) newCNU = 17.87
		if (gender === 'M' && conyuge === 'si' && kids > 0) newCNU = 17.89
		if (gender === 'M' && conyuge === 'no' && kids > 0) newCNU = 15.66
		if (gender === 'F' && conyuge === 'no' && kids === 0) newCNU = 18.2
		if (gender === 'F' && conyuge === 'si' && kids === 0) newCNU = 19.72
		if (gender === 'F' && conyuge === 'si' && kids > 0) newCNU = 19.73
		if (gender === 'F' && conyuge === 'no' && kids > 0) newCNU = 18.96

		setCNU(newCNU)
		console.log(cnu)
	}, [gender, conyuge, kids])
	const handleCalc = () => {
		// Cálculo del saldo futuro
		const exponente = edadJubilacion - age
		const newSaldoFuturo = Math.round(
			afp * Math.pow(1 + rentaAnualPorcentaje, exponente),
		)
		setSaldoFuturo(newSaldoFuturo)

		// Cálculo de la pensión esperada
		const denominador = cnu * 12
		const newPensionEsperada = (newSaldoFuturo / denominador).toFixed(2)
		setPensionEsperada(Number(newPensionEsperada))

		// Cálculo de los límites para el gráfico
		const newLimit25 = newPensionEsperada * 0.25
		const newLimit50 = newPensionEsperada * 0.5
		const newLimit75 = newPensionEsperada * 0.75

		setLimit25(newLimit25)
		setLimit50(newLimit50)
		setLimit75(newLimit75)

		// Cálculo de cumplimiento
		const N = Math.round((newPensionEsperada / Number(pension)) * 100)
		const newCumplimiento = N.toFixed(2)
		setCumplimiento(Number(newCumplimiento))
	}

	return (
		<div className='w-full flex flex-col md:flex-row pb-4 px-2'>
			<div className='w-full md:w-1/3 flex flex-col items-center p-8 gap-y-4 rounded-2xl border-2 bg-white shadow-xl  '>
				<h1 className='text-center mb-3 font-bold text-2xl'>
					Modifica tus respuestas
				</h1>
				<div className='w-full flex flex-col items-center'>
					<p className='text-[20px]  font-semibold text-black font-quasimoda'>
						Tu meta
					</p>
					<CurrencyInput
						intlConfig={{ locale: 'es-CL', currency: 'CLP' }}
						allowDecimals
						decimalSeparator=','
						id='input-currency-field'
						name='input-currency-field-name'
						prefix='$'
						value={pension}
						onValueChange={handlePension}
						step={1}
						className='focus:border-primary w-full focus:outline-none py-4 px-6 rounded-2xl border-2 border-slate-300'
					/>
				</div>
				<div className='w-full flex flex-col  items-center'>
					<p className='text-[20px] font-semibold text-black font-quasimoda'>
						Saldo AFP
					</p>
					<CurrencyInput
						intlConfig={{ locale: 'es-CL', currency: 'CLP' }}
						allowDecimals
						decimalSeparator=','
						id='input-currency-field'
						name='input-currency-field-name'
						prefix='$'
						value={afp}
						onValueChange={handleSaldoAfp}
						step={1}
						className='focus:border-primary focus:outline-none py-4 px-6 w-full rounded-2xl border-2 border-slate-300'
					/>
				</div>

				<div className='relative w-full'>
					<div className='flex items-center'>
						<label htmlFor='customRange2' className='mr-2'>
							Edad
						</label>
						<input
							min='18'
							max='65'
							value={age}
							onChange={handleSliderChange}
							onMouseDown={handleMouseDown} // Detecta cuando se presiona el slider
							onMouseUp={handleMouseUp} // Detecta cuando se suelta el slider
							onTouchStart={handleMouseDown} // Para dispositivos táctiles
							onTouchEnd={handleMouseUp} // Para dispositivos táctiles
							type='range'
							className='block w-full py-2 mt-2 text-gray-700 border accent-primary border-transparent bg-neutral-200 rounded-md focus:border-primary-with-opacity focus:outline-none'
							id='customRange2'
						/>
					</div>

					{/* Tooltip */}
					{isDragging && ( // Mostrar tooltip solo cuando se está presionando el slider
						<div
							className='absolute top-4 left-0 transform -translate-y-full -translate-x-1/12 p-2 bg-black text-white text-xs rounded-md'
							style={{ left: `calc(${tooltipPosition}px + 8px)` }} // Ajuste a la derecha
						>
							{age} años
						</div>
					)}
				</div>

				<div className='flex w-full justify-between '>
					<div className=''>
						<p>Tienes conyugue:</p>
					</div>
					<div>
						<label className='relative inline-flex cursor-pointer items-center'>
							<input
								type='checkbox'
								value={conyuge}
								onChange={e =>
									e.target.checked ? setConyuge('si') : setConyuge('no')
								}
								className='peer sr-only'
							/>
							<label htmlFor='switch' className='hidden' />
							<div className="peer h-6 w-11 rounded-full border bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primario peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
						</label>
					</div>
				</div>
				<div className='w-full flex flex-col gap-y-6 justify-center items-center'>
					<p>¿Cuál es tu género?</p>
					<div className='flex flex-col gap-y-4'>
						<label className='flex items-center gap-x-2'>
							<input
								type='radio'
								name='sexo'
								value='M'
								onChange={() => setGender('M')}
								className='h-5 w-5 appearance-none rounded-full border-2 border-secundario checked:bg-primario checked:border-primario'
								defaultChecked
							/>
							<span className='font-quasimoda'>Masculino</span>
						</label>

						<label className='flex items-center gap-x-2'>
							<input
								type='radio'
								name='sexo'
								value='F'
								onChange={() => setGender('F')}
								className='h-5 w-5 appearance-none rounded-full border-2 border-secundario checked:bg-primario checked:border-primario'
							/>
							<span className='font-quasimoda'>Femenino</span>
						</label>
					</div>
				</div>
				<div className='relative w-full'>
					<div className='flex items-center'>
						<label htmlFor='customRange1' className='mr-2'>
							Hijos
						</label>
						<input
							min='0'
							max='10'
							value={kids}
							onChange={handleKidsSliderChange}
							onMouseDown={handleKidsMouseDown}
							onMouseUp={handleKidsMouseUp}
							onTouchStart={handleKidsMouseDown}
							onTouchEnd={handleKidsMouseUp}
							type='range'
							className='block w-full py-2 mt-2 text-gray-700 border accent-primary border-transparent bg-neutral-200 rounded-md focus:border-primary-with-opacity focus:outline-none'
							id='customRange1'
						/>
					</div>

					{/* Tooltip para el slider de Hijos */}
					{isKidsDragging && (
						<div
							className='absolute top-4 left-0 transform -translate-y-full -translate-x-1/12 p-2 bg-black text-white text-xs rounded-md'
							style={{ left: `calc(${kidsTooltipPosition}px + 8px)` }}
						>
							{kids} hijos
						</div>
					)}
				</div>

				<button
					className='bg-primario p-2 max-w-40 rounded-lg'
					onClick={handleCalc}
				>
					Calcular
				</button>
			</div>
			<div className='w-full md:w-2/3 flex flex-col justify-center items-center'>
				<GaugeComponent
					type='semicircle'
					arc={{
						width: 0.2,
						padding: 0.005,
						cornerRadius: 1,
						subArcs: [
							{
								limit: 0,
								color: '#EA4228',
								showTick: true,
								tooltip: {
									text: '¡Límite: $1.000.000 CLP!',
								},
							},
							{
								limit: 25,
								color: '#f51919',
								showTick: true,
								tooltip: {
									text: 'MALO',
								},
							},
							{
								limit: 75,
								color: '#f0ec17',
								showTick: true,
								tooltip: {
									text: 'REGULAR',
								},
							},
							{
								limit: 100,
								color: '#05e143',
								showTick: true,
								tooltip: {
									text: '¡EXCELENTE!',
								},
							},
							{
								color: '#EA4228',
								tooltip: {
									text: '¡Excedido!',
								},
							},
						],
					}}
					pointer={{
						color: '#345243',
						length: 0.8,
						width: 15,
					}}
					labels={{
						valueLabel: { formatTextValue: value => value + '%' },
						tickLabels: {
							type: 'outer',
							valueConfig: {
								formatTextValue: value => value + 'ºC',
								fontSize: 10,
							},
							ticks: [{ value: 25 }, { value: 75 }, { value: 100 }],
						},
					}}
					value={cumplimiento}
					minValue={0}
					maxValue={100}
					className='w-full'
				/>
				<div className='labels'>
					<p>Saldo meta {`$${meta.toLocaleString('es-CL')} CLP`}</p>
					<p>futuro {`$${saldoFuturo.toLocaleString('es-CL')} CLP`}</p>
					<p>esperada {`$${pensionEsperada.toLocaleString('es-CL')} CLP`}</p>
					<p>Cumplimeinto {cumplimiento}</p>
				</div>
			</div>
		</div>
	)
}

export default MyFunds
