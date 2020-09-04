import React from 'react';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Avatar from './Avatar';

import menu from '../assets/icons/menu.png';
import heart from '../assets/icons/heart.png';

import user from '../assets/temp/user.jpg';

const Header = () => {
  return (
    <Container>
      <Section>
        <MenuButtonIcon source={menu} resizeMode="contain" />
      </Section>
      <Section>
        <Logo source={heart} resizeMode="contain" />
      </Section>
      <Section>
        <StyledAvatar source={user} />
      </Section>
    </Container>
  );
};

const Container = styled.View`
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  width: 100%;
  height: 68px;
  padding: ${getStatusBarHeight()}px 25px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Section = styled.View`
  width: 40px;
`;

const MenuButtonIcon = styled.Image`
  width: 24px;
  height: 23px;
`;

const Logo = styled.Image`
  width: 40px;
  height: 36px;
`;

const StyledAvatar = styled(Avatar)`
  right: -3px;
  bottom: -7px;
`;

export default Header;
