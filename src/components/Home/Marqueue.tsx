import * as React from 'react';
import Marquee from 'react-fast-marquee';
import flower from '../../assets/flower.svg';
import './Marqueue.css';

const Marqueue:React.FC = () =>{

    const skills:string[] = ["Frontend Developer", "AI Enthu", "Backend Developer", "Cloud Engineer", "UX Designer"];
    return<>
        <div className='bg-[#B68973] p-5'>
            <Marquee>
            {skills.map(skill=>{
                return <>
                  <span className='text-2xl text-white ml-10' key={skill}>
                    {skill}
                    <img className={'h-10 flower-img ml-10'} src={flower} alt='flower'/>
                  </span>  
                
                </>
            })}
            </Marquee>

        </div>
    
    </>;
};

export default Marqueue;