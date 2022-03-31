import { ThemeProvider } from "styled-components";
import {
    Light, Dark, StyledCard, StyledDivImg,
    StyledImgResponsive, StyledText, StyledNumberTitle
} from "./Styles";

function Card(props) {
    let theme = Light;
    if (props.theme === "light") {
        theme = Light;
    }
    else if (props.theme === 'dark') {
        theme = Dark;
    }
    return (
        <ThemeProvider theme={theme}>
            <StyledCard style={{borderColor: props.borderColor, borderImageSource: props.gradient}}>
                <StyledDivImg>
                    <StyledImgResponsive src={props.img} alt={props.img} />
                    <StyledText>{props.title}</StyledText>
                </StyledDivImg>

                <div>
                    <StyledNumberTitle>{props.numberTitle}</StyledNumberTitle>
                    <p>{props.subtitle.toUpperCase()}</p>
                </div>

                <div>
                    <p style={{ color: props.color }}>{props.footer}</p>
                </div>
            </StyledCard>
        </ThemeProvider>
    );
}

export default Card;
