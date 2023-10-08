import PropTypes from "prop-types";
import "./TaskInput.css";
import { useRef } from "react";
import { toast } from "react-hot-toast";

const TaskInput = ({ placeholder, addTask, inputWidth }) => {
	const inputRef = useRef();

	const handleSubmit = () => {
		const taskValue = inputRef.current.value;

		if (taskValue.length >= 3) {
			addTask(taskValue);
			inputRef.current.value = "";
		} else {
			toast.error("Type at least 3 symbols");
		}
	};

	return (
		<div className="input-wrapper">
			<input
				ref={inputRef}
				className="input"
				placeholder={placeholder}
				style={{ width: inputWidth }}
			></input>
			<button
				className="btn btn-primary"
				type="button"
				onClick={handleSubmit}
			>
				Add
			</button>
		</div>
	);
};

TaskInput.propTypes = {
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	inputWidth: PropTypes.number,
};

export { TaskInput };
