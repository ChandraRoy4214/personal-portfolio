import React from 'react'
import styled from 'styled-components'

const FooterTop = () => {
    return (
        <Wrapper>
            <h1>Start a Project</h1>
            <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
            <div className = "link">
                <a href="/contact">Let's do this</a>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    background-color: #141c3a;
    width:78vw;
    margin: 0 auto;
    margin-top: 145rem;
    height: 167px;
    position: relative;
    top: 100px;
    left: 0px;
    z-index: 999;
    padding: 0 6rem;
    align-items: center;
    color: white;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 15px;
    box-shadow: 0px 2px 6px #141c3a;
    max-width: 1170px;
    p{
        font-weight: 350;
        max-width: 35%;
        line-height: 1.8rem;
        font-size: 18px;
        text-align: center;
    }
    
        a{
            color: white;
            font-size: 20px;
            font-weight: 400;
            border: 2px solid var(--secondary-bg-color);
            border-radius: 50px;
            padding: 12px 2.5rem;
            display: block;
        }
    a:hover{
        background-color: #7510f7;
        transition: all ease 1s;
    }

    @media (max-width: 1128px){
        width: 90vw;
        height: auto;
        padding: 60px 30px;
        
        p{
            min-width: 100%;
            margin: 35px 0;
        }
        h1{
            margin: 0 auto ;
        }
        .link{
            margin: 0 auto ;
        }
    }
    
    @media (min-width: 651px){
        margin-top: 145rem;
    }
    
    @media (min-width: 721px){
        margin-top: 138rem;
    }
    @media (min-width: 821px){
        margin-top: 72rem;
    }
    @media (min-width: 1121px){
        margin-top: 78rem;
    }
   
    
    @media (min-width: 1410px){
        margin-top: 52rem;
    }
    @media (max-width: 432px){
        a{
            padding: 0.5rem 1rem;
            font-size: 15px;
        }
    }
    @media (max-width: 360px){
        margin-top: 153rem
    };

`

export default FooterTop
