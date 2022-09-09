import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ReactPlayer from 'react-player'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


function App() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const [check, setCheck] = useState(true);


  const submition = (e) => {
    e.preventDefault();
    if (!isNaN(url) || url === '') {
      setError(true);
      setVisible(false);
    }
    else {
      setError(false);
      setVisible(true);
    }


  }



  const correct = () => {
    setVisible(true);
    setCheck(true);
  }
  const wrong = () => {
    setVisible(false);
    setCheck(false);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://www.freeiconspng.com/thumbs/video-icon/video-player-icon-15.png"
              width="50"
              height="50"
              className="d-inline-block align-top "
              style={{ borderRadius: '50px' }}
            />
            <h2 style={{ fontWeight: '700', display: 'inline', marginLeft: '10px' }}>VideoPlayer</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className='input'>
        <div style={{ backgroundColor: '#f2f2f0', padding: '20px 25px', boxShadow: '0px 0px 5px black' }}>
          <input className='input' value={url} onChange={(e) => setUrl(e.target.value)} style={{ height: '35px', borderRadius: '6px', border: 'none', boxShadow: '0px 0px 5px black' }} type="text" placeholder='Enter URL' />

          <button style={{ display: 'inline' }} className='btn btn-primary mt-3' onClick={submition}>Submit</button>
          <button className='btn btn-primary ms-5 mt-3' onClick={() => setUrl('')}>Clear</button>


          {error &&
            <Alert variant='danger' className='mt-3'>
              Invalid Input
            </Alert>
          }
        </div>
      </div>



      <div className="videoplayer">
        {visible || check ?
          <ReactPlayer controls style={{ marginLeft: '10px', marginRight: '10px' }} height={250} width={500} url={url} onReady={correct} onError={wrong} />
          :
          <Alert>No Such Video url</Alert>
        }




      </div>

    </>
  );
}

export default App;
