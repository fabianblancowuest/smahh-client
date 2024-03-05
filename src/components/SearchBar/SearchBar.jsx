import React from "react";
import styles from "./Searchbar.module.css";

const SearchBar = ({ onSearchChange }) => {

	const handleInputChange = (event) => {
		const newSearch = event.target.value;
		onSearchChange(newSearch);
	};

	const handleKeyUp = (event) => {
		if (event.key === "Enter") {
			onSearchChange(event.target.value);
		}
	};

	return (
		<div className={styles.searchbar}>
			<input
				type="text"
				className={styles.input}
				onChange={handleInputChange}
				placeholder="Enter your search..."
				onKeyUp={handleKeyUp}
			/>
			
			<button className={styles.searchButton} onClick={onSearchChange}>
				Search
			</button>

		</div>
	);
};

export default SearchBar;