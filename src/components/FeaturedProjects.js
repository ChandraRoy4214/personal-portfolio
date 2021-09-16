import React from 'react'
import styled from "styled-components"
import Project from './Project'
import data from '../_data/projects'


const About = () => {
    return (
        <Wrapper>
            
                <div className = "section-center center" >
                <h1 className ="heading" >My Startups Projects</h1>
                <h2>I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try building on my own. Here are some samples of it.</h2>
            </div>
        
            <div className = "projects">
               { data.map((project, index) => { 
                   return <Project key = {index} {...project} /> 
                   }) }
            </div>
            <div className = "info">
                <h2>Interested in collaborating or investing?</h2>
                <p>I’m always open to discussing product design work or partnership opportunities.</p>
            </div>
             <div className = "btn">
                    <a href="/contact" >start a conversation</a>
                </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
        margin-top: 10rem;
        background-color: var(--secondary-bg-color);
        color: white;
        padding: 7rem;
        height: 72vh;
        min-height: 32rem;
        text-align : center;
        width: 100%;
        line-height: 1.7;
        h1{
            font-size: 32px;
            font-weight: 700;
        }
        h2{
            margin-top: 1.4rem;
            margin-bottom: 5rem;
            font-weight: 400;
            font-size: 18px;
        }
        .center{
            width: 789px;
        }
        
        .projects{
            color: #141c3a;
            display: flex;
            gap: 1.5rem;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            max-width: 1170px;
            margin: 0 auto;
            
        }
        p{
            text-align: center;
            font-size: 16px;
            font-weight: 400;
            color: var(--title-clr);
            line-height: 2;
            margin: 0 auto;
        }
        .btn{
        a{
            margin-top: 3rem;
            display: inline-block;
            color: var(--secondary-bg-color);
            font-size: 20px;
            font-weight: 400;
            border: 2px solid var(--secondary-bg-color);
            border-radius: 50px;
            padding: 8px 35px;
        }
        a:hover{
        background-color: #7510f7;
        color: white;
        transition: all ease 1s;
    }
    }
    .info{
        h2{
            color: var(--title-clr);
            font-size: 25px;
            font-weight: 500;
            margin-top: 5rem;
            margin-bottom: 1rem;
        }
        p{
            font-size : 18px;
        }
    }
    @media (max-width: 1170px){
        padding: 5vw;
        margin: 0 auto;
        height: 75vh;
        .center{
            padding: 2vw;
            width: 100%;
            margin: 0 auto;
        }
        
        h2{
            margin-top: 1.4rem;
            margin-bottom: 5.5rem;
            font-weight: 400;
            font-size: 18px;
        }
        .heading{
            font-size: 24px;
            font-weight: 700;
            margin-top: 4rem;
            margin-bottom: 2rem;
        }
        .projects{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            
        }
    }
    @media (max-width: 568px){
        
            .projects{
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }
        width: 100%;
    }


`

export default About
