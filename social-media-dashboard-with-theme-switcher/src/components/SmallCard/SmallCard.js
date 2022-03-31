import { ThemeProvider } from 'styled-components';
import { StyledSmallCard, StyledDiv, StyledImgResponsive, StyledTitle, StyledQuantity } from './Styles';

import { Light, Dark } from '../Card/Styles';

function SmallCard(props) {
    let theme = Light;
    if (props.theme === "light") {
        theme = Light;
    }
    else if (props.theme === 'dark') {
        theme = Dark;
    }
    return (
        <ThemeProvider theme={theme}>
            <StyledSmallCard>
                <StyledDiv>
                    <StyledTitle>{props.title}</StyledTitle>
                    <StyledImgResponsive src={props.img} alt="" />
                </StyledDiv>

                <StyledDiv>
                    <StyledQuantity>{props.quantity}</StyledQuantity>
                    <h6 style={{ color: props.color }}>{props.percent}</h6>
                </StyledDiv>
            </StyledSmallCard>
        </ThemeProvider>
    );
}

export default SmallCard;