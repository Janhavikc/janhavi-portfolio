import * as React from 'react';
import './Footer.css';
import linkedIn from '../../assets/Linkedin.svg';
import github from '../../assets/Github.svg';
import mail from '../../assets/mail.svg';
import instagram from '../../assets/Instagram (1).svg';
import facebook from '../../assets/Facebook.svg';

const Footer:React.FC = () =>{
    return <>
      <div className='footer mt-5 p-4 bg-[#3e3e3e]'>
         <div className='flex w-100 flex-wrap text-white' style={{gap:'50%'}}>
            <div className='w-50 my-3'>
                Copyright &copy; {new Date().getFullYear()} <span className='text-[#B68973]'>Janhavi</span>. All rights reserved
            </div>
            <div className='w-50 my-3'>
                <div className='flex flex-wrap'>
                    <a href='https://www.linkedin.com/in/janhavi-choudhari/' target='_blank' className='mx-2'>
                        <img src={linkedIn} alt="linkedIn" />
                    </a>
                    <a href='https://github.com/Janhavikc' target='_blank' className='mx-2'>
                        <img src={github} alt="github" />
                    </a>
                    <a href='mailto:janhavikchoudhari@gmail.com' target='_blank' className='mx-2'>
                        <img src={mail} alt="mail" />
                    </a>
                    <a href='https://www.instagram.com/janhaviikc/' target='_blank' className='mx-2'>
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href='https://www.facebook.com/janhavi.choudhari.9/' target='_blank' className='mx-2'>
                        <img src={facebook} alt="facebook" />
                    </a>
                </div>
            </div>
         </div>
      </div>
    </>;
};

export default Footer;