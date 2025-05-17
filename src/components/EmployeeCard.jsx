const EmployeeCard = ({ employee }) => {
	return (
		<div className='bg-white rounded-lg shadow p-4'>
			<img
				src={employee.image}
				alt={employee.name}
				className='rounded-full w-24 h-24 mx-auto'
			/>
			<h2 className='text-center mt-2 font-semibold'>{employee.name}</h2>
		</div>
	);
};

export default EmployeeCard;
