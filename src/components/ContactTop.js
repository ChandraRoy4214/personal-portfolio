import React from 'react'
import styled from 'styled-components';
import avatar from "../assets/images/contact-avatar.svg";

const ContactTop = ({info}) => {
    return (
        <Wrapper>
            <hr />

            <div className = "container" >
                <img src={avatar} alt="contact-avatar" />
            </div>
                    
            <h1>{info}</h1>
                    
        </Wrapper>
    )
}

const Wrapper = styled.div`
        text-align:center; 
    .container{
        width: 95px;
        height: 95px;
        margin: 0 auto;
        margin-top: -4rem;
    }
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
    h1{
        padding-top: 3.5rem;
        max-width: 954px;
        font-size: 45px;
        font-weight: 400;
        margin: 0 auto;
    }
`

export default ContactTop
