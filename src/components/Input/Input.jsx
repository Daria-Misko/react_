import "../../App.css";

const Input = ({ placeholder, onChange }) => {
	const handleChange = (event) => {
		onChange(event.target.value);
	};
	return (
		<form className="form">
			<input
				className="input"
				placeholder={placeholder}
				onChange={handleChange}
			></input>
		</form>
	);
};

export { Input };
