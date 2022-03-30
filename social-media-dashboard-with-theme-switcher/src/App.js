import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./globals";
import Card from "./components/Card/Card";

import facebookImg from './img/icon-facebook.svg';
import twitterImg from './img/icon-twitter.svg';
import instagramImg from './img/icon-instagram.svg';
import youtubeImg from './img/icon-youtube.svg';
import SmallCard from "./components/SmallCard/SmallCard";

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
      window.dispatchEvent(new Event("toggleTheme"));
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
      window.dispatchEvent(new Event("toggleTheme"));
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
          <ButtonChange onClick={toggleTheme}>Mudar tema</ButtonChange>
        </Container>
        <Title2>Total Followers: 23,004</Title2>

        <ContainerCard>
          <Card img={facebookImg} title={'@nathanf'} numberTitle={1987}
            subtitle={'Followers'} footer={'12 Today'} theme={theme}/>

          <Card img={twitterImg} title={'@nathanf'} numberTitle={1044}
            subtitle={'Followers'} footer={'99 Today'} />

          <Card img={instagramImg} title={'@realnathanf'} numberTitle={'11k'}
            subtitle={'Followers'} footer={'1099 Today'} />

          <Card img={youtubeImg} title={'@Nathan F.'} numberTitle={8239}
            subtitle={'Subscribers'} footer={'144 Today'} />
        </ContainerCard>

        <Title3>Overview - Today</Title3>

        <ContainerCard>
          <SmallCard title={'Page views'} img={facebookImg} quantity={87} percent={'3%'} />
          <SmallCard title={'Like'} img={facebookImg} quantity={52} percent={'2%'} />
          <SmallCard title={'Likes'} img={twitterImg} quantity={5462} percent={'2257%'}/>
          <SmallCard title={'Profile Views'} img={instagramImg} quantity={'52k'} percent={'1375%'}/>
        </ContainerCard>
      </Fragment>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  margin-left: 85px;
`;

const Title2 = styled(Title)`
  font-size: 20px;
  color: #a9a9a9;
  margin-top: 0;
`;

const Title3 = styled(Title2)`
  font-size: 25px;
`;

const ButtonChange = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
`;

export default App;
