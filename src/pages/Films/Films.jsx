import { Typography } from "@mui/material";
import { NavBar } from "../../components/NavBar/NavBar.jsx/NavBar";
import "./Films.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../../api/api";
import toast from "react-hot-toast";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { MovieList } from "../../components/MovieList/MovieList";

const Films = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [resultMovieList, setResultMovieList] = useState([]);

	const [inputValue, setInputValue] = useState("");
	const [query, setQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const nextParams = inputValue !== "" ? { query: inputValue } : {};

	useEffect(() => {
		const query = searchParams.get("query");
		if (!query) return;
		setQuery(query);
	}, [searchParams]);

	useEffect(() => {
		if (!query) return;
		const getMovies = async () => {
			try {
				setIsLoading(true);
				const { results } = await getSearchMovie(query);
				if (results.length === 0) {
					return toast.error("No Movies");
				}
				setResultMovieList(results);
			} catch (error) {
				toast.error("Sorry, something went wrong...Please, try again");
			} finally {
				setIsLoading(false);
			}
		};

		getMovies();
	}, [query]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim() === "") {
			return toast.error("Please enter a request! ");
		}
		setQuery(inputValue);
		setSearchParams(nextParams);
	};

	const handleInputChange = (e) => {
		setInputValue(e.currentTarget.value.toLowerCase());
	};
	return (
		<>
			<NavBar />
			<div className="input-wrapper">
				<Typography variant="h3" gutterBottom>
					Find movie
				</Typography>
				<SearchBar
					onSubmit={handleSubmit}
					onChange={handleInputChange}
					value={inputValue}
				/>
				<MovieList films={resultMovieList} />
			</div>
		</>
	);
};

export { Films };
