import * as React from 'react';
import './Experience.css';
import experience from '../../assets/experience.svg';

const Experience:React.FC = () =>{

    return <>
        <div id="experience" className='bg-[#8D6E63] mt-5 text-white'>
            <div className='about-text p-5'>
                Educational & Work Experience
                <img src={experience} alt='about'/>
            </div>
            <section className="timeline-container">
            
                <div>
                    <div className='dot'></div> 
                    <div className='w-100 flex flex-wrap justify-between px-4 mt-4'>
                        <div className="left date">
                            Aug 2017 - May 2021
                        </div> 
                        <div className="timeline"></div> 
                        <div className="timeline-item right">
                            <div className="timeline-heading">B.Tech in Information Technology</div>
                            <div className="timeline-subheading">SNDT Women's University - Mumbai</div>
                            <div className="timeline-description">Coursework: Data structure & Algorithm, Cloud Computing, Artificial Intelligence, Machine Learning, Database Management, Operating System, Deep Learning, Distributed System</div>

                        </div> 
                    </div>
                     

                </div>
                <div style={{position: 'relative', top: '-13px'}}>
                    <div className='dot'></div> 
                    <div className='w-100 flex flex-wrap justify-between px-4'>
                        <div className="left date  mt-4">
                            <div className="timeline-heading">Backend Developer Intern</div>
                            <div className="timeline-subheading">Digilocker - Remote</div>
                            <div className="timeline-description" style={{width:'16em'}}>Skills: Swagger, Open API specification, PHP, MySQL, MongoDB, Codeignitor</div>
                        </div> 
                        <div className="timeline"></div>
                        <div className="timeline-item right  mt-4" style={{fontSize: '28px'}}>
                            Aug 2020 - Nov 2020 
                        </div> 
                    </div>
                     

                </div>
                <div style={{position: 'relative', top: '-28px'}}>
                    <div className='dot'></div> 
                    <div className='w-100 flex flex-wrap justify-between px-4'>
                        <div className="left date  mt-4">
                            Aug 2021 - Jul 2025 
                        </div> 
                        <div className="timeline"></div>
                        <div className="timeline-item right  mt-4">
                            <div className="timeline-heading">Member of Technical Staff</div>
                            <div className="timeline-subheading">Oracle - Remote</div>
                            <div className="timeline-description">Skills: Figma, ReactJS, Typescript, Oracle Cloud (OCI), Oracle APEX, Flutter, Python, Generative AI  </div>
                        </div> 
                    </div>
                     
                    <div style={{position: 'relative', top: '-13px'}}>
                    <div className='dot'></div> 
                    <div className='w-100 flex flex-wrap justify-between px-4'>
                        <div className="left date  mt-4">
                            <div className="timeline-heading">Software Engineer</div>
                            <div className="timeline-subheading">DoorDash - Pune</div>
                            <div className="timeline-description" style={{width:'16em'}}>Work in progress</div>
                        </div> 
                        <div className="timeline"></div>
                        <div className="timeline-item right  mt-4" style={{fontSize: '28px'}}>
                            Aug 2025 - Present 
                        </div> 
                    </div>
                     

                </div>
                </div>
            </section>
        </div>    
    </>;
};

export default Experience;