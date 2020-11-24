import React, { FC, FormEvent, useState } from 'react'
import { AddContactContainer, ContactNameContainer, FormGroup, Label, Input, EmailInput, ContactEmailContainer, AddEmailWrap, AddEmailIcon, AddEmailBtn, CancelBtn, SaveBtn, EmailList, EmailItem, Email, RemoveEmailIcon, RemoveEmailButton } from './AddContactComponents'

const Index: FC = () => {

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [emails, setEmails] = useState<string[]>([])
    const [emailToAdd, setEmailToAdd] = useState<string>('')

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

    // Handle email input change
    const handleAddEmailChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmailToAdd(e.currentTarget.value)
    }

    // Add an email 
    const handleAddEmail = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(emailToAdd !== ""){
            setEmails(emails.concat(emailToAdd))
            setEmailToAdd('')
        }
    }

    // Remove an email
    const handleRemoveEmail = (email: string) => {
        const updatedEmailList = emails.filter(element => element !== email)
        setEmails(updatedEmailList)
    }

    // Add new contact
    const handleSubmit = async (e:FormEvent): Promise<void> => {
        e.preventDefault()
        const data = {
            firstName,
            lastName,
            emails
        }
        interface Contact {
            firstName: string,
            lastName: string,
        }

        const contact: Contact = await fetch('https://avb-contacts-api.herokuapp.com/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).catch(error => {
            console.error(error.message)
        })

        if(typeof contact.firstName !== 'undefined'){
            console.log(contact)
            let{ firstName, lastName } = contact
            alert(`Successfully added ${firstName} ${lastName} as a contact`)
            window.location.href = '/'
        }else{
            alert('There was an error saving the contact.')
        }
    }
    

    return (
        <AddContactContainer onSubmit={handleSubmit}>
            <ContactNameContainer>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input value={firstName} onChange={onFirstNameChange} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input value={lastName} onChange={onLastNameChange} required/>
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
                    <EmailInput placeholder="Email" value={emailToAdd} onChange={handleAddEmailChange} />
                    <AddEmailBtn onClick={handleAddEmail}>
                        <AddEmailIcon />
                        add email
                    </AddEmailBtn>
                </AddEmailWrap>
            </ContactEmailContainer>
            <CancelBtn><a href="/">Cancel</a></CancelBtn>
            <SaveBtn type="submit">Save</SaveBtn>
        </AddContactContainer>
    )
}

export default Index
