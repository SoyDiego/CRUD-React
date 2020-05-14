import React, { Fragment, useState } from "react";
import "./App.css";
import shortid from "shortid";
import Usertable from "./Components/Usertable";
import AddUserForm from "./Components/AddUserForm";
import EditUserForm from "./Components/EditUserForm";

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

	//Borrar Usuario
	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	//Editar Usuario
	const [editing, setEditing] = useState(false);

	const [currentUser, setCurrentUser] = useState({
		id: null,
		name: '',
		username: ''
	})

	const editRow = (user) => {
		setEditing(true);
		setCurrentUser({
			id: user.id,
			name: user.name,
			username: user.username
		})
	}

	//Update User
	const updateUser = (id, updateUser) => {
		setEditing(false)
		setUsers(users.map(user => ( user.id === id ? updateUser : user)))
	}	

	return (
		<Fragment>
			<div className="container">
				<h1>CRUD App with Hooks</h1>
				<div className="flex-row">
					<div className="flex-large">
						{editing ? (
							<div>
								<h2>Edit user</h2>
								<EditUserForm
								currentUser={currentUser}
								updateUser={updateUser} />
							</div>
						) : (
							<div>
								<h2>Add user</h2>
								<AddUserForm addUser={addUser} />
							</div>
						)}
					</div>
					<div className="flex-large">
						<h2>View users</h2>
						<Usertable users={users} editUser={setEditing} deleteUser={deleteUser} editRow={editRow} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
