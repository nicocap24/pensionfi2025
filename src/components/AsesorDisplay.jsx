import React, { useState } from 'react'
import img from '../assets/img/user.png'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const AsesorDisplay = ({ nombre, idTipo, tipoAsesor }) => {
	const [tipo, setTipo] = useState('')
	// console.log(tipoAsesor)
	// tipoAsesor.forEach(el => {
	// 	if (el.id_tipo_asesor == idTipo) setTipo(el.descripcion)
	// })
	return (
		<div className='w-full lg:w-3/4 flex flex-row justify-between p-8 rounded-2xl drop-shadow-lg border border-gray-300 bg-gray-200'>
			<div className='flex flex-row'>
				<div className='w-16 mr-2'>
					<img src={img} alt='' />
				</div>
				<div>
					<span className='inline-flex items-center rounded-md bg-green-200 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>
						Badge
					</span>
					<p className='text-lg font-bold max-w-[250px]'>{nombre}</p>
					<p className='text-xs'></p>
				</div>
			</div>
			<div>
				<h3 className='text-center text-xl font-bold'>Datos</h3>
				<div className='flex flex-row items-center justify-center gap-x-2'>
					<FaPhoneSquareAlt className='text-md text-primario' />
					<p>
						<strong>Teléfono: </strong>xxxxxxxxx
					</p>
				</div>
				<div className='flex flex-row items-center justify-center gap-x-2'>
					<MdEmail className='text-md text-primario' />
					<p>
						<strong>Email: </strong>xxxxxxxxx
					</p>
				</div>
			</div>
			<div className=' flex items-center'>
				<p className='text-2xl'>Comuna</p>
			</div>
		</div>
	)
}

export default AsesorDisplay
