//@flow
import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Error404 from "./pages/404/Error404";
import Category from "./pages/category/Category";
import Categories from "./pages/categories/Categories";
import Confirm from "./components/confirmed/Confirm";
import AddAppointment from "./components/appointment/AddAppointment";
import AppointmentInfo from "./components/appointment/AppointmentInfo";
import Blog from "./pages/blog/Blog";

const App = () => {
	return (
		<div className="container mx-10">
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home title="Welcome to the Concert" />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="register" element={<Register />} />
					<Route path="blog" element={<Blog />} />
					<Route path="login" element={<Login />} />
					<Route path="categories" element={<Categories />}>
					<Route index element={<h1>Select Category from Above</h1>} />
						<Route path=":catId" element={<Category />} />
					</Route>
					<Route path="*" element={<Error404 />} />
					<Route path="/confirmed" element={<Confirm/>} />
					<Route path="/add-appointment" element={<AddAppointment/>} />
					<Route path="/appointments" element={<AppointmentInfo/>} />

				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};
export default App;
