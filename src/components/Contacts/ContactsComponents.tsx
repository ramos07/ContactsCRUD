import styled from 'styled-components'
import { IoMdAddCircle } from 'react-icons/io'

export const ContactsContainer = styled.div`
    position: relative;
    width: 20vw;
    height: 100vh;
    background: #F8FAFF;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 40vh;
    }
`

export const ContactsTopSection = styled.div`
    position: absolute;
    top: 14px;
    left: 17px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
`

export const Title = styled.h1`
    font-weight: normal;
    font-size: 30px;
`

export const AddContactIcon = styled(IoMdAddCircle)`
    color: #579AFF;
    font-size: 2.5rem;
    margin-left: 1rem;
    cursor: pointer;
`

export const ContactsListContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 500px;
    top: 77px;
    line-height: 2.5rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    @media screen and (max-width: 768px) {
        overflow-y: scroll;
        height: 25vh;
    }

`
export const ContactName = styled.p`
    padding-left: 1rem;
    font-size: 18px;

    &:hover {
        background-color: #579AFF;
        color: white;
        cursor: pointer;
    }

`