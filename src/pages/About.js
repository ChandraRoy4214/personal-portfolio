import React from 'react';
import styled from "styled-components";
import { Tech } from "../components";
import data from "../_data/techs";
import { ContactTop } from "../components";
import lofi from "../assets/certs/lofi.jpg";
import {FaDownload} from "react-icons/fa";
import {Link} from "react-router-dom"



const About = () => {
    document.title = "Chandra Roy  |  About";
    return (
        <Wrapper>
            <div className="top" >
                <ContactTop />
            </div>
            <section className="about basic" >
                <div className="title" >
                        <h1>About Me</h1>
                        <div className = "line" ></div>
                        <h2 className="sub" >
                            I love people who are curious like you.
                        </h2>
                </div>

                {/* This is where the info about me is displayed */}
                <div className="box" >
                    <article className="left" >
                        <h2 className = "sub-text">Allow me to formally introduce myself...</h2>
                        <h3>I am an undergrad student at Hindustan University in Chennai and currently pursuing Electronics and Communication Engineering. </h3>
                        <h3>  </h3>
                        <h3>I learned a lot in my programming Journey so far. I Think Programming is no different from life. Solving every bug will give me strength to deal with real life challenges.</h3>
                        <h3> Building a project without leaving it in the middle has helped me in increasing my will power and  made me more disciplined and more organized in life.</h3>
                        <h3>Finally all I want to say to you is, As a Man thinketh so is he. Believe in Universe. and take one day at a time. </h3>
                      
                    </article>
                
                    <article className="right" >
                            <div className = "my-image" >
                                <img src={lofi} alt="lofi" className ="my-img"/>
                            </div>
                    </article>
                </div>
            </section>

            <section className="basic" >

                    <div className="title" >
                        <h1 className = "x" >My Tech Stack</h1>
                        <div className = "line" ></div>
                        <h2 className="sub" >Here are some of the technologies which I use in my day to day work.</h2>
                    </div>

                    <div className="techs" >
                        {data.map((item, index) => { return <Tech key={index} {...item} /> })}
                    </div>
            </section>

                <div className = "btn res-btn">
                    <Link to="/files/chandraRoy.pdf" target="_blank" download><span> <FaDownload/> </span> Resume  </Link>
                </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
        margin-bottom: -145rem;
        text-align: center;
    .basic{
        width: 90vw;
        max-width: 1170px;
        margin: 0 auto;
        min-height: 65vh;
        text-align: center;
        padding: 2rem;
        border-radius: 20px;
        border:0.5px solid rgba(0,0,0,0.2) ;
    }
    .sub-text{
        margin-bottom: 20px;
    }

    .about{
        margin-bottom: 5rem;
    }
    color: #141c3a;
    
    .techs{
        min-height: 40vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
        h1{
            font-size: 32px;
            font-weight: 700;
        }
        h3{
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-weight: 400;
            font-size: 18px;
        }

        .sub{
            margin-top: 0.9rem;
            margin-bottom: 5rem;
            font-weight: 500;
            font-size: 18px;
        }
        .about{
            border: 1px solid rgba(0,0,0,0.2);
            margin: 0rem 0.5rem 1rem 0.5rem;
            border-radius: 15px;
        }
        .box{
            max-width: 1170px;
            height: auto;
            margin:  0 auto;
            display: flex;
            text-align: center;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
        }
       /* .left, .right{
            width: 45%;
            margin: 0 auto;
            height: 45%;
            
        } */
        .left{
            text-align: start;
        }
        
        .btn{
        a{
            margin: 2.5rem 0;
            display: inline-block;
            color: var(--secondary-bg-color);
            font-size: 20px;
            font-weight: 500;
            text-transform: capitalize;
            border: 2px solid var(--secondary-bg-color);
            border-radius: 9px;
            padding: 8px 40px;
        }
        a:hover{
        background-color: #7510f7;
        color: white;
        transition: all ease 1s;
    }
    }
    .line{
            width: 95px;
            height: 1.8px;
            border-radius: 20%;
            background-color: var(--secondary-bg-color);
            opacity: 0.5;
            margin: 0 auto;
            margin-bottom: 2rem;
        }
    
    .my-image{
        max-width: 8vw;
        min-width: 100%;
        height: 308px;
        margin: 0 auto;
    }
    .my-img{
        width: 100%;
        display: block;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        
    }

    @media (max-width: 1172px) {
        .left{
            margin-bottom: 45px;
            max-width: 50vw;
        }
        .sub{
            margin-bottom: 25px;
            margin-top: -18px;
            font-size: 18px;
            font-weight: 300px;
        }
        .x{
            width: 70vw;
            text-align: center;
        }
        
        .left, .right{
            max-width: 100%;
        }
        .my-image{
            min-width: 80vw;
            margin: 0 auto;

        }
    }

    @media (max-width: 432px){
        .sub{
            font-size: 18px;
            font-weight: 300;
        }
        .sub-text{
            font-size: 24px;
            font-weight: 450;
            max-width: 85vw;
        }
        h3{
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 1rem;
        }
    }
    @media (min-width: 432px){
        .sub{
            font-size: 18px;
            font-weight: 300;
        }
        .sub-text{
            font-size: 24px;
            font-weight: 450;
            max-width: 85vw;
        }
        .about{
            padding: 1rem;
            margin: 0rem 1rem 2rem 1rem;
            max-width: 1170px;
            margin: 0 auto;
        }
        h3{
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 1rem;
        }
        .box{
            max-width: 970px;
            margin: 0 auto;
        }
        .left{
            min-width: 48%;
            align-items: center;
        }
        .right{
            width: 48%;
        }
        .about{
            margin-bottom: 2rem;
        }

    }
    @media (min-width: 992px){
        .box{
            display: flex;
            flex-wrap: wrap;
            .my-image{
                min-height: 100%;
            }
            .left{
                text-align: center;
                width: 300px;
            }
        }


    }
   

    /* below code is about some project specific code */

    @media (min-width: 721px){
        margin-bottom: -75rem;
    }
    @media (min-width: 1170px){
        margin-bottom: -72rem;
    }
    @media (min-width: 1350px){
        margin-bottom: -52rem;
    }
    
`

export default About
