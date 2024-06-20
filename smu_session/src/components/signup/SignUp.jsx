import React, { useState } from 'react';

import backward from '../../assets/backward.svg';
import smu from '../../assets/smu.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
function SignUp() {
  const [emailData,setEmailData] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();
  console.log(id)
  const handleInput=(value)=>{
    setEmailData((prev)=>({
      ...prev,
      value
    }))
  }
  const handleSubmit = async() => {
    navigate('/signup/3')
  }
  console.log(emailData)
  return (
    <form className='email-wrap' >
      <Link to='/'>
        <img src={backward} className='backward-image' alt='backward-image'/>
      </Link> 
      <div className='stage-wrap'>
        <span className='active'>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
      <h1>재학생 인증을 위해 <br/> 학교 이메일 주소를 입력해 주세요</h1>
      <div className='input-wrap'>
        <input placeholder='학번' onChange={(e)=>handleInput(e.target.value)}/>
        <img src={smu} className='smu-image' alt='smu-image' />
      </div>
      <div className='button-wrap'>
        <button onClick={handleSubmit} className={`${emailData!=='' ? 'active': ''}`}>인증메일받기</button>
      </div>
      
    </form>
  )  
}

export default SignUp