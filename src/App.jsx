import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

const App = () => {
	return (
		<div>
			<Router>
				<HeaderComponent />

				<div className="container">
					<Routes>
						<Route exact path="/" element={<ListEmployeeComponent />}></Route>
						<Route exact path="/*" element={<ListEmployeeComponent />}></Route>
						<Route
							exact
							path="/employees"
							element={<ListEmployeeComponent />}
						></Route>
						<Route
							exact
							path="/add-employee"
							element={<ListEmployeeComponent />}
						></Route>
						<Route
							exact
							path="/edit-employee/:id"
							element={<ListEmployeeComponent />}
						></Route>
					</Routes>
				</div>

				<FooterComponent />
			</Router>
		</div>
	);
};

export default App;
