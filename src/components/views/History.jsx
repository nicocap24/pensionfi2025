import React, { useContext } from 'react'
import IdiomaContext from '/src/Context/IdiomaContext'
import { Helmet } from 'react-helmet'

const History = () => {
	const { textos, handleAllDropdowns } = useContext(IdiomaContext)
	return (
		<div onClick={handleAllDropdowns} className='w-full flex flex-col px-2'>
			<Helmet>
				<title>Pension FI | {textos.menu.history}</title>
				{/* <!-- Facebook Meta Tags --> */}
				<meta
					property='og:title'
					content={('Pension FI | ', textos.menu.history)}
				/>
				<meta property='og:url' content={URL} />
				{/* <!-- Twitter Meta Tags --> */}
				<meta property='twitter:url' content={URL} />
				<meta
					name='twitter:title'
					content={('Pension FI | ', textos.menu.history)}
				/>
			</Helmet>
			<h1 className='text-center font-bold text-2xl'>{textos.history.title}</h1>
			<h2 className='text-center italic text-gray-400 font-semibold mb-4'>
				{textos.history.sub}
			</h2>
			<div className='flex flex-col gap-y-2 md:gap-y-6'>
				{textos.history.desc}
			</div>
		</div>
	)
}

export default History
