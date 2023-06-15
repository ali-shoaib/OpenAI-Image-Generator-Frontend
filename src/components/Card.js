import React from 'react';
import download from '../assets/images/download.png';
import { downloadImage } from '../utils/download';

function Card({ _id, prompt, photo }) {
  return (
    <div className='grid_childs' key={_id}>
        <img src={photo} alt={prompt} />
        <div className='image_body'>
            <p className="text-white text-sm">{prompt}</p>
            <button onClick={() => downloadImage(_id, photo)}><img src={download}/></button>
        </div>
    </div>
  )
}

export default Card