import React from 'react'
import styled from "styled-components";

const Project = ({text, link, title}) => {
    return (
        <Wrapper>
            <div className ="box" >

                <h1 className = "tit" > {title} </h1>
                <div className ="line" >

                </div>

            <p className ="info" > {text} </p>

            <a href= {link} > <p>visit website</p> </a>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.article`
        /* width: 32%; */
        width: 372px;
        margin: 0 auto;
        height: 325px;
        padding: 1rem;
        background-color: white;
        margin-bottom: 0rem;
        color: #141c3a;
        border-radius: 15px;
        border:0.5px solid rgba(0,0,0,0.1);
        box-shadow: 0.1px 0.1px 2px rgba(0,0,0,0.1);
        .box{
            text-align: center;
            padding: 5rem auto;
            height: 100%;
            width: 100%;
            border-radius: 15px;
        }
        img{
            width: auto;
            height: 55px;
            object-fit: cover;
        }
        a{
            display: block;
            p{
                color: #7510f7;
                font-size: 18px;
                font-weight: 400;
                width: 150px;
                padding: 5px 8px;
                border-radius: 15px;
                border: 1px solid rgba(0,0,0,0.0001);
            }
            p:hover{
                transition: all 1s ease;
                border-radius: 15px;
                border: 1px solid var(--secondary-bg-color);
            }
        }
        .info{
            font-size: 17px;
            font-weight: 400;
            margin-bottom: 2rem;
            line-height: 1.6;
            width: 87%;
        }

        .tit{
            font-size: 24px;
            font-weight: 650;
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

`

export default Project
