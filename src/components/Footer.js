import React from 'react';
import styled from "styled-components"
import logo from "../assets/images/footer-link.svg"
import Icons  from "./Icons";

const Footer = () => {
    return (
        <Wrapper>
            <a href="/"><span><img src={logo} alt="logo" /></span></a>
            <div className = "footer-text" >
                <h1>Living, Learning & Leveling up</h1>
            <h1>One Day at a Time.</h1>
            </div>
            <section className = "social-icons">
                <div className = "xyz" >
                    <Icons/>
                </div>
            </section>
            <p>Handcrafted by me &copy; <span>{new Date().getFullYear()}</span> </p>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-color: var(--secondary-bg-color);
    position: absolute;
    height: 84vh;
    min-height: 32rem;
    width: 100%;
   
    text-align: center;
    color: rgba(255, 255, 255, 0.75);
    img{
        margin-top: 12.5rem;
        margin-bottom: -3rem;
        color: white;
        width: 50px;
        height: 50px;
    }
    h1{
            font-size: 24px;
            font-weight: 400;
        }
    p{
        font-weight: 400;
        font-size: 18px;
        max-width: 95%;
        margin: 0 auto;
    }
    .xyz{
        margin: 0 auto;
        width: 75%;
        height: 100%;
    }
    @media (max-width: 342px){
        p{
            font-size: 15px;
            max-width: 90%;
        }
    }
    @media (min-width: 418px){
        .xyz{
            width: 100%;
        }
    }
    .social-icons{
        max-width: 532px;
        width: 75vw;
        height: auto;
        margin: 3.5rem auto;
        text-align : center;
    }
    .footer-text{
        margin-top: 4rem;
    }

`

export default Footer
