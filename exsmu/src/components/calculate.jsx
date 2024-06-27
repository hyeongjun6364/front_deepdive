import React from 'react'

function Calculate() {
    const handleList=()=>{
        const $ul = document.getElementById("ul");
        let list = ""
        for(let i=0 ; i<1000; i++){
            list += `<li> ${i}</li>`
        }
        $ul.innerHTML = list;
    }

    const handleList2 = () => {
        const $ul = document.getElementById("ul");
        for(let i=0 ; i<2000; i++){
            $ul.innerHTML += `<li> ${i}</li>`
        }
    }
   
  return (
    <>
     <div onClick={handleList2}>리스트 추가</div>
     <ul id='ul'></ul>
    </>
   
  )
}

export default Calculate