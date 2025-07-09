import * as React from 'react';
import skillsImg from '../../assets/skills.svg';
import cplusplus from '../../assets/C++.svg';
import python from '../../assets/Python.svg';
import javascript from '../../assets/JavaScript.svg';
import php from '../../assets/PHP.svg';
import dart from '../../assets/Dart.svg';
import react from '../../assets/React.svg';
import typescript from '../../assets/TypeScript.svg';
import codeIgnitor from '../../assets/CodeIgniter.svg';
import flutter from '../../assets/Flutter.svg';
import flask from '../../assets/Flask.svg';
import oracle from '../../assets/Oracle.svg';
import figma from '../../assets/Figma.svg';
import adobeXD from '../../assets/Adobe XD.svg';
import gcp from '../../assets/Google Cloud.svg';
import gemini from '../../assets/gemini-ai.svg';
import docker from '../../assets/Docker.svg';
import postgresSQL from '../../assets/PostgresSQL.svg';
import mySQL from '../../assets/MySQL.svg';
import mongoDB from '../../assets/MongoDB.svg';

const Skills:React.FC = () =>{
    const skills:{name:string, icon:any}[] = [
        {
            name:'C++',
            icon: cplusplus
        }, 
        {
            name:'Python',
            icon: python
        }, 
        {
            name:'Javascript',
            icon: javascript
        }, 
        {
            name:'PHP',
            icon: php
        }, 
        {
            name:'Dart',
            icon: dart
        }, 
        {
            name:'ReactJS',
            icon: react    
        }, 
        {
            name:'Typescript',
            icon: typescript
        }, 
        {
            name:'CodeIgniter',
            icon: codeIgnitor
        }, 
        {
            name:'Flutter',
            icon: flutter
        }, 
        {
            name:'Flask',
            icon: flask
        }, 
        {
            name:'Oracle Apex',
            icon: oracle}
        , 
        {
            name:'Figma',
            icon: figma
        },
        { 
            name:'Adobe XD',
            icon: adobeXD
        },
        {
            name:'Oracle Cloud',
            icon: oracle
        }, 
        {
            name:'Google Cloud',
            icon: gcp
        }, 
        {
            name:'GeminiAI',
            icon: gemini
        }, 
        {
            name:'Imagen',
            icon: gemini
        }, 
        {
            name:'Docker',
            icon: docker
        }, 
        {
            name:'PostgresSQL',
            icon: postgresSQL
        }, 
        {
            name:'MySQL',
            icon: mySQL
        }, 
        {
            name:'MongoDB',
            icon: mongoDB
        }];    
    return <div id='skills'>
        <div className='about-text p-5 mt-5'>
                Skills
                <img src={skillsImg} alt='about'/>
            </div>
        <div className='flex flex-wrap p-5'>    
        {skills.map((skill)=>{
            return <div key={skill.name} style={{borderRadius:'5px'}} className='mx-1 my-2 p-3 border border-[#8D6E63] bg-[#B68973] text-white'>
                <img style={{float:'left'}} width={24} height={24} src={skill.icon} alt='tech-icon'/>
                <span style={{marginLeft:'10px'}}>{skill.name}</span>
            </div>
        })}

        </div>
    
    </div>;
};

export default Skills;