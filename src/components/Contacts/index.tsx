import React, { FC, useEffect, useState } from 'react'
import { ContactsContainer, ContactsListContainer, ContactName, ContactsTopSection, Title, AddContactIcon
 } from "./ContactsComponents";

import ContactDetails from '../ContactDetails'
import AddContact from '../AddContact'

interface Contact {
    id: number,
    firstName: string,
    lastName: string,
    emails: string[]
}

const Index: FC = () => {

    const [contacts, setContacts] = useState<Contact[]>([]) // Contacts from server
    const [contactId, setContactId] = useState<number | null>(null) // ID number of contact to edit

    const [isAddingContact, setIsAddingContact] = useState<boolean>(false) // Determine whether user is adding a new contact or not

    // Hook to load functions variables on component load
    useEffect(() => {
        fetchContacts()
    },[])

    // Fetch the contacts from the API
    const fetchContacts = async (): Promise<any> => {
        const { contacts } = await fetch('https://avb-contacts-api.herokuapp.com/contacts/paginated?page=1').then(res => res.json())
        setContacts(contacts)
    }

    const handleAdding = () => {
        setIsAddingContact(!isAddingContact)
        setContactId(null)
    }

    const handleEditing = (id: number) => {
        setContactId(id)
        if(isAddingContact === true){
            setIsAddingContact(false)
        }
    }

    return (
        <>
            <ContactsContainer>
                <ContactsTopSection>
                    <Title>Contacts</Title>
                    <AddContactIcon onClick={handleAdding} />
                </ContactsTopSection>
                <ContactsListContainer>
                    {
                        contacts.sort((a,b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0)).map(contact => (
                            <ContactName key={contact.id} onClick={() => handleEditing(contact.id)}>{contact.lastName + " " + contact.firstName}</ContactName>
                        ))
                    }
                </ContactsListContainer>
            </ContactsContainer>
            {
                isAddingContact && (
                    <AddContact />
                )
            }
            {
                contactId && (
                    <ContactDetails contactId={contactId} />
                )
            }
        </>
    )
}

export default Index
