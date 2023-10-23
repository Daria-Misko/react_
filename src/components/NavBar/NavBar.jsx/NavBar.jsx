import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {

	return (
		<Box sx={{ display: { md: "flex" }, justifyContent: "spaceBetween" }}>
			<AppBar position="static">
				<Toolbar>
					<Button component={Link} to="/" color="inherit">
						Home
					</Button>
					<Button component={Link} to="/films" color="inherit">
						Films
					</Button>
					<Button component={Link} to="/prices" color="inherit">
						Prices
					</Button>
					{/* <Button
						// color={`${theme === "light" ? "white" : "black"}`}
						size="small"
						variant="contained"
						// className={`btn ${
						// 	theme === "light" ? "btn-dark" : "btn-light"
						// } button`}
						onClick={toggleTheme}
					>
						Switch theme
					</Button> */}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export { NavBar };
