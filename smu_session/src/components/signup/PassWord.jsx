import React, { useState } from 'react';
import axios from 'axios';

import backward from '../../assets/backward.svg';
import password from '../../assets/password.svg';
import openpassword from '../../assets/open-password.svg';
import check from '../../assets/whitecheck.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';

function PassWord() {
    const [passWord,setPassWord] = useState('');
    const [imageState,setImageState] = useState(false);
    const navigate = useNavigate();
    const isLength = passWord?.length>=8 && passWord?.length<=15;
    const special_letter = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    const isSpecial = special_letter.test(passWord);
    const Duplication = /([A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?])\1{3,}/g;
    const isDuplication = Duplication.test(passWord);
    const handleInput=(value)=>{
        setPassWord(value)
        
    }
    const handlePassWordImage=()=>{
        setImageState(!imageState);
    }
    const handleSubmit=async(event)=>{
      //api통신
      event.preventDefault()
      if(isLength && isSpecial && isDuplication===false){
        try{
          const response = await axios.post('http://localhost:8080/api/user/password',{
            "password": passWord
          });
          console.log(response.data)
          navigate('/signup/4')
        }
        catch(error){
          new Error(error)
        }
        navigate('/signup/4')
      }
      else{
        alert('조건을 확인해주세요')
      }
      
      
     
    }
    
    console.log(passWord)
    console.log("isSpecial: ",isSpecial)
   
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
      <div className='condition'>
        <span className={`circle ${isLength ? 'active' : ''}`}><img src={check} alt='check'/> </span>
        <p className={`${isLength ? 'active' : ''}`}>8자 이상, 15자 이하로 설정해 주세요</p>
      </div>
      <div className='condition'>
        <span className={`circle ${isSpecial===true ? 'active' : ''}`}><img src={check} alt='check'/> </span>
        <p className={ isSpecial===true ? 'active' : ''}>특수 문자를 사용해 주세요</p>
      </div>
      <div className='condition'>
        <span className={`circle ${`${isDuplication===false && passWord!=='' ? 'active' : ''}`}`}><img src={check} alt='check'/> </span>
        <p className={`${isDuplication===false && passWord!=='' ? 'active' : ''}`}>똑같은 문자가 4번 반복되면 안돼요</p>
      </div>
      <div className='button-wrap'>
        <button className={`${isLength && isDuplication===false && isSpecial ? 'active' : ''}`} onClick={handleSubmit}>다음</button>
      </div>
      
    </form>
  )
}

export default PassWord