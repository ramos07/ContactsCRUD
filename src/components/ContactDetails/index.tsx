import React, { FC, FormEvent, useEffect, useState } from 'react'
import { ContactDetailsContainer, ContactNameContainer, ContactEmailContainer, FormGroup, Label, Input, EmailList, Email, EmailItem, RemoveEmailIcon, AddEmailWrap, AddEmailBtn, AddEmailIcon, DeleteBtn, CancelBtn, SaveBtn } from './DetailsComponents'

type DetailsProps = { contactId: number | null }

const Index: FC<DetailsProps> = ({ contactId } ) => {

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [emails, setEmails] = useState<string[]>([])

    useEffect(() => {
        const fetchContact = async (): Promise<any> => {
            const contact = await fetch(`https://avb-contacts-api.herokuapp.com/contacts/${contactId}`).then(res => res.json())
            setFirstName(contact.firstName)
            setLastName(contact.lastName)
            setEmails(contact.emails)
        }
        fetchContact()
    },[contactId])

    const onFirstNameChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFirstName(e.currentTarget.value)
    }

    const onLastNameChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setLastName(e.currentTarget.value)
    }

    const updateContact = async (): Promise<any> => {

        const data = {
            firstName,
            lastName,
            emails
        }

        await fetch(`https://avb-contacts-api.herokuapp.com/contacts/${contactId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => console.log("Success", response)).catch(error => console.error(error))

    }

    return (
        <ContactDetailsContainer>
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
                                    <RemoveEmailIcon />
                                </EmailItem>
                            ))
                        )}
                    </EmailList>
                </FormGroup>
                <AddEmailWrap>
                    <AddEmailIcon />
                    <AddEmailBtn>add email</AddEmailBtn>
                </AddEmailWrap>
            </ContactEmailContainer>
            <DeleteBtn>Delete</DeleteBtn>
            <CancelBtn>Cancel</CancelBtn>
            <SaveBtn onClick={updateContact}>Save</SaveBtn>
        </ContactDetailsContainer>
    )
}

export default Index
