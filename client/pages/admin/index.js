import React from "react";

const admin = () => {
	const [file, setFile] = React.useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append("name", "info.name");
		formData.append("image", file);

		fetch("http://localhost:8000/products", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((e) => console.log("error"));
	};

	return (
		<div>
			<p>This is admin page</p>
			<form onSubmit={handleSubmit}>
				<input type="file" onChange={(e) => setFile(e.target.files[0])} />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default admin;
