import React from 'react'

import backward from '../../assets/backward.svg';
function Sex() {
  return (
    <div className='sex-wrap'>
        <img src={backward} className='backward-image' alt='backward-image'/>
        <h1>성별을 알려주세요</h1>
        <div className='image-wrap'>
            <div>
                
            </div>
        </div>
        <div className='button-wrap'>
        <button>다음</button>
        </div>
        
    </div>
  )
}

export default Sex