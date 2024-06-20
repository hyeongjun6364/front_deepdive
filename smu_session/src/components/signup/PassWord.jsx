import React, { useState } from 'react';

import backward from '../../assets/backward.svg';
import password from '../../assets/password.svg';
import openpassword from '../../assets/open-password.svg';
import check from '../../assets/check.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
function PassWord() {
    const [passWord,setPassWord] = useState();
    const [imageState,setImageState] = useState(false);
    const navigate = useNavigate();
    const handleInput=(value)=>{
        setPassWord(value)
    }
    const handlePassWordImage=()=>{
        setImageState(!imageState);
    }
    const handleSubmit=async()=>{
        navigate('/signup/4')
    }
  return (
    <form className='password-wrap'>
        <Link to='/signup/1'>
        <img src={backward} className='backward-image' alt='backward-image'/>
      </Link> 
      <div className='stage-wrap'>
        <span><img src={check} className='check' alt='check-image'/> </span>
        <span><img src={check} className='check' alt='check-image'/></span>
        <span  className='active'>3</span>
        <span>4</span>
      </div>
      <h1>로그인 때 사용할 <br/> 비밀번호를 입력해 주세요</h1>
      <p className='description'>로그인 아이디는 학교 이메일 주소를 입력하면 돼요</p>
      <div className='input-wrap'>
        <input placeholder='비밀번호 입력' type={`${imageState===false ? 'password' : ''}`} onChange={(e)=>handleInput(e.target.value)}/>
        <img src={`${imageState===false ? password: openpassword}`} onClick={handlePassWordImage} className='smu-image' alt='smu-image' />
      </div>
      <div className='password-condition'>
        <span>
            <img src={check} alt='check'/>
        </span>
      </div>
      <div className='button-wrap'>
        <button onClick={handleSubmit}>다음</button>
      </div>
      
    </form>
  )
}

export default PassWord