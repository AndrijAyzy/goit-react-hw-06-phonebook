import styled from 'styled-components';

export const Input = styled.input`
  margin-left: 5px;
  padding: 5px;
  border: none;
  border-radius: 5px;
`;

export const SearchField = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  /* font-size: 14px; */
  color: ${props => props.theme.colors.accentDark}; ;
`;
