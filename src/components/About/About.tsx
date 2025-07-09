import * as React from 'react';
import about from '../../assets/about.svg';
import profile from '../../assets/Profile2.svg';
import './About.css';

const About: React.FC = ()=>{

    return<>
        <div id='about' className='mt-5'>
            <div className='about-text p-5'>
                About me
                <img src={about} alt='about'/>
            </div>
            <div className='w-100 flex flex-wrap justify-between p-4'>
            <div className='profile-img'>
                <div>
                <img src={profile} className='w-50' alt="profile image" />
                </div>
                <div className='mt-10 download-resume'>
                <a href='https://drive.google.com/file/d/1CNdyTIL_tikWBf-F3gKZnJrU6l1eVwfa/view?usp=sharing' target='_blank' type="button" className="btn-contact text-white bg-[#8D6E63] focus:outline-none font-medium rounded-lg px-4 py-2 text-center">Download Resume</a>
                </div>
            </div>
            <div className='about-box'>
                <div className='about-heading'>Who is <span className='text-[#B68973]'>Janhavi Choudhari</span>?</div>
                <p className='about-desc'>A passionate Software Engineer with over 4 years of experience building elegant, user-focused digital products. I specialize in Frontend Development using ReactJS and Figma, with strong backend capabilities in Python, Flask, and Node.js. I'm currently exploring the exciting intersection of Generative AI, working with tools like Imagen and Gemini to build intelligent, design-driven applications. 
Let’s build something beautiful and smart together!</p>
            </div>
            </div>
        </div>
    
    </>;
};

export default About;