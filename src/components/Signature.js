import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useState } from 'react';

const Signature = () => {

  const [sign,setSign] = useState('');

  const hadleClear = () =>{

    sign.clear();

  }

  const hadleGenerate = () =>{

    if (sign.isEmpty()) {
      alert('Signature is empty.');
      return;
    }
  
    const signatureData = sign.toDataURL();
    setSign(signatureData);
    console.log(signatureData);
    
  }

 


  return (
    <div>
      <div style={{border: "solid 1px black"}}>
        <SignatureCanvas
        canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
          ref={data=>setSign(data)}
        />

      </div>   

      <button onClick={hadleClear} >Clear</button>
      <button onClick={hadleGenerate}>Generate</button>

    </div>
  )
}

export default Signature;
