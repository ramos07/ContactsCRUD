import React, { FC, Fragment } from 'react'
import { AppContainer, GlobalStyle } from "./assets/styles";

import Contacts from './components/Contacts'
// import ContactDetails from './components/ContactDetails'

const App: FC = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AppContainer>
        <Contacts />
        {/* <ContactDetails /> */}
      </AppContainer>
    </Fragment>
  )
}

export default App
