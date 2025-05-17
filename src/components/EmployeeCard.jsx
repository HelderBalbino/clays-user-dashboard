const EmployeeCard = ({ employee }) => {
	return (
		<div className='bg-white rounded-lg shadow p-4'>
			<img
				src={employee.image}
				alt={employee.name}
				className='rounded-full w-24 h-24 mx-auto'
			/>
		</div>
	);
};
