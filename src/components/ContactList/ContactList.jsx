import React from 'react';
import { Item, List, ListBtnDel } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const normalizeFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts
    ?.filter(contact =>
      contact?.name?.toLocaleLowerCase().includes(normalizeFilter)
    )
    .sort((firstName, secondName) =>
      firstName.name.localeCompare(secondName.name)
    );

  const delContact = contactId => dispatch(deleteContact(contactId));

  return (
    <List>
      {visibleContacts.map(item => (
        <Item key={item.id}>
          <span>{item.name}</span>
          <span>{item.number}</span>
          <ListBtnDel onClick={() => delContact(item.id)}>
            <p>Delete</p>
          </ListBtnDel>
        </Item>
      ))}
    </List>
  );
};
