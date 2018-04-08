import React from 'react';

const Scroll = (props) => {
	return (
		<div 
			className='pa3 ma2'
			style={{overflowY: 'scroll', borderTop: '3px solid #fbf1a9', height:'600px', marginTop: '2.5rem'}}
		>
			{props.children}
		</div>
	)
}


export default Scroll;