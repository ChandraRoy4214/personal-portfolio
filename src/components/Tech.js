import React from 'react'
import styled from "styled-components";


const Tech = ({icon}) => {
   
    return (
        <Wrapper>
            <div className ="boxs" >
                {icon}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article`
        width: 125px;
        height: 100px;
        padding: 10px;
        text-align: center;
        background-color: white;
        border-radius: 8px;
        border:0.5px solid rgba(0,0,0,0.1);
        box-shadow: 0.1px 0.1px 2px rgba(0,0,0,0.1);
        margin: 15px;
        
        .boxs{
                font-size: 4rem;
                font-weight: 800;
                opacity: 0.8;
                color: var(--secondary-bg-color);
                text-align: center;
        }
        &:hover{
            transition: all ease 0.6s;
            box-shadow: 0.8px 0.2px 15px rgba(0,0,0,0.3);
            opacity: 1;
        }
`

export default Tech
