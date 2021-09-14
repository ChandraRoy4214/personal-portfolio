import React from 'react'
import styled from 'styled-components';
import {ContactTop} from "../components";

const Contact = () => {
  document.title = "Chandra Roy  |  Contact";
  const heading = "Thanks for taking the time to reach out. How can I help you today?"
    return (
      <Wrapper>
            <div>
              <ContactTop info = {heading} />
            </div>
            <form action="" method = "POST">
              <div className = "first center">
                <label htmlFor="name"> <h2>Name</h2>
                  <div>
                    <input type="text" />
                  </div>
                </label>
                <label htmlFor="email"> <h2>Email</h2>
                  <input type="email" />
                </label>
              </div>
              <div className = "second center">
                <label htmlFor="message"> <h2 className = "msg">Message</h2> <textarea name="message" id="message"></textarea> </label>
              </div>
              <div className = "btn">
                <button type = "submit" > submit </button>
              </div>
              
          </form>

      </Wrapper>
    )
}

const Wrapper = styled.section`

form{
  padding: 45px;
  margin: 0 auto;
  height: 90vh;
  max-width: 970px;
  font-size: 18px;
  font-weight: 400;
}
.first{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 50px;
}
h2{
  font-weight: 400;
  font-size: 20px;
  color: rgba(0,0,0,0.5);
}
input{
  width: 336px;
  margin-top: 1rem;
  height: 56px;
  outline: none;
  border-radius: 5px;
  border:0.5px solid rgba(0,0,0,0.2) ;
  padding: 1rem;
  font-size: 18px;
  font-weight: 400;
}
.second{
  max-width: 745px;
  margin-left: 70px;
  margin-top: 45px;
  outline: none;
  border:none;
  margin: 0 auto;
}
textarea{
  resize: vertical;
  outline: none;
  padding: 15px;
  width: 745px;
  min-height: 240px;
  max-height: 320px;
  font-size : 18px;
  border-radius: 9px;
  border:0.5px solid rgba(0,0,0,0.2) ;

}
.msg{
  margin-bottom: 1rem;
}
.btn{
  display: grid;
  place-items: center;
}

button{
    display: inline-block;
    color: var(--secondary-bg-color);
    font-size: 18px;
    font-weight: 500;
    margin-top: 45px;
    cursor: pointer;
    text-transform: capitalize;
    border: 2px solid var(--secondary-bg-color);
    border-radius: 50px;
    background-color: white;
    letter-spacing: 0.05em;
    padding: 10px 45px;

        &:hover{
        background-color: #7510f7;
        color: white;
        transition: all ease 1s;
    }
    }

    @media (max-width: 867px){
      input{
        margin-bottom: 25px;
        width: 70vw;
      }
      textarea{
        resize: vertical;
        max-width: 70vw ;
        max-height: 240px;
      }
      .first{
        margin-bottom: 0px;
      }
      .second{
        margin: 0 auto;
        max-width: 70vw;
      }
      form{
        height: 100vh;
      }
    }
    

`

export default Contact;