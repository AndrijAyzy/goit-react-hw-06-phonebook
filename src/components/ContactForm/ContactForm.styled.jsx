import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 250px;
  padding: 30px 30px;
  padding-bottom: 25px;
  border-radius: 5px;
  margin-bottom: 35px;
  border-radius: 5px;
  background-color: white;
`;
export const Title = styled.h2`
  font-size: 25px;
  font-weight: 300;
  text-transform: full-width;
`;


export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;

  border: 0;
  border: 2px solid gray;
  border-radius: 5px;
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 7px 0;
  background: transparent;

`;

export const AddButton = styled.button`
margin-top: 50px;
font-size: 20px;
font-weight: 300;
width: 225px;
padding: 0px;
height: 35px;
color: #black;
border: 1px solid #000000;
border-radius: 5px;
cursor: pointer;
transition: all 0.25s linear 0s;
&:hover,
&:focus {
  border: 1px solid #white; background: #2dad9a;
  transform: scale(1.1);
`;

