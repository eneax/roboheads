import React from 'react';

const Card = ( { id, name, email } ) => {
	return (
		<div className="tc bg-light-purple dib br4 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}?set=set3&size=200x200`} alt='robots' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;