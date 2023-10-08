import "./App.css";
import { TaskList } from "./components/TaskList/TaskList";
import useTheme from "./hooks/useTheme";
import { Toaster, toast } from "react-hot-toast";

function App() {
	const [theme, setTheme] = useTheme();

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
		if (theme === "light") {
			toast("Hello Darkness!", {
				icon: "👏",
				style: {
					borderRadius: "10px",
					background: "#333",
					color: "#fff",
				},
			});
		} else {
			toast.success("Welcome back!", {
				style: {
					border: "1px solid #713200",
					padding: "16px",
					color: "#713200",
				},
				iconTheme: {
					primary: "#713200",
					secondary: "#FFFAEE",
				},
			});
		}
	};
	return (
		<>
			<div className="wrapper">
				<button
					className={`btn ${
						theme === "light" ? "btn-dark" : "btn-light"
					} button`}
					onClick={toggleTheme}
				>
					Switch theme
				</button>
				<TaskList theme={theme} />
				<Toaster />
			</div>
		</>
	);
}

export default App;
