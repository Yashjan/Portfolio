import React from 'react'
import styled from 'styled-components';
import resume from '../img/avatar2.jpg';
import PrimaryButton from './PrimaryButton';
import Pdf from '../data/Yashjangid.pdf'
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Yash Jangid</span></h4>
                <p className="paragraph">
                    Hello friends myself Yash Jangid and I am from Jaipur(Rajasthan) and currently i am doing my B.Tech in Computer Science with Big-Data  specialization from UPES and I am Full Stack developer(MERN).        
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Yash Jangid</p>
                        <p>: 22</p>
                        <p>: Indian </p>
                        <p>: Hindi, English </p>
                        <p>: Jaipur, India</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} href={Pdf} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 3.6rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
            transition: all 0.4s ease-in-out;
            &:hover{
                transform: scale(1.05);
                cursor: pointer;
                border-radius: 2rem;
            }
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 3.8rem;
            color: var(--white-color);
            span{
                font-size: 3.8rem;
            }
        }
        .paragraph{
            padding: 1.3rem 0;
            font-size: 1.4rem;
        }
        .about-info{
            display: flex;
            padding-top: 1.08rem;
            padding-bottom: 1.8rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                    font-size: 1.21rem;
                }
            }
        }
    }
`;
export default ImageSection;
