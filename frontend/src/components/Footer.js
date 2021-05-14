import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
   return (
      <footer>
         <Container>
            <Row>
               <Col className='text-center' style={{ margin: '5rem 0 1rem 0' }}>
                  Copyright &copy; SPACENERD
               </Col>
            </Row>
         </Container>
      </footer>
   )
}

export default Footer
