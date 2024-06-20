import Nav from './components/Nav';
import Menu from './components/Menu';
import Displaytemplate from './components/Displaytemplate';
import Loadingscreen from './components/Loadingscreen';
import './App.css';
import data from './data';
import { useEffect, useState } from 'react';
import Contact from './components/Contact';

function App() {
	const [currentDisplay, setCurrentDisplay] = useState('About');
	const [color, setColor] = useState('linear-gradient(to right, #2b5876, #4e4376)');
	function changeColor() {
		//function to randomize the color and make sure the previos color is not the new random number.

		const colors = [
			// Roseanna
			'linear-gradient(to right, #de6262, #ffb88c)',
			// 50 shades of Grey
			'linear-gradient(to right, #bdc3c7 ,  #2c3e50)',
			// Green Beach
			'linear-gradient(to right, #de6262, #ffb88c)',
			// Socialive
			'linear-gradient(to right, #06beb6 ,#48b1bf)',
			// Dusk
			'linear-gradient(to right, #ffd89b , #19547b)',
			//Aubergine purple
			'linear-gradient(to right, #aa076b , #61045f)',
			// Roseanna
			'linear-gradient(to bottom, #de6262, #ffb88c)',
			// 50 shades of Grey
			'linear-gradient(to bottom, #bdc3c7 ,  #2c3e50)',
			// Green Beach
			'linear-gradient(to bottom, #de6262, #ffb88c)',
			// Socialive
			'linear-gradient(to bottom, #06beb6 ,#48b1bf)',
			// Dusk
			'linear-gradient(to bottom, #ffd89b , #19547b)',
			//Aubergine purple
			'linear-gradient(to bottom, #aa076b , #61045f)',
		];

		let previousColor = null;
		function randomNum() {
			let num;
			do {
				num = Math.floor(Math.random() * colors.length);
			} while (previousColor !== null && previousColor === num);
			previousColor = num;
			return num;
		}
		setColor(colors[randomNum()]);
	}

	useEffect(() => {
		document.querySelector('*').style.background=color;
	}, [color]);
	return (
		<div className='App'  >
			<Loadingscreen />
			<main >
				<Nav
					currentDisplay={currentDisplay}
					setCurrentDisplay={setCurrentDisplay}
					changeColor={changeColor}
				/>
				<div className='content-div '>
					{currentDisplay === 'Contact' ? (
						<Contact />
					) : (
						<Displaytemplate displayObj={data[currentDisplay]} color={color} />
					)}
					<Menu
						data={data}
						currentDisplay={currentDisplay}
						setCurrentDisplay={setCurrentDisplay}
						changeColor={changeColor}
						color={color}
					/>
				</div>
			</main>
			<footer>© Samuel Nwabiani 2024</footer>
		</div>
	);
}

export default App;
