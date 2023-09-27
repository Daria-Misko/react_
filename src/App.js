import "./App.css";
import { Input } from "./components/Input/Input";

function App() {
	const handleChange = (name) => {
		console.log(name);
	};
	return (
		<>
			<Input placeholder={"Your name"} onChange={handleChange}></Input>
		</>
	);
}

export default App;
