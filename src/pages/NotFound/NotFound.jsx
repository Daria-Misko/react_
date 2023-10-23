import { Box, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

import imgPanic from "../../img/notFound.png";

const NotFound = () => {
	return (
		<>
			<Typography
				variant="h2"
				color={yellow}
				sx={{ textAlign: "center", marginTop: "50px", fontSize: "72px" }}
			>
				Oops... <br />
				Page not found
			</Typography>
			<Box
				sx={{
					width: 450,
					margin: "auto",
					marginTop: "50px",
				}}
			>
				<img src={imgPanic} alt="" width="450px" />
			</Box>
		</>
	);
};

export { NotFound };
