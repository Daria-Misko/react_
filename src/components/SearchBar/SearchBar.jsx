import PropTypes from "prop-types";

import { Button, Input } from "@mui/material";

const SearchBar = ({ onSubmit, onChange, value }) => {
	return (
		<div>
			<form onSubmit={onSubmit}>
				<Input
					type="text"
					name="searchQuery"
					autoComplete="off"
					autoFocus={false}
					placeholder="Search movie"
					value={value}
					onChange={onChange}
				></Input>
				<Button type="submit">
					<span>Search</span>
				</Button>
			</form>
		</div>
	);
};

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
};

export { SearchBar };
