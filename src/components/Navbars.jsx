import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://www.freeiconspng.com/thumbs/video-icon/video-player-icon-15.png"
              width="60"
              height="60"
              className="d-inline-block align-center "
              style={{ borderRadius: '50px' }}
            />
            <h2 style={{ fontWeight: '700', display: 'inline', marginLeft: '10px'}}>VideoPlayer</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Navbars
