import React from "react";
import styled from "styled-components";


const Certificate = ({image, link}) => {
    
    return (
        <Wrapper>
            <div className = "container" >
                <a href= {link}><img src= {image} alt="" /></a>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
        margin: 0 auto;
    img{
        width: 100%;
        display :block;
        border-radius: 15px;
        height: auto;
        max-height: 250px;
        object-fit: cover;
        border:0.5px solid rgba(0,0,0,0.2);
    }
    img:hover{
        box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
    }
    .container{
        max-height: 275px;
    }

    &:hover{
        transition: all ease 0.6s;
        transform: scale(1.01);  
    }
`

export default Certificate
