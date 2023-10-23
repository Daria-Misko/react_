import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

import "./MovieList.css";

import noImg from "../../img/—Pngtree—movie clapper film_2497117.png";

const MovieList = ({ films }) => {
	return (
		<div className="movie-list">
			{films.map((film) => (
				<Card sx={{ width: 345 }} key={film.id}>
					<CardMedia
						sx={{ height: 500 }}
						image={
							film.poster_path
								? `https://image.tmdb.org/t/p/w300${film.poster_path}`
								: noImg
						}
						title={film.title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{film.title}
						</Typography>
					</CardContent>
					<CardActions>
						{/* <Button size="small">Learn More</Button> */}
					</CardActions>
				</Card>
			))}
		</div>
	);
};

export { MovieList };
