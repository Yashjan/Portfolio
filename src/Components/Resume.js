import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ResumeItem from '../Components/ResumeItem';
import work from '../data/work';
import eductaion from '../data/education';
function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Project Experience'} />
                </div>
                <div className="resume-content">
                    {
                        work.map((data)=>{
                            return(
                                <ResumeItem 
                                year={data.year} 
                                title={data.title}
                                subTitle={data.subTitle}
                                text={data.text} 
                            />
                            )
                        })
                    }
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    {
                        eductaion.map((data)=>{
                            return(
                                <ResumeItem 
                                year={data.year} 
                                title={data.title}
                                subTitle={data.subTitle}
                                text={data.text} 
                            />
                            )
                        })
                    }
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
