import { IoMdRemoveCircle, IoMdAddCircle } from 'react-icons/io'
import styled from 'styled-components'

export const ContactDetailsContainer = styled.form`
    position: relative;
    width: 80vw;

    @media screen and (max-width: 768px) {
        height: 60vh;
    }
`

export const ContactNameContainer = styled.div`
    position: absolute;
    top: 77px;
    left: 33px;
    right: 33px;
    
    padding: .5rem 0;

    display: flex;
    flex-direction: row;
    justify-content: start;
    column-gap: 33px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }   
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
`

export const Label = styled.label`
`

export const Input = styled.input`
    height: 36px;
    width: 345px;
    background-color: #F9FBFF;
    border: 1px solid #D7E7FF;
    box-sizing: border-box;
    font-size: 18px;
    padding-left: 12px;
`

export const ContactEmailContainer = styled.div`
    position: absolute;
    top: 157px;
    left: 33px;
    right: 33px;

    padding: .5rem 0;

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        top: 250px;
        align-items: center;
    }
`

export const EmailList = styled.ul`
    list-style: none;
`

export const EmailInput = styled.input`
    height: 36px;
    width: 345px;
    background-color: inherit;
    box-sizing: border-box;
    font-size: 16px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #D7E7FF;
    outline: none;
`

export const EmailItem = styled.li`
    margin: 1rem 0;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`
export const Email = styled.p`
    padding: .5rem 0;
    width: 250px;
`

export const RemoveEmailButton = styled.button`
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
`

export const RemoveEmailIcon = styled(IoMdRemoveCircle)`
    color: #FF5757;
    font-size: 2rem;
    margin-top: 4px;
`

export const AddEmailWrap = styled.div`
    margin-top: 1rem; 
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
`

export const AddEmailIcon = styled(IoMdAddCircle)`
    color: #579AFF;
    font-size: 2rem;
`

export const AddEmailBtn = styled.button`
    display: flex;
    column-gap: .5rem;
    color: #579AFF;
    font-size: 18px;
    align-items: center;
    background-color: transparent;
    outline: none;
    border: none;
    &:hover {
        cursor: pointer;
    }
`

export const DeleteBtn = styled.button`
    position: absolute;
    left: 33px;
    bottom: 38px;
    padding: 3px 30px;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    background: #FF5757;
    outline: none;
    border: #FF5757;
    color: white;

    &:hover {
        background: #ec9595;
    }
`

export const CancelBtn = styled.button`
    position: absolute;
    right: 180px;
    bottom: 38px;
    padding: 2px 30px;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    background: #F9FBFF;
    border: 1px solid #579AFF;
    box-sizing: border-box;
    outline: none;
    a {
        text-decoration: none;
    }

    &:hover {
        background: #989a9c;
        color: white;
    }
`

export const SaveBtn = styled.button`
    position: absolute;
    bottom: 38px;
    right: 30px;
    padding: 3px 30px;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    background: #579AFF;
    color: white;
    border: #579AFF;
    outline: none;

    &:hover {
        background: #a0c6ff;
    }
`

