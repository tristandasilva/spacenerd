import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

const App = () => {
   return (
      <>
         <Header />
         <main>
            <Container>ALL CONTENT GOES HERE!</Container>
         </main>
         <Footer />
      </>
   )
}

export default App
