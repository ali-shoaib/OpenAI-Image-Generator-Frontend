import React, { useEffect,useRef } from 'react';
import {useLocation} from "react-router-dom";
import { downloadImage} from '../utils/download';
import download from '../assets/images/download.png';

function ViewPost() {
    const {state:{_id, prompt, photo}} = useLocation();
  return (
    <div className='viewpost_container'>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p>{prompt}</p>
            <button onClick={() => downloadImage(_id, photo)} className='download'><img src={download}/></button>
        </div>
        <img src={photo} alt={prompt}/>
    </div>
  )
}

export default ViewPost