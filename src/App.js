import React, { Fragment, useState } from "react";
import "./App.css";
import shortid from "shortid";
import Usertable from "./Components/Usertable";
import AddUserForm from "./Components/AddUserForm";

function App() {
	const usersData = [
		{ id: shortid.generate(), name: "Tania", username: "floppydiskette" },
		{ id: shortid.generate(), name: "Craig", username: "siliconeidolon" },
		{ id: shortid.generate(), name: "Ben", username: "benisphere" },
	];

	//State
	const [users, setUsers] = useState(usersData);

	//Agregar usuario
	const addUser = (user) => {
		user.id = shortid.generate();
		setUsers([...users, user]);
	};

	return (
		<Fragment>
			<div className="container">
				<h1>CRUD App with Hooks</h1>
				<div className="flex-row">
					<div className="flex-large">
						<h2>Add user</h2>
						<AddUserForm addUser={addUser} />
					</div>
					<div className="flex-large">
						<h2>View users</h2>
						<Usertable users={users} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
