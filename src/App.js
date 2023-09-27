import "./App.css";
import { Input } from "./components/Input/Input";

function App() {
	const handleChange = (name) => {
		console.log(name);
	};
	return (
		<>
			<div className="input__wrapper">
				<Input placeholder={"Your name"} onChange={handleChange}></Input>
			</div>
		</>
	);
}

export default App;
