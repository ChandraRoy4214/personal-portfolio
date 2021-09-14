import React from 'react'
import styled from 'styled-components'
import logo from "../assets/images/logo.svg"
const Navbar = () => {
    return (
        <Wrapper>
            <div className = "nav-center" >
                <div className = "nav-left">
                    <a href="https://www.chandraroy.in"> <span> <img src={logo} alt="" /> </span> </a>
                </div>
                <div className = "nav-right btn">
                    <a href="/contact" >say hello</a>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.nav`
    height: 120px;
    width: 100%;
    .btn{
        a{
            display: inline-block;
            color: var(--secondary-bg-color);
            font-size: 18px;
            font-weight: 450;
            text-transform: capitalize;
            border: 2px solid var(--secondary-bg-color);
            border-radius: 50px;
            padding: 8px 18px;
        }
        a:hover{
        background-color: #7510f7;
        color: white;
        transition: all ease 1s;
    }
    }
    img{
        width: 50px;
        height: 50px;
    }
    .nav-center{
        width: 90vw;
        display: flex;
        justify-content: space-between;
        margin: 20px auto;
        padding: 15px;
    }
`

export default Navbar
