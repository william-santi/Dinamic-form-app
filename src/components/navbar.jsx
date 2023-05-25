import {Container, Navbar} from 'react-bootstrap'

export const NavbarMenu = () => {
  return (
    <Navbar bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand href='#!'>
                Dinamic <b>form</b>
            </Navbar.Brand>
            <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text>
                    signed in as: {' '}
                    <a 
                        href='https://'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Billy
                    </a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
