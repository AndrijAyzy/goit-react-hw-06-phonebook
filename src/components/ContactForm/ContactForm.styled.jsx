import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 390px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #000000;
  background: #00e3db;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FieldInput = styled(Field)`
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
  margin-bottom: 5px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  font-style: italic;
  color: ${props => props.theme.colors.error};
`;

export const FormBtnAdd = styled.button`
  margin-top: 32px;
  border-radius: 7px;
  cursor: pointer;
  color: #black;
  border: 1px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.25s linear 0s;
  &:hover,
  &:focus {
  border: 1px solid #white; background: #1ca105;
  transform: scale(1.1);
`;

