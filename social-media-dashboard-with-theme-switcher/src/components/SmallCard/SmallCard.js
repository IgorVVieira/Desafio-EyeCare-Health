import styled from "styled-components";

function SmallCard(props) {
    return (
        <StyledSmallCard>
            <StyledDiv>
                <h5>{props.title}</h5>
                <img src={props.img} alt="" />
            </StyledDiv>

            <StyledDiv>
                <h2>{props.quantity}</h2>
                <h6>{props.percent}</h6>
            </StyledDiv>
        </StyledSmallCard>
    );
}

const StyledSmallCard = styled.div`
    flex: 1;
    text-align: center;
    border: 1px solid;
    border-radius: 1px solid black;
    margin-right: 1.875rem;
    margin-top: 1.875rem;
    padding: 1.25rem;
    max-width: 15.625rem;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default SmallCard;