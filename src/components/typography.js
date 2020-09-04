import styled from 'styled-components';

import { actuatedNormalize } from '../utils/index';

export const H1 = styled.Text`
  ${({ theme }) => theme.typography.base};
  font-size: ${actuatedNormalize(20)}px;
`;

export const H4 = styled.Text`
  ${({ theme }) => theme.typography.base};
  font-size: ${actuatedNormalize(15)}px;
`;

export const Text = styled.Text`
  ${({ theme }) => theme.typography.base};
  font-size: ${actuatedNormalize(12)}px;
`;

export const Caption = styled.Text`
  ${({ theme }) => theme.typography.base};
  color: ${({ theme }) => theme.colors.textLight2};
  font-size: ${actuatedNormalize(10)}px;
`;
