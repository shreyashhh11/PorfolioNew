import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from './Header';
import Footer from './Footer';
const projects = [
  {
    title: 'Ochi',
    tech: 'Reactjs',
    repo: 'https://github.com/shreyashhh11/ochi',
    description: "Ochi is a project aimed at enhancing user experience through seamless integration and intuitive design, focusing on providing efficient solutions for everyday tasks.",
  },
  {
    title: 'Solar System',
    tech: 'Html,Css',
    repo: 'https://github.com/shreyashhh11/SolarSystem',
    description: 'Solar System is an interactive project that visualizes the dynamics of our solar system, offering an engaging and educational experience of planetary motion.',
  },
  {
    title: 'Toogood',
    tech: 'html,css,javascript',
    repo: 'https://github.com/shreyashhh11/twogood',
    description: 'TwoGood is a platform designed to connect individuals and encourage acts of kindness by facilitating the exchange of helpful resources and support.',
  },
  {
    title: 'Algoverse',
    tech: 'Reactjs, Tailwind',
    repo: 'https://github.com/shreyashhh11/algoverse',
    description: 'Algoverse is a platform that helps users improve their problem-solving skills through coding challenges and algorithm-based exercises.',
  },
  {
    title: 'SPPUKar',
    tech: 'MERN',
    repo: 'https://github.com/shreyashhh11/sppukar',
    description: `Sppukar is a study material portal that helps students access and share educational resources, providing a collaborative space for learning and knowledge exchange.`,
  },
];

const Projects = () => {
  const navigate = useNavigate(); 

  return (
    <>
    <Header/>
    <div className="min-h-screen pt-14 py-9  lg:px-40 lg:py-10 sm:px-10">
      <div className='flex flex-row justify-between pb-2'>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">My Projects</h1>
        <button 
          onClick={() => navigate(-1)} // Navigate back
          className="mb-4 px-4 py-2 border-gray-300 dark:bg-gray-400 dark:border-gray-400 text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
        >Back</button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="Gcard dark:bg-coffee drop-shadow-md relative flex items-center justify-center rounded-lg bg-white p-6 shadow">
            <div className="flex flex-col text-start align-top">
              <h2 className="text-xl dark:text-gray-100 font-bold tracking-tight text-gray-800 mb-4">{project.title}</h2>
              <div className='flex flex-row gap-2 text-sm pb-2'>
              <span className="mt-4 inline-block px-2 py-2 text-violet-800 bg-violet-300 rounded-xl">
                {project.tech}
              </span>
              <a 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-4 py-2 text-green-800 bg-green-300 rounded-xl hover:bg-green-200 hover:text-green-700 transition"
              >
                Repo
              </a>
              </div>
              <p className="text-lg dark:text-gray-100 text-gray-600">{project.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Projects;
