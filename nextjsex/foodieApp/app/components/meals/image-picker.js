"use client"
import { useRef } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({label, name}){
    const imageInputRef=useRef();
    function handlePickClick(){
        // click()함수는 input속성을 강제로 클릭이벤트를 발생시키는 함수.
        imageInputRef.current.click();
    }
    return <div className={classes.picker}>
        <label htmlFor='image'>{label}</label>
        <div className={classes.controls}>
            {/* 파일 업로드할 때 png, jpeg파일만 받을 수 있다는 뜻임. */}
            <input className={classes.input} ref={imageInputRef} type='file' id={name} accept='image/png , image/jpeg' name='image'/>
            {/* onclick은 클라이언트에서 일어나기에 클라이언트 컴포넌트로 만든다 */}
            <button className={classes.button} type='button' onClick={handlePickClick}> Pick an Image</button>
        </div>
    </div>
}