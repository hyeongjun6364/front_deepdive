import React, { useState } from 'react'

import backward from '../../assets/backward.svg';
import man from '../../assets/man.svg';
import women from '../../assets/women.svg';
import yellowman from '../../assets/yellowman.svg';
import yellowwomen from '../../assets/yellowfemale.svg';
import yellowcheck from '../../assets/yellowcheck.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Gender() {
    const [clickState,setClickState] = useState('');
    const handleSubmit=async()=>{
      try{
        // 성별 통신
        const response = await axios.post(`/api/member/gender/${clickState}`,{
  
        })
        // 회원가입
        const response2 = await axios.post('/api/member/register',{
  
        })
        console.log(response.data)
        console.log(response2.data)
      }
      catch(error){
        new Error(error);
      }
    }
    return (
      <form className='sex-wrap'>
          <Link to='/signup/3'>
          <img src={backward} className='backward-image' alt='backward-image'/>
          </Link> 
          <h1>성별을 알려주세요</h1>
          <div className='image-wrap'>
              <div className={`card ${clickState==='MALE' ? 'active' : ''}`} onClick={()=>setClickState('MALE')}>
                  <p>남자</p>
                  {clickState==="MALE" ? <img className='yellowcheck' src={yellowcheck} alt='check'/> :""}
                  <img src={clickState==="MALE" ?yellowman :man} alt='man-image'/>
              </div>
              <div className={`card ${clickState==='FEMALE' ? 'active' : ''}`} onClick={()=>setClickState('FEMALE')}>
              <p>여자</p>
              {clickState==="FEMALE" ? <img className='yellowcheck' src={yellowcheck} alt='check'/> :""}
              <img src={clickState==="FEMALE" ? yellowwomen : women} alt='women-image'/>
              </div>
          </div>
          <div className='button-wrap'>
          <button className={`${clickState!=='' ? 'active' : ''}`} onClick={handleSubmit}>다음</button>
          </div>
          
      </form>
    )
}

export default Gender