import './App.css';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Navbars from './components/Navbars';
import Input from './components/Input';
import VideoPlayer from './components/VideoPlayer';


function App() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);
  const [check, setCheck] = useState(true);

 // used form input validation in Input component
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

  // Both the functions are use inside videoplayer component
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
     <Navbars/>

     <Input url={url} setUrl={setUrl} submition={submition} error={error}/>

      <div className="videoplayer">
        {visible || check ?
          <VideoPlayer correct={correct} wrong={wrong} url={url}/>
          :
          <Alert>Invalid url</Alert>
        }

      </div>

    </>
  );
}

export default App;
