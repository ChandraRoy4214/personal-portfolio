import React from 'react'
import styled from "styled-components"
import Image from "../assets/images/frontend.svg"
import Image2 from "../assets/images/backend.svg"
import Js from "../assets/images/js.png";


const About = () => {
    return (
        <Wrapper>
            <div className = "section-center center" >
                <h1 className = "heading" >Hi, I am Chandra. Nice to Meet you!</h1>
                <h2> I am an undergrad student at Hindustan University,  Chennai, India. Currently pursuing Electronics and Communication Engineering. On day to day basis I work with Intresting technologies like React, Node, Express, MongoDB etc. to build some amazing websites. Knowledge gives the  power. The more you learn, the lesser time it will take to learn even more.</h2>
            </div>
            <div className = "skills">
                <article className = "skill" >
                    <img src={Image} alt="" />
                    <h1>Front-end Developer</h1>
                    <p>
                        HTML and CSS are the beginning of everything you see on the web page! HTML is the foundation of all web pages. It gives the structure to a web page, while CSS defines its style. Learning both will gives you a taste of super powers.
                    </p>
                </article>
                <article className = "skill" >
                    <img src={Js} className = "js-img" alt="" />
                    <h1>JavaScript Geek</h1>
                    <p>
                        JavaScript is commonly used for creating web pages. It allows us to add dynamic behavior to the webpage and add special effects to the webpage. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.
                    </p>
                </article>
                <article id ="bod" className = "skill" >
                    <img src={Image2} alt="" />
                    <h1>MERN Stack</h1>
                    <p>
                        Want more powerful website for your powerful business???...then build one using MERN Stack, one of the most powerful and popular technology of today's world and it's React Component based approach is used by tech giants... try now...
                    </p>
                </article>
            </div>
            <div className="btn" >
                <a href="/about">about me</a>
            </div>

        </Wrapper>
    )
}


const Wrapper = styled.section`
        background-color: var(--secondary-bg-color);
        color: white;
        padding: 7rem;
        text-align : center;
        max-width: 100%;
        height: 85vh;
        min-height: 32rem;
        line-height: 1.7;
        margin-bottom: 25rem;
        
        h1{
            font-size: 32px;
            font-weight: 700;
        }
        h2{
            margin-top: 2.4rem;
            margin-bottom: 6.5rem;
            font-weight: 400;
            font-size: 18px;
        }
        .center{
            width: 789px;
        }
        .heading{
            margin-bottom: -25px;
        }
        #bod{
            border-right: none;
        }
        .skills{
            display: flex;
            flex-wrap: wrap;
            margin-top: 9rem;
            background-color: white;
            max-width: 1170px;
            margin: 0 auto;
            box-shadow : 2px 2px 100px rgba(0,0,0,0.2);
            border-radius: 20px;
            border:0.5px solid rgba(0,0,0,0.2);
        } 
         .skill{
            min-width: 387px;
        }
        p{
            font-size: 16px;
            font-weight: 400;
            color: var(--title-clr);
            line-height: 2;
            width: 82%;
            margin: 0 auto;
        }
        article{
            padding: 20px;
            width: 33.333%;
            color: var(--title-clr);
            height: 420px;
            border-right: 0.5px solid rgba(0,0,0,0.2);
            
            
            .js-img{
                width : 55px;
                height : 55px;
                margin-bottom: -10px;
                object-fit: cover;
            }
            h1{
                font-size: 24px;
                margin: 18px 0;
            }
        }
        .btn{
            margin: 5rem auto;
        a{
            display: inline-block;
            color: var(--secondary-bg-color);
            font-size: 18px;
            font-weight: 400;
            text-transform: capitalize;
            border: 2px solid var(--secondary-bg-color);
            border-radius: 50px;
            padding: 8px 32px;
        }
        a:hover{
        background-color: #7510f7;
        color: white;
        transition: all ease 1s;
    }
    }
    @media (max-width: 1450px){
        padding: 5vw;
        margin: 0 auto;
        margin-bottom: 57rem;
        
        .center{
            width: 100%;
        }
        h1{
            margin-top: 2rem;
            font-size: 24px;
            font-weight: 700;
        }
        h2{
            margin-top: 1.4rem;
            margin-bottom: 4.5rem;
            font-weight: 400;
            font-size: 18px;
        }
        .heading{
            margin-bottom: 2rem;
            margin-top: 2rem;
        }
    article{
        margin: 0 auto;
        margin-top: 20px;
        border: 2px solid rgba(0,0,0,0.2);
        border-radius: 15px;
    }
    .skills{
        max-width: 85vw;
        gap: 1.5rem;
        border: none;
        box-shadow: none;
    }
    }
    @media (max-width: 1450px){
        width: 100%;
        #bod{
            border-right: 2px solid rgba(0,0,0,0.2);
        }
    }
   

`



export default About
