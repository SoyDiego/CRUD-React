import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = ({currentUser, updateUser}) => {
	const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: currentUser
    }
    );

	setValue("name", currentUser.name);
	setValue("username", currentUser.username);

	const onSubmit = (data, e) => {
        data.id = currentUser.id
        updateUser(currentUser.id, data)

		e.target.reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>Name</label>
			<input
				type="text"
				name="name"
				ref={register({
					required: { value: true, message: "Name is required." },
				})}
			/>
			<div>{errors?.name?.message}</div>
			<label>Username</label>
			<input
				type="text"
				name="username"
				ref={register({
					required: { value: true, message: "Username is required." },
				})}
			/>
			<div>{errors?.username?.message}</div>
			<button>Edit user</button>
		</form>
	);
};

export default EditUserForm;
