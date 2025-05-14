import { useState, useEffect } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import SearchBar from '../components/SearchBar';
import FilterMenu from '../components/FilterMenu';

const Dashboard = () => {
	const [employees, setEmployees] = useState([]); // All employee data
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
