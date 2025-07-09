import * as React from 'react';
import profile from '../../assets/Profile.svg';
import hithere from '../../assets/HiThere.svg';
import './Home.css';
import Marqueue from './Marqueue';

const Home:React.FC = ()=>{
    return <>
        <div className='max-w-screen-xl flex flex-wrap justify-between p-4'>
            <div className='w-55 mt-10 text-box'>
                Hi, There!
                <div>
                <img src={hithere} alt="line"/>
                </div>
                <div className='mt-2 info-box'>
                    I'm <span className='text-[#B68973]'>Janhavi Choudhari</span> <br/>
                    Software Engineer <br/>
                    based in India <br/>
                </div>

            </div>
            
            <div className='w-45 mt-10'>
                <img src={profile} alt="profile pic"/>

            </div>

        </div>

        <div className='mt-20'>

            <Marqueue/>
        </div>
    
    </>;
};

export default Home;