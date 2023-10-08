import { useState } from "react";
import { Input } from "../TaskInput/TaskInput";
import "./Counter.css";

const Counter = () => {
	const [total, setTotal] = useState(
		Number(localStorage.getItem("totalValue")) || 0
	);
	const [minValue, setMinValue] = useState(
		Number(localStorage.getItem("minValue")) || 0
	);
	const [maxValue, setMaxValue] = useState(
		Number(localStorage.getItem("maxValue")) || 0
	);

	const handleIncrement = () => {
		const newTotal = total + 1;
		setTotal(newTotal);
		localStorage.setItem("totalValue", newTotal);
	};

	const handleDecrement = () => {
		const newTotal = total - 1;
		setTotal(newTotal);
		localStorage.setItem("totalValue", newTotal);
	};

	const handleMinChange = (value) => {
		setMinValue((prevValue) => {
			localStorage.setItem("minValue", value);
			return Number(value);
		});
	};

	const handleMaxChange = (value) => {
		setMaxValue((prevValue) => {
			localStorage.setItem("maxValue", value);
			return Number(value);
		});
	};

	const handleReset = () => {
		const newTotal = 0;
		setTotal(newTotal);
		localStorage.setItem("totalValue", newTotal);
	};

	return (
		<div className="card text-bg-dark mb-3 card-wrapper">
			<div className="card-header">Counter</div>
			{total}
			<div className="card-body counter-card">
				<Input
					inputWidth={40}
					onChange={handleMaxChange}
					value={maxValue}
				/>
				<button
					type="button"
					className="btn btn-outline-success"
					onClick={handleIncrement}
					disabled={total >= maxValue}
				>
					+
				</button>
				<button
					type="button"
					className="btn btn-outline-danger"
					onClick={handleDecrement}
					disabled={total <= minValue}
				>
					-
				</button>
				<Input
					inputWidth={40}
					onChange={handleMinChange}
					value={minValue}
				/>
			</div>
			<button
				type="button"
				className="btn btn-outline-light reset-btn"
				onClick={handleReset}
			>
				Reset
			</button>
		</div>
	);
};

export { Counter };
