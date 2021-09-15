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
            <div className = "btn res-btn">
                    <Link to="/files/chandraRoy.pdf" target="_blank" download><span> <FaDownload/> </span> Resume  </Link>
                </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
        text-align : center;
        color: #141c3a;
        padding-top: 9rem;
        margin: 0 auto;
        max-width: 95vw;
        /* background-color: red; */
        
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
        height: auto;
        display: flex;
        gap: 1rem;
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
    @media (max-width: 957px){
        .certificates{
            max-width: 85vw;
            margin: 0 auto;
            margin-bottom: 3rem;
            
        }
        .res-btn{
            margin-bottom: 5rem;
        }
   
    }
    @media (min-width: 350px){
        margin-top: 85rem;
    }
    @media (min-width: 650px){
        margin-top: 80rem;
    }
   
    @media (min-width: 938px){
        margin-top: -10rem;
    }
    @media (min-width: 1270px){
        margin-top: -9rem;
    }
    @media (min-width: 1450px){
        margin-top: -5rem;
    }

    

`

export default Certificates
