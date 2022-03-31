import React, { useState, useEffect, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./globals";
import { Container, Title, ButtonChange, Title2, Title3, ContainerCard, ContainerGridCard, CheckBoxWrapper, CheckBoxLabel } from "./Styles";

import Card from "./components/Card/Card";
import SmallCard from "./components/SmallCard/SmallCard";

import { dataCard } from './dataCard';
import { dataSmallCard } from "./dataSmallCard";

function App() {
  let id = 0;
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme />
        <Container>
          <Title>
            Social Media Dashboard
          </Title>
          <CheckBoxWrapper>
            <ButtonChange id="checkbox" onClick={toggleTheme} type="checkbox"/>
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
        </Container>
        <Title2>Total Followers: 23,004</Title2>

        <ContainerCard>
          {dataCard.map(data => {
            return (
              <Card key={id++} img={data.img}
                title={data.title}
                numberTitle={data.numberTitle}
                subtitle={data.subtitle}
                color={data.color}
                footer={data.footer}
                borderColor={data.borderColor}
                gradient={data.gradient}
                theme={theme}
              />
            );
          })}
        </ContainerCard>
        <Title3>Overview - Today</Title3>

        <ContainerGridCard>
          {dataSmallCard.map(data => {
            return (
              <SmallCard key={id++} title={data.title}
                img={data.image}
                quantity={data.quantity}
                percent={data.percent}
                color={data.color}
                theme={theme}
              />
            );
          })}
        </ContainerGridCard>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
