import { useState, useEffect } from "react";
import styled from "styled-components";
// import { lightTheme, darkTheme } from "../../theme";

function Card(props) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        function fetchData() {
            window.addEventListener('toggleTheme', () => {
                setTheme(window.localStorage.getItem('theme'));
            });
        }
        fetchData();
    }, []);
    return (
        <StyledCard>
            <StyledDivImg>
                <StyledImgResponsive src={props.img} alt={props.img} />
                <StyledText>{props.title}</StyledText>
            </StyledDivImg>

            <div>
                <StyledNumberTitle>{props.numberTitle}</StyledNumberTitle>
                <StyledText>{props.subtitle}</StyledText>
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
    border-radius: 10px;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);   
    cursor: pointer;

    @media (max-width: 800px) {
        width: 100%;
    }

    &:hover {
        transition: .3s;
        background-color: ${props => props.theme === 'light' ? 'white' : '#a9a9a9'};
    }   
`;

const StyledDivImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const StyledImgResponsive = styled.img`
    margin-top: 1.50rem;
    max-width: 1rem;
    max-height: 1rem;
    margin-right: 0.313rem;
    width: 100%;
    height: auto;
`;

const StyledText = styled.h4`
  color: #a9a9a9;
`;

const StyledNumberTitle = styled(StyledText)`
    font-size: 70px;
    margin: 0;   
    font-weight: bold;
`;

export default Card;
