import React from 'react'
import Alert from 'react-bootstrap/Alert';
import '../App.css';

function Input({url,setUrl,submition,error}) {
  return (
   
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
 
  )
}

export default Input
