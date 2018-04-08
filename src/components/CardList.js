import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
			{
				robots.map( (robot, i) => {
					return (
						<Card
							key={robot.id}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email}
						 />
					);
				})
			}
		</div>
	);
}

export default CardList;