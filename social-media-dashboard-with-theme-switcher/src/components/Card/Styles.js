import styled from "styled-components";

export const Light = {
    background: '#F0F2FA',
    hover: '#E0E0E0',
    text1: '#63687E',
    text2: '#1E202A',
    borderColor: props => props.theme.borderColor
}

export const Dark = {
    background: '#252A41',
    text1: '#8B97C6',
    text2: '#FFFFFF',
    hover: '#44475a',
}

export const StyledCard = styled.div`
    text-align: center;
    padding: 1.5rem;
    border-top: 10px solid;
    border-radius: 15px;
    border-image-slice: 1;
    border-width: 5px;
    background-color: ${props => props.theme.background};
    
    cursor: pointer;

    @media (max-width: 375px) {
        margin-bottom: -20px;
        max-width: auto;
        width: 100%;
    }

    &:hover {
        transition: .3s;
        background-color: ${props => props.theme.hover};
    }   
`;

export const StyledDivImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const StyledImgResponsive = styled.img`
    margin-top: 1.50rem;
    max-width: 1rem;
    max-height: 1rem;
    margin-right: 0.313rem;
    width: 100%;
    height: auto;
`;

export const StyledText = styled.h4`
  color: ${props => props.theme.text1};
`;

export const StyledNumberTitle = styled(StyledText)`
    font-size: 70px;
    color: ${props => props.theme.text2};
    margin: 0;   
    font-weight: bold;
`;
