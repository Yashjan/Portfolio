import React from 'react'
import styled from 'styled-components';

function ReviewItem({text}) {
    return (
        <RevivewItemStyled>
            <p>{text}</p>
        </RevivewItemStyled>
    )
}

const RevivewItemStyled = styled.div`
    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    transition: all 0.4s ease-in-out;
    background-color: var(--background-dark-grey);
    position: relative;
    width: 100%;
    &::after{
        content: "";
        position: absolute;
        left: 2rem;
        /* border-width: .8rem; */
        top: 98%;
        transition: all 0.4s ease-in-out;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
    &:hover{
        cursor: pointer;
        border-color: var(--primary-color);
        &::after{
            border-width: 1rem;
            
        }
    }
    p{
        padding: 1rem 0;
    }
`;

export default ReviewItem;
