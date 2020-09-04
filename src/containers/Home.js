import React from 'react';
import styled from 'styled-components';

import { Header, NavBar, Letter, Button } from '../components';

import location from '../assets/icons/location-fill.png';
import { letters } from '../mock';

const Home = () => {
  return (
    <Container>
      <Header />
      <NavBar />
      <LetterList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        decelerationRate={0}
        snapToInterval={359}
        snapToAlignment="left"
        data={letters}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Letter {...item} />}
      />
      <ButtonBlock>
        <Button icon={<LocationIcon source={location} resizeMode="contain" />}>
          application @work
        </Button>
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

const LocationIcon = styled.Image`
  width: 14px;
  height: 18px;
`;

export default Home;
