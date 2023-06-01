import { useState, useEffect } from 'react';
import './Main.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Menu = (props) => {
	const [drop, setDrop] = useState(false);
	const { setCurrentDisplay, changeColor, color, currentDisplay, data } = props;

	useEffect(() => {
		document
			.querySelector('*')
			.animate([{ backgroundColor: color }], {
				duration: 750,
				'timing-function': 'easeIn',
				fill: 'forwards',
			});
		if (window.innerWidth <= 900) {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
	}, [color]);

	return (
		<div className='Menu '>
			<ul>
				<li
					onClick={() => {
						setCurrentDisplay('About');
						if (currentDisplay !== 'About') {
							changeColor();
						}
					}}
				>
					About
				</li>

				<li
					onClick={() => {
						setCurrentDisplay('Contact');
						if (currentDisplay !== 'Contact') {
							changeColor();
						}
					}}
				>
					Contact
				</li>
				<li>
					<a href='Samuel_Nwabiani_Resume.pdf' download>
						Resume
					</a>
				</li>
				<li
					onClick={() => {
						setDrop(!drop);
					}}
				>
					Projects
					<MdKeyboardArrowDown
						className={`project-arrow ${drop ? 'downarrow' : ''}`}
					/>
				</li>

				<div className={drop ? 'project-menu ' : 'hide'}>
					{Object.entries(data).map(([key, value]) => {
						if (value.project) {
							console.log(key);
							return (
								<li
									key={key}
									onClick={() => {
										setCurrentDisplay(key);
										if (currentDisplay !== key) {
											changeColor();
										}
									}}
								>
									{key}
								</li>
							);
						}
					})}
				</div>
			</ul>
		</div>
	);
};

export default Menu;
