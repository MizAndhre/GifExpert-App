export const GifItem = ({ titulo, url, id }) => {
	return (
		<div className='border-4 border-teal-500 shadow-white rounded-[10px] hover:scale-105 hover:cursor-pointer '>
			<img src={url} alt={titulo} className='w-full h-full object-cover  aspect-square' />

			{/* <p >{titulo}</p> */}
		</div>
	);
};
