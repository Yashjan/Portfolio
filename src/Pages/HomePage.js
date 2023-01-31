import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Particle from '../Components/Particle';
import styled from 'styled-components';
const HomePage = () => {
  return (
    <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Yash Jangid</span></h1>
                <p>
                    Hello Yash here from jaipur(Rajasthan), I am the MERN(Full Stack) developer and to know more about me just connect with me.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/login/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/Yashjan/" className="icon i-github">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.instagram.com/accounts/login/" className="icon i-youtube">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
  )
}
const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage