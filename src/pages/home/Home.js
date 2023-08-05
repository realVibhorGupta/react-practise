// @flow
import React, { useState, useCallback, useEffect } from "react";
import Search from "../../components/search/Search";
import AddAppointment from "../../components/appointment/AddAppointment";
import AppointmentInfo from "../../components/appointment/AppointmentInfo";
import TodoList from "../../components/todos/TodoList";
// import appointmentData from "../../data/appointmentData.json"

const Home = ({ title }) => {
	const [appointmentList, setAppointmentList] = useState([]);
	const [query, setQuery] = useState("");
	const [sortBy, setSortBy] = useState("petName");
	const [orderBy, setOrderBy] = useState("asc");

	const onSendAppointment = (myappoint) =>
		setAppointmentList([...appointmentList, myappoint]);

	const filteredAppointments = appointmentList
		.filter((item) => {
			return (
				item.petName.toLowerCase().includes(query.toLowerCase()) ||
				item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
				item.appNote.toLowerCase().includes(query.toLowerCase())
			);
		})
		.sort((a, b) => {
			let order = orderBy === "asc" ? 1 : -1;
			return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
				? -1 * order
				: 1 * order;
		});

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

	const onQueryChange = () => {
		(query) => setQuery(query);
	};

	return (
		<>
			<h1 className="text-4xl font-bold text-center">
				Welcome to the Tech Events{" "}
			</h1>
			<h2 className="text-2xl font-bold text-start">Todo Lists</h2>

			<TodoList />

			<h2 className="text-2xl font-bold text-start">Add An Appointment</h2>
			<AddAppointment
				onSendAppointment={onSendAppointment}
				lastId={appointmentList.reduce(
					(max, item) => (Number(item.id) > max ? Number(item.id) : max),
					0
				)}
			/>

			<Search
				query={query}
				onQueryChange={(myQuery) => setQuery(myQuery)}
				sortBy={sortBy}
				onSortByChange={(mySort) => setSortBy(mySort)}
				orderBy={orderBy}
				onOrderByChange={(myOrder) => setOrderBy(myOrder)}
			/>

			<h2 className="text-2xl font-bold text-start">Appointment List</h2>

			{filteredAppointments.map((appointment) => (
				<AppointmentInfo
					key={appointment.id}
					appointment={appointment}
					onDeleteAppointment={(appointmentId) =>
						setAppointmentList(
							appointmentList.filter(
								(appointment) => appointment.id !== appointmentId
							)
						)
					}
				/>
			))}
		</>
	);
};

export default Home;
