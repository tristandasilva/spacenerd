import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
   const dispatch = useDispatch()
   const history = useHistory()

   const userLogin = useSelector(state => state.userLogin)
   const { userInfo } = userLogin

   const logoutHandler = e => {
      e.preventDefault()
      history.push('/')
      dispatch(logout())
   }
   return (
      <header>
         <Navbar variant='light' expand='lg' collapseOnSelect>
            <Container>
               <LinkContainer to='/'>
                  <Navbar.Brand>
                     <img
                        className='mr-2'
                        src='../images/saturn.png'
                        alt='Saturn Logo'
                        width='25px'
                        height='25px'
                     ></img>
                     SPACENERD
                  </Navbar.Brand>
               </LinkContainer>

               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ml-auto'>
                     <LinkContainer to='/cart'>
                        <Nav.Link className='header-links'>
                           <i className='fas fa-shopping-cart mr-2'></i>Cart
                        </Nav.Link>
                     </LinkContainer>
                     {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                           <LinkContainer to='/profile'>
                              <NavDropdown.Item>Profile</NavDropdown.Item>
                           </LinkContainer>
                           <NavDropdown.Item onClick={logoutHandler}>
                              Logout
                           </NavDropdown.Item>
                        </NavDropdown>
                     ) : (
                        <LinkContainer to='/login'>
                           <Nav.Link>
                              <i className='fas fa-user mr-2'></i>Sign In
                           </Nav.Link>
                        </LinkContainer>
                     )}
                     {userInfo && userInfo.isAdmin && (
                        <NavDropdown title='Admin' id='adminmenu'>
                           <LinkContainer to='/admin/userlist'>
                              <NavDropdown.Item>Users</NavDropdown.Item>
                           </LinkContainer>
                           <LinkContainer to='admin/productlist'>
                              <NavDropdown.Item>Products</NavDropdown.Item>
                           </LinkContainer>
                           <LinkContainer to='admin/orderlist'>
                              <NavDropdown.Item>Orders</NavDropdown.Item>
                           </LinkContainer>
                        </NavDropdown>
                     )}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   )
}

export default Header
