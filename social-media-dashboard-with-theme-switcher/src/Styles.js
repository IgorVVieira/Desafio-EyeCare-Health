import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerCard = styled.div`
  display: grid;
  
  @media(min-width: 900px) {
    gap: 8% 2%; 
    grid-template-columns: 7fr 7fr 7fr 7fr;
    transform: translate(0%, -50%);
    margin: 20vh 5vh 0vh 10vh;
  }
   
  @media(max-width: 900px) {
    gap: 4% 2%; 
    transform: translate(0%, 0%);
    grid-template-rows: 7fr;
    margin: 0vh 2vh 20vh 2vh;
  }
`;

export const ContainerGridCard = styled(ContainerCard)`
  @media(min-width: 900px) {
    margin: 19vh 10vh 0vh 10vh;
  }
   
  @media(max-width: 900px) {
    margin: 20vh 2vh 0vh 2vh;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-left: 85px;
`;

export const Title2 = styled.p`
  margin-left: 85px;
  font-size: 20px;
  color: #a9a9a9;
`;

export const Title3 = styled(Title2)`
  margin-left: 90px;
  font-size: 25px;

  @media(min-width: 900px) {
    margin-top: -100px;

  }
   
  @media(max-width: 900px) {
    margin: 20vh 2vh 0vh 2vh;
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const ButtonChange = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  margin-right: 20px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }`;