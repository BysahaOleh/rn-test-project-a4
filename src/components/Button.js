import React from 'react';
import styled from 'styled-components';

import { H4 } from './typography';

const Button = ({ children, icon, ...props }) => (
  <Touchable {...props}>
    {!!icon && <IconWrapper>{icon}</IconWrapper>}
    <Label>{children}</Label>
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  padding: 24px 40px;
  background-color: ${({ theme }) => theme.colors.contrast};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const Label = styled(H4)`
  ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.colors.primaryLight};
  top: 2px;
`;

const IconWrapper = styled.View`
  margin-right: 11px;
`;

export default Button;
