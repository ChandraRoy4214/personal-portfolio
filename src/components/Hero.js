import React from 'react';
import styled from "styled-components";
import Image from "../assets/images/hero-img.svg"
import Image2 from "../assets/images/hero-foot.svg"

const Hero = () => {
    return (
        <Wrapper>
           <div className = "section-center" >
               <div className = "hero-head">
                    <h1> Software Developer, Student & Designer</h1>
                    <h2>I design and code beautifully simple things, and I love what I do.</h2>
                    <img src={Image} alt="avatar-img" />
                </div>
                <div className = "hero-foot">
                        <img src={Image2} alt="hero-img-2" />
                </div>
           </div>
        </Wrapper>
    )
}


const Wrapper = styled.section `

    margin-top: 4rem;
    h1{
        font-size: 45px;
        font-weight: 700;
    }
    h2{
        margin-top: 20px;
        font-weight : 350;
    }
    text-align: center;
    .hero-head{
        img{
            width: 210px;
            height: 250px;
            margin: 45px 0px 95px 0px ;  // TLBR
         }
    }
    @media (max-width: 757px){
        .hero-foot{
            max-width: 85%;
            margin: 0 auto;
            margin-bottom: -1.2rem;
            height: 250px;
        
        img {
            width: 100%;
            height: 100%;
            display: block;
        }

        }
    }
    @media (min-width: 307px){
        .hero-foot{
            margin-bottom: -2.5rem;
        }
    }
    @media (max-width: 632px){
        height: auto;
        .hero-head{
            margin: -3rem 1rem -5rem 1rem ;
            
            img{
                width: 80%;
                max-width: 210;
                max-height: 180px;
                height: 80%;
                max-width: 100%;
            }
            h1{
                font-size: 2rem;
                font-weight: 500;
            }
            h2{
                font-size: 18px;
            }
        }
        .hero-foot{
            margin-bottom: -4.5rem;
        }
    }
`


export default Hero
