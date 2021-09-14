import React from 'react'
import styled from "styled-components"

const Projects = () => {
        document.title = "Chandra Roy  |  Projects"

     return (
        <Wrapper>
            <h1>This page will be updated soon!</h1>
            <div className = " btn">
                    <a href="/" >Back Home</a>
                </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    height: 46vh;
    width: 100%;
    display: grid;
    place-items: center;
    color: var(--title-clr);
    h1{
        font-size: 48px;
        font-weight: 700;
    }
    .btn{
        a{
            display: inline-block;
            color: var(--secondary-bg-color);
            font-size: 18px;
            font-weight: 400;
            text-transform: capitalize;
            border: 2px solid var(--secondary-bg-color);
            border-radius: 15px;
            padding: 8px 18px;
        }
        a:hover{
        background-color: #7510f7;
        color: white;
        transition: all ease 1s;
        }
    }

    @media (max-width: 1170px){
        width: 85vw;
        margin: 0 auto;
        h1{
            font-size: 32px;
            font-weight: 700;
        }
    }

`



export default Projects
