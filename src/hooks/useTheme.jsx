import { useState, useEffect } from "react";

const useTheme = (defaultTheme = "light") => {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || defaultTheme;
	});

	useEffect(() => {
		const currentClasses = document.body.classList;

		// Видаляємо всі можливі тематичні класи
		// Цей список потрібно буде розширювати, якщо буде більше тем
		currentClasses.remove("light", "dark");

		// Додаємо поточний клас теми
		document.body.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	return [theme, setTheme];
};

export default useTheme;
