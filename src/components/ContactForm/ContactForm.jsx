import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import React from 'react';
import { FaUserPlus, FaUser } from 'react-icons/fa';
import {
  FormField,
  Form,
  ErrorMessage,
  FormBtnAdd,
  LabelWrapper,
  FieldInput,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import {
  notificationMassege,
  notificationOptions,
} from 'components/Notification/Notification';
import { toast } from 'react-toastify';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz... '
    )
    .required(),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);


  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        if (
          contacts.some(
            contact =>
              contact.name.toLocaleLowerCase() ===
              values.name.toLocaleLowerCase()
          )
        ) {
          toast.error(
            `${values.name} ${notificationMassege}`,
            notificationOptions
          );
          return;
        }
        dispatch(addContact({ ...values, id: nanoid() }));

        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          <LabelWrapper>
            Name
          </LabelWrapper>
          <FieldInput name="name" />
          <ErrorMessage name="name" component="div" />
        </FormField>

        <FormField>
          <LabelWrapper>
            Number
          </LabelWrapper>
          <FieldInput name="number" />
          <ErrorMessage name="number" component="div" />
        </FormField>

        <FormBtnAdd type="submit">
          Add contact
        </FormBtnAdd>
      </Form>
    </Formik>
  );
};
