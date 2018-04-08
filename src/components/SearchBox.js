import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	
	return (
		<div>
			<input
				style={{outline: 'none'}}
				className='pa3 mb2 ba b--light-yellow light-yellow br4 bw1 bg-purple' 
				type='search' 
				placeholder='search robots'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;