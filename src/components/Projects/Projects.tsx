import * as React from 'react';
import './Projects.css';
import projectLine from '../../assets/projects.svg';
import snapgen from '../../assets/snapgen.png';
import externalLink from '../../assets/External link.svg';
import eduhub from '../../assets/Eduhub.png';
import wordCloud from '../../assets/word-cloud.png';
import sof from '../../assets/sof.png';

const Projects:React.FC = ()=>{

    return<>
       <div id='projects'>
          <div className='about-text p-5 mt-5'>
                My Latest Projects
                <img src={projectLine} alt='about'/>
            </div>
            <div className='flex flex-wrap'>
                <div className='m-5 cardbox'>
                    <a href='https://github.com/Janhavikc/GenAI-Exchange' target='_blank'>
                        <div className='project-card p-3 bg-[#B68973] w-100 border border-[#8D6E63] rounded-lg'>
                            <div className='flex justify-center'>
                                <img src={snapgen} alt="snapgen" />
                            </div>
                            <div className='mt-2 text-center'>
                                <span className='project-heading'>Snapgen</span>
                                <span className='external-link'><img src={externalLink} alt="externalLink"/></span>
                            </div>
                            <div className='mt-2 text-justify project-description'>
                                <p>A generative AI‐powered platform for creating banners, images, and video trailers from user input. Utilized Google’s Imagen for generating high‐quality AI images based on product details, themes, and discount offers. </p>
                                <p className='flex flex-wrap mt-2' style={{overflowY:'hidden'}}><b className='relative top-1'>Tech-stack:</b> {"ReactJs, FFmpeg, Python, Flask, Imagen, GCP, GeminiAI".split(',').map(stack=><span key={stack} className='tech-stack p-1'>{stack}</span>)}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='m-5 cardbox'>
                    <a href='https://github.com/aparna0522/Building-an-EdTech-Platform-Using-Microservices-and-Docker' target='_blank'>
                        <div className='project-card p-3 bg-[#B68973] w-100 border border-[#8D6E63] rounded-lg'>
                            <div className='flex justify-center'>
                                <img src={eduhub} alt="eduhub" />
                            </div>
                            <div className='mt-2 text-center'>
                                <span className='project-heading'>Ed‐Tech Platform using Microservices & Docker</span>
                                <span className='external-link'><img src={externalLink} alt="externalLink"/></span>
                            </div>
                            <div className='mt-2 text-justify project-description'>
                                <p>Built an online learning platform where students access courses and instructors upload content. Implemented three microservices (Users, Courses, Payment) and orchestrated them using Docker. Deployed on Oracle Cloud, ensuring high availability and scalability. </p>
                                <p className='flex flex-wrap mt-2' style={{overflowY:'hidden'}}><b className='relative top-1'>Tech-stack:</b> {"AngularJS, PHP, NodeJS, Docker, MongoDB, MySQL".split(',').map(stack=><span key={stack} className='tech-stack p-1'>{stack}</span>)}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <div className='m-5 cardbox'>
                    <a href='https://github.com/Janhavikc/Sentiment-Analysis-using-Naive-Bayes-' target='_blank'>
                        <div className='project-card p-3 bg-[#B68973] w-100 border border-[#8D6E63] rounded-lg'>
                            <div className='flex justify-center'>
                                <img src={wordCloud} alt="wordCloud" />
                            </div>
                            <div className='mt-2 text-center'>
                                <span className='project-heading'>Sentiment Analysis using Text Mining in Health Care Sector</span>
                                <span className='external-link'><img src={externalLink} alt="externalLink"/></span>
                            </div>
                            <div className='mt-2 text-justify project-description'>
                                <p>A machine learning-based project use to analyze sentiments of the patient’s blog and classifying them into exists, recover or deteriorate condition using text mining (natural language processing).</p>
                                <p className='flex flex-wrap mt-2' style={{overflowY:'hidden'}}><b className='relative top-1'>Tech-stack:</b> {"R programming, Natural processing language (NLP), Text mining, Naive Bayes Algo".split(',').map(stack=><span key={stack} className='tech-stack p-1'>{stack}</span>)}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='m-5 cardbox'>
                    <a href='https://github.com/Janhavikc/CodeFever' target='_blank'>
                        <div className='project-card p-3 bg-[#B68973] w-100 border border-[#8D6E63] rounded-lg'>
                            <div className='flex justify-center'>
                                <img src={sof} alt="sof" />
                            </div>
                            <div className='mt-2 text-center'>
                                <span className='project-heading'>System of Forces</span>
                                <span className='external-link'><img src={externalLink} alt="externalLink"/></span>
                            </div>
                            <div className='mt-2 text-justify project-description'>
                                <p>Program that solves the problems based on mechanical forces using C++ and displays the result in a graph using C graphics.</p>
                                <p className='flex flex-wrap mt-2' style={{overflowY:'hidden'}}><b className='relative top-1'>Tech-stack:</b> {" C++, Graphics C".split(',').map(stack=><span key={stack} className='tech-stack p-1'>{stack}</span>)}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div> 
    
    </>;
};

export default Projects;
