import React from 'react';
import './Card.scss';

const Card = ({ title, img, descr, btn_text, link }) => {
	return (
		<div className='card'>
			<img src={img} className='card-img-top' alt={`${title}`} />
			<div className='card-body'>
				<h5 className='card-title'>{title}</h5>
				<p className='card-text'>{descr}</p>
				<a
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					className='btn btn-outline-dark'
				>
					{btn_text}
				</a>
			</div>
		</div>
	);
};

export default Card;
