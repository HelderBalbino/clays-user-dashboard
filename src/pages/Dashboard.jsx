import { useState, useEffect, use } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import SearchBar from '../components/SearchBar';
import FilterMenu from '../components/FilterMenu';

const Dashboard = () => {
	const [employees, setEmployees] = useState([]); // All employees data
	const [filtered, setFiltered] = useState([]); // Filtered result
	const [searchTerm, setSearchTerm] = useState('');
	const [departmentFilter, setDepartmentFilter] = useState('');

	useEffect(() => {
		fetch('/data/employees.json')
			.then((res) => res.json())
			.then((data) => {
				setEmployees(data);
				setFiltered(data);
			});
	}, []);
};

useEffect(() => {
	let result = employees;

	if (searchTerm) {
		result = result.filter((emp) =>
			emp.name.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}

	if (departmentFilter) {
		result = result.filter((emp) => emp.department === departmentFilter);
	}

	setFiltered(result);
}, [searchTerm, departmentFilter]);
