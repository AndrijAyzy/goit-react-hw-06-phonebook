import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: 0;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom:10px

`;

export const ContactsList = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 35px;
  border-radius: 5px;
  padding: 25px;
  background-color: white;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteBtn = styled.button`
margin: 0px;
margin-left: 10px;
width: 100px;
padding: 0px;
height: 30px;
color: #black;
border: 1px solid #000000;
border-radius: 5px;
cursor: pointer;
transition: all 0.25s linear 0s;
&:hover,
&:focus {
  border: 1px solid #white; background: #ff0000;
  transform: scale(1.1);
`;

export const Message = styled.p`
  font-size: 30px;
  font-weight: 400;
`;