import { useEffect } from 'react';
import {
	SiReact,
	SiSass,
	SiPostgresql,
	SiJest,
	SiCypress,
	SiJquery,
	SiExpress,
	SiNextdotjs,
	SiPrisma,
	SiGithub
} from 'react-icons/si';
const Displaytemplate = (props) => {
	const iconObj = {
		react: <SiReact />,
		sass: <SiSass />,
		scss: <SiSass />,
		postgresql: <SiPostgresql />,
		jest: <SiJest />,
		cypress: <SiCypress />,
		jquery: <SiJquery />,
		express: <SiExpress />,
		nextjs: <SiNextdotjs />,
		prisma: <SiPrisma />,
		github: <SiGithub />,
	}
	const { displayObj } = props;
	const { title, description, techStack, img, project, github, site } =
		displayObj;
	useEffect(() => {
		const display = document.querySelector('.display-component');

		display.style.opacity = 0;
		display.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 500,
			delay: 500,
			'timing-function': 'easeInOut',
			fill: 'both',
		});
	}, [props]);
	return (
		<article className='display-component'>
			<h1>{title}</h1>

			<p>{description}</p>

			{project && (
				<ul className='project-List'>
					{techStack.map((value, index) => {
						return <li key={index} data-text ={value} >{iconObj[value.toLowerCase()]}</li>;
					})}

					{github && (
						<li data-text ='View GitHub' className='site'><a  href={github} >
						{iconObj['github']}
					</a></li>
					)}
					{site && (
						<li className='site'><a  href={site}>
						View Site
					</a></li>
					)}
				</ul>
			)}

			{img && (
				<div
					className='img-box'
					style={{
						backgroundImage: `url(${img})`,
					}}
					alt={title}
				/>
			)}
		</article>
	);
};

export default Displaytemplate;
