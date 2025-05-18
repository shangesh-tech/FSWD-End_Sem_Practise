import React from 'react'

const ContactList = ({contacts, handleEdit, handleDelete}) => {
  return (
    <>
        <h1>Contact List</h1>
        <ul>
            {contacts.map((contact, index) => (
                    <li key={index}>
                    <span>{contact.name}</span>
                    <span>{contact.phone}</span>
                    <span>{contact.email}</span>
                    <span>{contact.bio}</span>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
            ))}
        </ul>
    </>
  )
}

export default ContactList