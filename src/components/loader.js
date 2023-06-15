import React from 'react'

function Loader({text}) {
  return (
    <div id='overlay' className="text-center">
      <div className='center_spinner'>
      <div className="spinner_loader" style={{fontSize:'40px'}}>
      </div>
      <span className='d-block'>{text}</span>
      </div>
    </div>
  )
}

export default Loader