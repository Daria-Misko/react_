import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home/Home";
import { Films } from "./pages/Films/Films";
// import { Prices } from "./pages/Prices/Prices";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/films" element={<Films />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			{/* <TaskList theme={theme} /> */}
			<Toaster />
		</>
	);
}

export default App;
