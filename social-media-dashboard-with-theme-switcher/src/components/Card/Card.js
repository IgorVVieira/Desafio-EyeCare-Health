// import { useState } from "react";
import styled from "styled-components";
// import { lightTheme, darkTheme } from "../../theme";

function Card(props) {
    return (
        <StyledCard>
            <StyledDivImg>
                <StyledImgResponsive src={props.img} alt={props.img} />
                <h4>{props.title}</h4>
            </StyledDivImg>

            <div>
                <StyledNumberTitle>{props.numberTitle}</StyledNumberTitle>
                <h4>{props.subtitle}</h4>
            </div>

            <div>
                <p>{props.footer}</p>
            </div>
        </StyledCard>
    );
}

const StyledCard = styled.div`
    flex: 1;
    text-align: center;
    margin-right: 1.875rem;
    margin-top: 1.875rem;
    padding: 1.25rem;
    max-width: 15.625rem;
    border-top: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);   
    cursor: pointer;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

const StyledDivImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const StyledImgResponsive = styled.img`
    margin-top: 1.50rem;
    max-width: 0.938rem;
    max-height: 0.938rem;
    margin-right: 0.313rem;
    width: 100%;
    height: auto;
`;

const StyledNumberTitle = styled.h2`
    font-size: 50px;
    font-weight: bold;
`;

export default Card;
