import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ placeholder, onChange, inputWidth, value }) => {
	const handleChange = (event) => {
		onChange(event.target.value);
	};
	return (
		<input
			className="input"
			placeholder={placeholder}
			onChange={handleChange}
			style={{ width: inputWidth }}
			value={value}
		></input>
	);
};

Input.propTypes = {
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	inputWidth: PropTypes.number,
	value: PropTypes.number,
};

export { Input };
