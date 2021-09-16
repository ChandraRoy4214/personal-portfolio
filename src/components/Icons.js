import React from 'react'
import styled from "styled-components"
import {FaTwitter, FaLinkedin, FaGithub, FaAngellist, FaGoogle, FaInstagram} from "react-icons/fa"

const Icons = () => {
    return (
        <Wrapper>
            <a href="https://twitter.com/Chandra15662384"> <span> <FaTwitter/> </span> </a>
            <a href="https://www.linkedin.com/in/chandra-roy-4aab441a5/"> <span> <FaLinkedin/> </span> </a>
            <a href="https://github.com/ChandraRoy4214" > <span> <FaGithub/> </span> </a>
            <a href="https://angel.co/profile/edit"> <span> <FaAngellist/> </span> </a>
            <a href="https://www.chandraroy.in"> <span> <FaGoogle/> </span> </a>
            <a href="https://www.instagram.com/chandraroy4214/"> <span> <FaInstagram/> </span> </a>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    span{
        margin: 0 auto;
        color: white;
        display : inline-block;
        border: 2px solid rgba(255, 255, 255, 0.45);
        padding: 8px;
        border-radius: 50%;
        height: 48px;
        width: 48px;
        font-size: 1.25rem;
    }
    span:hover{
        color: #7510f7 ;
        background-color: white;
        transition: all ease 1s;
    }
    a{
        display: block;
    }
`

export default Icons
