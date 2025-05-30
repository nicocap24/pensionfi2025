import React, { useState } from 'react'
import ReactSpeedometer from 'react-d3-speedometer'

const NuevoSimulador = () => {
	const [value, setValue] = useState(0)
	const [sliderValue, setSliderValue] = useState(0)
	const [count, setCount] = useState(0)

	const handleSlider = e => {
		setSliderValue(Number(e.target.value))

		console.log('slider: ', sliderValue)
		console.log('valor: ', count)
		if (value < 1000) {
			if (sliderValue <= count) {
				// console.log('restando: ', value)
				setValue(value - 100)
			} else {
				setValue(value + 100)
				// console.log('sumando: ', value)
			}
		} else {
			return
		}
		setCount(sliderValue)
	}
	return (
		<div className='flex flex-col  w-full py-6 items-center gap-y-8 text-center'>
			<h1>Es mi pensión</h1>
			<p>¿Con cuánto deseas jubilar?</p>
			<input
				type='text'
				className='border border-gray-300 rounded-md p-2'
				placeholder='Ingrese cantidad'
			/>
			<p>¿Cuánto tienes en la AFP actualmente?</p>
			<input
				type='text'
				className='border border-gray-300 rounded-md p-2'
				placeholder='Ingrese cantidad'
			/>
			<ReactSpeedometer
				width={500}
				needleHeightRatio={0.7}
				value={value}
				customSegmentStops={[0, 250, 750, 1000]}
				segmentColors={['#fc6a6a', '#fffb14', '#0ed007']}
				currentValueText='How are you?'
				customSegmentLabels={[
					{
						text: 'Mal',

						position: 'OUTSIDE',

						color: '#460707',
					},

					{
						text: 'Reglar',

						position: 'OUTSIDE',

						color: '#d6bc0f',
					},

					{
						text: '¡Excelente!',

						position: 'OUTSIDE',

						color: '#02a91d',
					},
				]}
				ringWidth={47}
				needleTransitionDuration={3333}
				needleTransition='easeElastic'
				needleColor={'#a7ff83'}
				textColor={'#d8dee9'}
			/>
			<p>Ajustes personalizados</p>
			<div className='flex flex-row '>
				<div className='w-6 mr-8'>
					<p>Hombre</p>
				</div>
				<div>
					<label className='relative inline-flex cursor-pointer items-center'>
						<input
							type='checkbox'
							onChange={e =>
								e.target.checked ? setValue(value + 77) : setValue(value - 77)
							}
							className='peer sr-only'
						/>
						<label htmlFor='switch' className='hidden'></label>
						<div className="peer h-6 w-11 rounded-full border bg-secundario after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primario peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
					</label>
				</div>
				<div className='w-6'>
					<p>Mujer</p>
				</div>
			</div>
			<div>
				<label className='mr-2'>Conyuge</label>
				<input
					type='checkbox'
					onClick={e => setValue(e.target.checked ? value + 77 : value - 77)}
				/>
			</div>
			<div>
				<label htmlFor='customRange1' className='mb-2 inline-block '>
					Hijos
				</label>
				<input
					min='0'
					max='6'
					value={sliderValue}
					onChange={handleSlider}
					type='range'
					className='transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200'
					id='customRange1'
				/>
				<div>{sliderValue}</div>
			</div>
		</div>
	)
}

export default NuevoSimulador
