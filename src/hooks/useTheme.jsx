import { useState, useEffect } from "react";

const useTheme = (defaultTheme = "light") => {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || defaultTheme;
	});

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.className = theme;
	}, [theme]);

	return [theme, setTheme];
};

export default useTheme;
