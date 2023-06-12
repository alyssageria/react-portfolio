import React from 'react';
import 'bulma/css/bulma.css';
import githubIcon from '../../images/github-icon.png';
import wwwIcon from '../../images/www-icon.png';

function Projects() {
    const myProjects = [
        {
            id: 1,
            title: 'Homehub',
            deployedLink: 'https://home-hub-management.herokuapp.com/',
            githubLink: 'https://home-hub-management.herokuapp.com/'
        },
        {
            id: 2,
            title: 'Go For Fitness',
            deployedLink: 'https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/',
            githubLink: 'https://github.com/JacobRyanWillis/Your_Digital_Personal_Trainer'
        },
        {
            id: 3,
            title: 'Tech Blog',
            deployedLink: 'https://sheltered-brushlands-70464.herokuapp.com/',
            githubLink: 'https://github.com/alyssageria/tech-blog-mvc'
        },
        {
            id: 4,
            title: 'Homehub',
            deployedLink: 'https://home-hub-management.herokuapp.com/',
            githubLink: 'https://home-hub-management.herokuapp.com/'
        },
        {
            id: 5,
            title: 'Homehub',
            deployedLink: 'https://home-hub-management.herokuapp.com/',
            githubLink: 'https://home-hub-management.herokuapp.com/'
        },
        {
            id: 6,
            title: 'Homehub',
            deployedLink: 'https://home-hub-management.herokuapp.com/',
            githubLink: 'https://home-hub-management.herokuapp.com/'
        }
    ]
    return (
        <div>
            <div>
                <h1 className='has-text-white is-size-3 has-text-centered'>My Projects</h1>
            </div>
            <div className='projects'>
                {myProjects.map(project => {
                    return (<div key={project.id} className='project-box is-flex is-justify-content-center' id={`project-${project.id}`}>
                        <a href={project.githubLink}><img className='icons github' src={githubIcon}></img></a>
                        <a href={project.deployedLink}><img className='icons www' src={wwwIcon}></img></a>
                    </div>)
                })}
                {/* <a href="https://home-hub-management.herokuapp.com/"><div className='project-1 project-box'>

                </div></a>
                <a href="https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/"><div className='project-2 project-box'>

                </div></a>
                <a href="https://sheltered-brushlands-70464.herokuapp.com/"><div className='project-3 project-box'>

                </div></a>
                <a href='https://note-taker-expressjs1.herokuapp.com/'><div className='project-4 project-box'>

                </div></a>
                <div className='project-5 project-box'>

                </div>
                <div className='project-6 project-box'>

                </div> */}
            </div>
        </div>
    )
}

export default Projects;