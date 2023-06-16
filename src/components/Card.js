import React from 'react';
import download from '../assets/images/download.png';
import openicon from '../assets/images/open_icon.png';
import {downloadImage} from '../utils/download';
import {Link} from 'react-router-dom'

function Card({ _id, prompt, photo }) {
  return (
    <div className='grid_childs' key={_id}>
        <Link to={`view-post/${_id}`} state={{ _id, prompt, photo }}><button className='openbtn'><img src={openicon}/></button></Link>
        <img src={photo} alt={prompt} />
        <div className='image_body'>
          <p className="text-white text-sm">{prompt}</p>
          <button onClick={() => downloadImage(_id, photo)} className='download'><img src={download}/></button>
        </div>
    </div>
  )
}

export default Card