import {Contact} from '../../types/contact';

export const getAllContacts = (): Contact[] => {
    try {
      const contactsJson = localStorage.getItem('contacts');

      if (contactsJson) {
        return JSON.parse(contactsJson) as Contact[];
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error while getting contacts from local storage:', error);
      return [];
    }
  }
  
  export const updateAllContacts = (contacts: Contact[]) => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.error('Error while updating contacts:', error);
    }
  }