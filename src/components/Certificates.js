import React from 'react'
import styled from "styled-components";
import Certificate from './Certificate';
import data from "../_data/resources";
import {FaDownload} from "react-icons/fa";
import {Link} from "react-router-dom"



const Certificates = () => {
    return (
        <Wrapper >
            <div className = "title" >
                <h1>My Certifications</h1>
                <h2>Here are some of the certificates I gained from great Instructors.</h2>
            </div>
            <div className = "certificates">
             { data.map((item, index) => {

                 return <Certificate key = {index} {...item} />  }) }
            </div>
            <div className = "btn">
                    <Link to="/files/chandraRoy.pdf" target="_blank" download><span> <FaDownload/> </span> Resume  </Link>
                </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
        text-align : center;
        color: #141c3a;
        padding-top: 9rem;
        h1{
            font-size: 32px;
            font-weight: 700;
        }
        h2{
            margin-top: 0.9rem;
            margin-bottom: 5rem;
            font-weight: 450;
            font-size: 18px;
        }

    .certificates{
        max-width: 1170px;
        width: 95%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 auto;
        border-radius: 15px;
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
    @media (max-width: 657px){
        .certificates{
            width: 75vw;
        }
        
    }

`


export default Certificates
