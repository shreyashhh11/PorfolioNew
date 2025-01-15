import React from 'react'

const About = () => {
    return (
        <>
            <div className="Gcard drop-shadow-md md:row-span-3 relative flex items-center text-start rounded-lg dark:bg-dark-about bg-light-about p-6 shadow">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl font-bold dark:text-gray-100 tracking-tight text-gray-800 mb-4 py-2">
                        About me
                    </h2>
                    <img src="/wp8046887-jujutsu-kaisen-computer-wallpapers.jpg" alt='img' style={{ width: '180px', height: '180px', justify: 'center', padding: 'auto', borderRadius: '50%', objectFit: 'cover' }} />
                    <p className="text-md font-bold text-gray-600 dark:text-gray-200 mb-2 pt-4 pb-2">
                        Tech Stack
                    </p>
                    <div className="grid grid-cols-3 gap-3 w-full">
                        {['Java','C++', 'JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Python', 'MongoDB', 'Tailwind', 'SQL', 'Tensorflow','Github'].map((tech) => (
                            <div 
                                key={tech} 
                                className="flex items-center justify-center bg-gray-100 dark:bg-gray-300 rounded-md p-2 min-w-80px max-w-full"
                            >
                                <span className="text-sm font-medium text-gray-800 text-center">
                                    {tech}
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className="text-lg dark:text-gray-200 text-gray-800 pt-6">
                    Apart from coding and academics, I enjoy playing badminton and diving into captivating stories through shows, films, and animated series & experimenting with cooking !
                    </p>
                </div>
            </div>
        </>
    )
};

export default About