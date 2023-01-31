import styled from "styled-components";


export const MainLayout = styled.div`
    padding: 2.5rem;
    @media screen and (max-width: 642px){
        padding: 2rem;
    }
    /* @media screen and (max-width: 510px){
        padding: 3rem;
    } */
    @media screen and (max-width: 571px){
        padding: 1rem .4rem;
    }
`;
export const InnerLayout = styled.div`
    padding: 3rem 0;
`;