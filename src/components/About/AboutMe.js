import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCode,
	faBook,
	faFistRaised,
	faUsersCog,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import './AboutMe.scss';

export default class AboutMe extends Component {
	render() {
		// upload resume on google drive and get shareable, view only link for everyone.
		const RESUME_LINK =
			'https://docs.google.com/document/d/19OwRjhCd9dLxhnR1hdzfgLTFhBuShGsAFGmn3RpTUp4/edit?usp=sharing';

		return (
			<div className='about text-center' id='about'>
				<h1 className='text-center font-weight-bold'>About Me</h1>
				<hr />
				<div className='container text-center'>
					<div className='row'>
						<div className='col-sm ctr'>
							<FontAwesomeIcon
								className='icon'
								icon={faCode}
								size='4x'
							/>
							<div className='skill'>Passionate</div>
							<p>
								Passion is what drives me to create amazing
								products.
							</p>
						</div>
						<div className='col-sm ctr'>
							<FontAwesomeIcon
								className='icon'
								icon={faBook}
								size='4x'
							/>

							<div className='skill'>Quick Learner</div>
							<p>
								I thrive in a fast-paced environment and enjoy
								learning new things.
							</p>
						</div>
						<div className='col-sm ctr'>
							<FontAwesomeIcon
								className='icon'
								icon={faFistRaised}
								size='4x'
							/>

							<div className='skill'>Perseverance</div>
							<p>
								I'm a perfectionist and always strive to find
								the best possible solution.
							</p>
						</div>
						<div className='col-sm ctr'>
							<FontAwesomeIcon
								className='icon'
								icon={faUsersCog}
								size='4x'
							/>

							<div className='skill'>Adaptability</div>
							<p>I can adjust to new environments quickly.</p>
						</div>
						<div className='col-sm ctr'>
							<FontAwesomeIcon
								className='icon'
								icon={faUsers}
								size='4x'
							/>

							<div className='skill'>Teamwork</div>
							<p>
								I find it fun and enjoyable to work with others
								as a team to accomplish a goal.
							</p>
						</div>
					</div>
				</div>
				<a
					className='btn btn-outline-dark mt-3'
					href={RESUME_LINK}
					target='_blank'
					rel='noopener noreferrer'
				>
					View my Resume
				</a>
			</div>
		);
	}
}
