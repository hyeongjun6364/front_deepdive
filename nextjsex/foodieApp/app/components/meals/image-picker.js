'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState()
  const imageInputRef = useRef()
  function handlePickClick() {
    // click()함수는 input속성을 강제로 클릭이벤트를 발생시키는 함수.
    imageInputRef.current.click()
  }
  function handleImageChange(event) {
    const file = event.target.files[0]
    if (!file) {
      setPickedImage(null)
      return
    }
    //미리보기를 하려면 data URL형식으로 변환을 해야한다.
    const fileReader = new FileReader() //이름대로 파일을 읽을 수 있는 자바스크립트 내장 객체.
    //load 파일 읽기 작업이 완료되면 작동하게된다.
    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }
    //파일의 url을 fileReader에게 전달한다.
    fileReader.readAsDataURL(file)
  }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        {/* 파일 업로드할 때 png, jpeg파일만 받을 수 있다는 뜻임. */}
        <input
          className={classes.input}
          ref={imageInputRef}
          type="file"
          id={name}
          accept="image/png , image/jpeg"
          name="image"
          onChange={handleImageChange}
          required
        />
        {/* onclick은 클라이언트에서 일어나기에 클라이언트 컴포넌트로 만든다 */}
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          {' '}
          Pick an Image
        </button>
      </div>
    </div>
  )
}
