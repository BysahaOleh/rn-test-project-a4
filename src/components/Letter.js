import React from 'react';
import styled from 'styled-components';

import { Text, Caption, H1 } from './typography';

import stampLine from '../assets/icons/post-line.png';
import stamp from '../assets/icons/heart-red.png';

const Letter = ({ from, date, title, text, last }) => {
  return (
    <Container last={last}>
      <Header>
        <From>
          <Text>{from}</Text>
          <Caption>{date}</Caption>
        </From>
        <StampPlace>
          <StampLinesBlock>
            <StampLine source={stampLine} resizeMode="contain" />
            <StampLine source={stampLine} resizeMode="contain" />
            <StampLine source={stampLine} resizeMode="contain" />
          </StampLinesBlock>
          <StampBox>
            <StampIcon source={stamp} resizeMode="contain" />
          </StampBox>
        </StampPlace>
      </Header>
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
      <Footer>
        <OpenLetterButton>
          <Caption>tap to open note</Caption>
        </OpenLetterButton>
      </Footer>
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  width: 349px;
  height: 229px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  padding: 20px;
  margin: 10px ${({ last }) => (last ? 10 : 0)}px 10px 10px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const From = styled.View`
  max-width: 100px;
  margin-top: 3px;
`;

const StampPlace = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StampLinesBlock = styled.View`
  margin-right: 9px;
`;

const StampLine = styled.Image`
  width: 44px;
  height: 8.15px;
  margin-bottom: 1.8px;
`;

const StampBox = styled.View`
  width: 38px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.peach};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const StampIcon = styled.Image`
  width: 26px;
  height: 26px;
`;

const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
`;

const Footer = styled.View`
  justify-content: center;
  align-items: center;
`;

const OpenLetterButton = styled.TouchableOpacity`
  padding: 5px;
  bottom: -5px;
`;

const Title = styled(H1)`
  margin-bottom: 9px;
`;

export default Letter;
