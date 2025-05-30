import React, { useContext } from 'react'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { IoLogoYoutube } from 'react-icons/io'
import IdiomaContext from '../Context/IdiomaContext'

const Footer = () => {
	const { textos } = useContext(IdiomaContext)
	return (
		<footer className='flex flex-row  mt-auto pb-4'>
			<h4 className='text-2xl mr-4'>{textos.footer}</h4>
			<ul className='flex flex-row m-auto gap-x-2 text-2xl text-center'>
				<li className='text-primario hover:text-secundario'>
					<a href='https://twitter.com/pensionfi' target='_blank'>
						<FaSquareXTwitter />
					</a>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
