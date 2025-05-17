const FilterMenu = ({ setFilter }) => {
	return (
		<select
			onChange={(e) => setFilter(e.target.value)}
			className='p-2 border rounded mt-4 w-full'
		>
			<option value=''>All Departments</option>
			<option value='Engineering'>Engineering</option>
			<option value='Design'>Design</option>
		</select>
	);
};

export default FilterMenu;
