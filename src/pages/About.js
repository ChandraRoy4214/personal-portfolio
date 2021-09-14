import React from 'react';
import styled from "styled-components";
import { Tech } from "../components";
import data from "../_data/techs";
import { ContactTop } from "../components";
import lofi from "../assets/certs/lofi.jpg";



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
                    <h2 className="sub" >
                        I love your Curiosity! Here are some Intresting facts about me that I owned along my Journey so far.
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
                    <h1>My Tech Stack</h1>
                    <h2 className="sub" >Here are some of the technologies which I use in my day to day work.</h2>
                </div>

                <div className="techs" >
                    {data.map((item, index) => { return <Tech key={index} {...item} /> })}
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.section`
        margin-bottom: -50rem;
        text-align: center;
    .basic{
        width: 90vw;
        max-width: 1170px;
        margin: 0 auto;
        min-height: 65vh;
        padding: 2.5rem;
        border-radius: 20px;
        border:0.5px solid rgba(0,0,0,0.2) ;
    }
    .sub-text{
        margin-bottom: 20px;
        /* margin-left: -50px; */
    }

    .about{
        margin-bottom: 5rem;
    }

    .techs{
        min-height: 40vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    color: #141c3a;
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
         .box{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
       .left, .right{
           min-width: 350px;
           min-height: 450px;
           margin: 0 auto;
           width: 45%;
           text-align: start;
           text-indent: 10px;
        }
        .left{
            /* background-color: blue; */
            width: 44%;
            
        }
        .right{
            margin: 0 auto;
        }
        
    
    .my-image{
        width: 487px;
        height: 338px;
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
            font-size: 18px;
            font-weight: 300px;
        }
        
        .left, .right{
            max-width: 100%;
        }
        .my-image{
            width: 345px;

        }
    }
    
`

export default About
