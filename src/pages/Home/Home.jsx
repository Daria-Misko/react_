import { Typography } from "@mui/material";
import { NavBar } from "../../components/NavBar/NavBar.jsx/NavBar";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../api/api";
import { MovieList } from "../../components/MovieList/MovieList";

const Home = () => {
	const [films, setFilms] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getPopularMovies();
				setFilms(response.results);
			} catch (error) {
				console.error("Error fetching movies:", error);
			}
		};

		fetchData();
	}, [films]);

	return (
		<>
			<NavBar />
			<Typography
				variant="h3"
				component="h2"
				marginTop="20px"
				textAlign="center"
			>
				Trending today
			</Typography>
			{films.length !== 0 && <MovieList films={films} />}
		</>
	);
};

export { Home };
