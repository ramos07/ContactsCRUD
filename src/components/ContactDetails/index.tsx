import React, { FC, FormEvent, useEffect, useState } from 'react'
import { EmailInput, ContactDetailsContainer, ContactNameContainer, ContactEmailContainer, FormGroup, Label, Input, EmailList, Email, EmailItem, RemoveEmailIcon, AddEmailWrap, AddEmailBtn, AddEmailIcon, DeleteBtn, CancelBtn, SaveBtn, RemoveEmailButton } from './DetailsComponents'

type DetailsProps = { contactId: number | null }

const Index: FC<DetailsProps> = ({ contactId } ) => {

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [emails, setEmails] = useState<string[]>([])
    const [emailToAdd, setEmailToAdd] = useState<string>('')

    // On loading the component get the contact from the server from their id
    useEffect(() => {
        const fetchContact = async (): Promise<void> => {
            const contact = await fetch(`https://avb-contacts-api.herokuapp.com/contacts/${contactId}`).then(res => res.json())
            setFirstName(contact.firstName)
            setLastName(contact.lastName)
            setEmails(contact.emails)
        }
        fetchContact()
    },[contactId])

    // Handle first name input change
    const onFirstNameChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFirstName(e.currentTarget.value)
    }

    // Handle last name input change
    const onLastNameChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setLastName(e.currentTarget.value)
    }

    // Handle an email input
    const handleAddEmailChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmailToAdd(e.currentTarget.value)
    }

    // Add an email to the list for the contact
    const handleAddEmail = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(emailToAdd !== ""){
            setEmails(emails.concat(emailToAdd))
            setEmailToAdd('')
        }
    }

    // Remove an email from list
    const handleRemoveEmail = (email: string) => {
        const updatedEmailList = emails.filter(element => element !== email)
        setEmails(updatedEmailList)
    }

    // Update the contact
    const updateContact = async (): Promise<void> => {

        const data = { firstName, lastName, emails }

        const response = await fetch(`https://avb-contacts-api.herokuapp.com/contacts/${contactId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => console.log(response)).catch(error => console.error(error))

        console.log(response)

    }

    // Delete the contact
    const deleteContact = async (): Promise<void> => {
        await fetch(`https://avb-contacts-api.herokuapp.com/contacts/${contactId}`, {
            method: 'DELETE'
        }).then((response) => console.log(response)).catch(error => console.error(error))
    }

    return (
        <ContactDetailsContainer onSubmit={updateContact}>
            <ContactNameContainer>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input value={firstName} onChange={onFirstNameChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input value={lastName} onChange={onLastNameChange} />
                </FormGroup>
            </ContactNameContainer>
            <ContactEmailContainer>
                <FormGroup>
                    <Label>Email</Label>
                    <EmailList>
                        {emails && (
                            emails.map(email => (
                                <EmailItem key={email}>
                                    <Email>{email}</Email>
                                    <RemoveEmailButton onClick={() => handleRemoveEmail(email)}>
                                        <RemoveEmailIcon />
                                    </RemoveEmailButton>
                                </EmailItem>
                            ))
                        )}
                    </EmailList>
                </FormGroup>
                <AddEmailWrap>
                    <EmailInput placeholder='Email' value={emailToAdd} onChange={handleAddEmailChange} />
                    <AddEmailBtn onClick={handleAddEmail}>
                        <AddEmailIcon />
                        add email
                    </AddEmailBtn>
                </AddEmailWrap>
            </ContactEmailContainer>
            <DeleteBtn onClick={deleteContact}>Delete</DeleteBtn>
            <CancelBtn><a href="/">Cancel</a></CancelBtn>
            <SaveBtn type='submit'>Save</SaveBtn>
        </ContactDetailsContainer>
    )
}

export default Index
