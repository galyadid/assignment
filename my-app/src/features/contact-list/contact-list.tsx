import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { ContactModal } from '../../components/contact-modal/contact-modal';
import { Contact } from '../../types/contact';
import type { ColumnsType } from 'antd/es/table';
import { ContactForm } from '../../components/contact-form/contact-form';
import { getAllContacts, updateAllContacts } from '../../services/contact-service/contact-service';

const columns: ColumnsType<Contact> = [
    {    
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {    
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {    
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    }
  ]

export const ContactList = () => {
    useEffect(() => {
        const contacts = getAllContacts();
        setContacts(contacts)
      }, [])
    
      const [contacts, setContacts] = useState<Contact[]>([]);
      const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
      const [isCreateContactModalOpen, setIsCreateContactModalOpen] = useState<boolean>(false);
      const [selectedContact, setSelectedContact] = useState<Contact | null>();
    
      const selectContact = (contact: Contact) => {
        setSelectedContact(contact);
        setIsContactModalOpen(true);
      }
    
      const onModalClose = () => {
        setIsContactModalOpen(false)
        setSelectedContact(null)
      }
    
      const onCreateClick = () => {
        setIsCreateContactModalOpen(true);
      }
    
      const onCreateContactCancel = () => {
        setIsCreateContactModalOpen(false)
      }
    
      const onCreateContactSubmit = (contact: Contact) => {
        setIsCreateContactModalOpen(false)
        const newContacts = [...contacts, contact];
        updateAllContacts(newContacts)
        setContacts(newContacts)
      }


    return (
        <div>
            <h2>Contacts List</h2>
            {isContactModalOpen && <ContactModal contact={selectedContact!} onModalClose={onModalClose}/>}
            {isCreateContactModalOpen && <ContactForm onCancel={onCreateContactCancel} onSubmit={onCreateContactSubmit} existingIds={contacts.map(contact => contact.phone)}/>}
            <Button onClick={onCreateClick} type="primary">
                Create New Contact
            </Button>
            <Table columns={columns} dataSource={contacts} rowKey='phone' onRow={(record) => {
                return {
                onClick: (event) => { selectContact(record)}
                };
            }}/>
        </div>
    )
}