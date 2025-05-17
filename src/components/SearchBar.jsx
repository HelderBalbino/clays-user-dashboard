const SearchBar = ({ setSearchTerm }) => {
	return (
		<input
			type='text'
			placeholder='Search by name'
			onChange={(e) => setSearchTerm(e.target.value)}
			className='p-2 border rounded w-full mt-4'
		/>
	);
};

export default SearchBar;
