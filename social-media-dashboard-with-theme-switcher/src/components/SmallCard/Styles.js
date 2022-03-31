import styled from "styled-components";

export const StyledSmallCard = styled.div`
    text-align: center;
    border: 1px solid ${props => props.theme.background};
    border-radius: 15px;
    padding: 1.5rem;
    background-color: ${props => props.theme.background};
    cursor: pointer;

    @media (max-width: 800px) {
        width: 100%;
        margin-bottom: -20px;
    }

    &:hover {
        transition: .3s;
        background-color: ${props => props.theme.hover};
    }   
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const StyledTitle = styled.h5`
    margin-top: 7px;
    color: ${props => props.theme.text1};
`;

export const StyledQuantity = styled(StyledTitle)`
    margin: 0;
    color: ${props => props.theme.text2};
    font-size: 40px;
`;

export const StyledImgResponsive = styled.img`
    max-width: 1.5rem;
    max-height: 1.5rem;
    width: 100%;
    height: auto;
`;