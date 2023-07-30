import React, { useState, useCallback, useEffect } from "react";
import Search from "../../components/search/Search";
import AddAppointment from "../../components/appointment/AddAppointment";
import AppointmentInfo from "../../components/appointment/AppointmentInfo";
// import TodoList from "../../components/todos/TodoList";
// import appointmentData from "../../data/appointmentData.json"

const Home = ({ title }) => {
	const [appointmentList, setAppointmentList] = useState([]);
	const [query, setQuery] = useState("");
	const fetchData = useCallback(() => {
		fetch("./appointmentData.json")
			.then((response) => response.json())
			.then((data) => {
				setAppointmentList(data);
			});
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const onDeleteAppointment = () => {
		(appointmentId) =>
			setAppointmentList(
				appointmentList.filter(
					(appointment) => appointment.id !== appointmentId
				)
			);
	};

	const onQueryChange = () => {
		(query) => setQuery(query);
	};


	const sortBy =()=>{}
	const onSortByChange =()=>{}
	const orderBy =()=>{}
	const onOrderByChange  =()=>{}
	return (
		<>
			<h1 className="text-4xl font-bold text-center">
				Welcome to the Tech Events{" "}
			</h1>
			<h2 className="text-2xl font-bold text-start">Todo Lists</h2>

			{/* <TodoList/> */}

			<h2 className="text-2xl font-bold text-start">Add An Appointment</h2>
			<AddAppointment />

			<Search
				query={query}
				onQueryChange={onQueryChange}
				sortBy={sortBy}
				onSortByChange={onSortByChange}
				orderBy={orderBy}
				onOrderByChange={onOrderByChange}
			/>

			<h2 className="text-2xl font-bold text-start">Appointment List</h2>
			{appointmentList.map((appointment) => (
				<AppointmentInfo
					key={appointment.id}
					appointment={appointment}
					onDeleteAppointment={onDeleteAppointment}
				/>
			))}
		</>
	);
};

export default Home;
