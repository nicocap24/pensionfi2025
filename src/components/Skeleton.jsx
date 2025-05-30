import React from 'react'

const Skeleton = () => {
	return (
		<section className='bg-white '>
			<div className='container px-6 py-10 mx-auto animate-pulse'>
				<h1 className='w-48 h-8 mx-auto bg-gray-200 rounded-lg '></h1>
				<div className='flex flex-col gap-4 mt-8 '>
					<div className='w-full  rounded-lg '>
						<div className='w-full h-32 bg-gray-300 rounded-lg p-8 flex flex-col justify-center '>
							<h1 className='w-56 h-2 mt-4 bg-gray-400 rounded-lg '></h1>
							<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg '></p>
						</div>
					</div>
					<div className='w-full  rounded-lg '>
						<div className='w-full h-32 bg-gray-300 rounded-lg p-8 flex flex-col justify-center '>
							<h1 className='w-56 h-2 mt-4 bg-gray-400 rounded-lg '></h1>
							<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg '></p>
						</div>
					</div>
					<div className='w-full  rounded-lg '>
						<div className='w-full h-32 bg-gray-300 rounded-lg p-8 flex flex-col justify-center '>
							<h1 className='w-56 h-2 mt-4 bg-gray-400 rounded-lg '></h1>
							<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg '></p>
						</div>
					</div>
					<div className='w-full  rounded-lg '>
						<div className='w-full h-32 bg-gray-300 rounded-lg p-8 flex flex-col justify-center '>
							<h1 className='w-56 h-2 mt-4 bg-gray-400 rounded-lg '></h1>
							<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg '></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skeleton
