import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import {
	faLinkedin,
	faGithubSquare,
	faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import './Contact.scss';

const Contact = () => {
	return (
		<div className='contact text-center' id='contact'>
			<h1 className='font-weight-bold'>Let's Connect</h1>
			<hr />
			<p className='text-center pt-5'>
				I know I can be a great addition to your team and would love to
				work with you! I also am open to any freelancing opportunities,
				so if you have an idea let's build it!
			</p>
			<p className='text-center pt-5'>
				Please feel free to contact me in any of the following ways.
			</p>
			<div className='container'>
				<div className='row'>
					<a
						className='col-sm'
						href='mailto: stevenchung650@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FontAwesomeIcon icon={faEnvelopeSquare} size='4x' />
					</a>
					<a
						className='col-sm'
						href='https://github.com/Dev-Steven'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FontAwesomeIcon icon={faGithubSquare} size='4x' />
					</a>
					<a
						className='col-sm'
						href='https://www.linkedin.com/in/stevendchung/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FontAwesomeIcon icon={faLinkedin} size='4x' />
					</a>
					<a
						className='col-sm'
						href='https://www.instagram.com/steven_coding/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FontAwesomeIcon icon={faInstagramSquare} size='4x' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
