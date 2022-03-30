import styled from "styled-components";

function SmallCard(props) {
    return (
        <StyledSmallCard>
            <StyledDiv>
                <h5>{props.title}</h5>
                <StyledImgResponsive src={props.img} alt="" />
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
    border: 1px solid #44475a;
    border-radius: 15px;
    margin-right: 1.875rem;
    margin-top: 1.875rem;
    padding: 1.25rem;
    max-width: 15.625rem;
    cursor: pointer;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledImgResponsive = styled.img`
    max-width: 1.5rem;
    max-height: 1.5rem;
    width: 100%;
    height: auto;
`;

export default SmallCard;