import "./Input.css";

const Input = ({ placeholder, onChange }) => {
	const handleChange = (event) => {
		onChange(event.target.value);
	};
	return (
		<input
			className="input"
			placeholder={placeholder}
			onChange={handleChange}
		></input>
	);
};

export { Input };
