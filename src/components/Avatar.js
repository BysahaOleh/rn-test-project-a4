import React from 'react';
import styled from 'styled-components';

const Avatar = ({ source, ...props }) => {
  return (
    <Container {...props}>
      <Image source={source} resizeMode="cover" />
    </Container>
  );
};

const Container = styled.View`
  width: 37px;
  height: 37px;
  border-radius: 18.5px;
  border-width: 2px;
  border-color: white;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 33px;
  height: 33px;
`;

export default Avatar;
