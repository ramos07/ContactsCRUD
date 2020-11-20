import React, { FC, FormEvent, useState } from 'react'
import { AddContactContainer, ContactNameContainer, FormGroup, Label, Input, EmailInput, ContactEmailContainer, AddEmailWrap, AddEmailIcon, AddEmailBtn, CancelBtn, SaveBtn, EmailList, EmailItem, Email, RemoveEmailIcon, RemoveEmailButton } from './AddContactComponents'

const Index: FC = () => {

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [emails, setEmails] = useState<string[]>([])
    const [emailToAdd, setEmailToAdd] = useState<string>('')

    const onFirstNameChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFirstName(e.currentTarget.value)
    }
    
    const onLastNameChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setLastName(e.currentTarget.value)
    }

    const handleAddEmailChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmailToAdd(e.currentTarget.value)
    }

    const handleAddEmail = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(emailToAdd !== ""){
            setEmails(emails.concat(emailToAdd))
            setEmailToAdd('')
        }
    }

    const handleRemoveEmail = (email: string) => {
        const updatedEmailList = emails.filter(element => element !== email)
        setEmails(updatedEmailList)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        const data = {
            firstName,
            lastName,
            emails
        }

        const { statusText } = await fetch('https://avb-contacts-api.herokuapp.com/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(statusText.toLowerCase() === "created"){
            alert("successfully added new contact")
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
                    <AddEmailIcon />
                    <AddEmailBtn onClick={handleAddEmail}>add email</AddEmailBtn>
                </AddEmailWrap>
            </ContactEmailContainer>
            <CancelBtn>Cancel</CancelBtn>
            <SaveBtn type="submit">Save</SaveBtn>
        </AddContactContainer>
    )
}

export default Index
