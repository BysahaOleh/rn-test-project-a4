import React from 'react';
import styled from 'styled-components';

import { Header, NavBar, Letter, Button } from '../components';

import { letters } from '../mock';

const Home = () => {
  return (
    <Container>
      <Header />
      <NavBar />
      <LetterList
        horizontal
        pagingEnabled
        decelerationRate={0}
        snapToInterval={359}
        snapToAlignment="left"
        data={letters}
        renderItem={({ item }) => <Letter {...item} />}
      />
      <ButtonBlock>
        <Button>application @work</Button>
      </ButtonBlock>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

const LetterList = styled.FlatList`
  width: 100%;
  max-height: 249px;
`;

const ButtonBlock = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export default Home;
