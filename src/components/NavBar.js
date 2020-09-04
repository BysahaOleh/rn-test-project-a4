import React from 'react';
import styled from 'styled-components';

import chat from '../assets/icons/chat.png';
import glasses from '../assets/icons/glasses.png';
import location from '../assets/icons/location.png';

const NavBar = () => {
  return (
    <Container>
      <Section>
        <Oval border />
      </Section>
      <Section>
        <Icon source={chat} resizeMode="contain" />
      </Section>
      <Section>
        <GlassesIcon source={glasses} resizeMode="contain" />
      </Section>
      <Section>
        <Icon source={location} resizeMode="contain" />
      </Section>
      <Section>
        <Oval />
      </Section>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  align-items: center;
  justify-content: space-between;
  padding: 5px 32px;
`;

const Section = styled.View`
  width: 31px;
  height: 31px;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.Image`
  width: 23px;
  height: 23px;
`;

const GlassesIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;

const Oval = styled.View`
  border-radius: 15.5px;
  width: 31px;
  height: 31px;
  background-color: white;
  border: solid ${({ theme }) => theme.colors.primaryDisabled} ${({ border }) => (border ? 3 : 0)}px;
`;

export default NavBar;
