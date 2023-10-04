import React from 'react';

const Tags = () => {

  const[count1,setCount1]=React.useState(0)
  const[count2,setCount2]=React.useState(0)

  
///////////////////////////////////////////////////////
  //почему 2 раза в консоли component did mount? потому . что выполняется WILL UNMOUNT!!!
  // ПОЧЕМУ ВЫПОЛНЯЕТСЯ WILL UNMOUNT ПРИ ПЕРВОЙ ЗАГРУЗКЕ????
  // React.useEffect(()=>{
  //   console.log('component did mount');
  //   return(()=>{console.log('WILL UNMOUNT')})
  // },[])
  // //это тоже 2 раза при первой загрузке,потому . что выполняется WILL UNMOUNT!!!
  // React.useEffect(()=>{
  //   console.log('component did update')
  // })
  // //это тоже 2 раза при первой загрузке,потому . что выполняется WILL UNMOUNT!!!
  // React.useEffect(()=>{
  //   console.log('add count')
  // },[count])
  ////////////////////////////////////////////

//  ссылка на елемент ul
 const ulRef = React.useRef()
const tagRef=React.useRef()




  /////////////////////////////////////////////////
  let item ='item'
const[tag,setTag]=React.useState([1])
const addTag =()=>{
    setTag((prev)=>([...prev,prev[prev.length-1]+1])
    )
  console.log(`новый tag = ${ tag}`)
}
//делаю таймер . добавляет тэг каждые 2 сек.////работае с исп useRef
let timerIdRef=React.useRef()
const timer=()=>{
   timerIdRef.current=  setInterval(addTag,2000)
}
// функция сброса таймера//работае с исп useRef
const stop = ()=>{
    clearInterval(timerIdRef.current)
    console.log(tagRef.current)
}
///////////////////////////////////////////////////////////

  /////////////////////////////////функция вывода на консоль при скроле
let hendlScroll=React.useCallback(
   ()=>{
    console.log('SCROLL')
    console.log(ulRef.current)
    

  },[])

  //////////////////////////////////добавили скролл при первом рендере
 
  React.useEffect(()=>{
   console.log(ulRef.current)
  ulRef.current.addEventListener('scroll',hendlScroll)
  },[])
  /////////////////////////////////убрали скролл//скролл не убирается после выполнения addTag / не знаю почему.Если не выполнять addTag,то убирается
const endScroll=()=>{
  console.log(ulRef.current)
    ulRef.current.removeEventListener('scroll',hendlScroll)
   
};
  ////////////как получить значение атрибута,,???
  // const atr = ulRef.current.getAttribute('scroll')
  // console.log(atr)
// }
  ////////////////////////////////


  return (
    <ul className='container' id='container' ref={ulRef} >
     {tag.map((t,index)=>
        <div className={item} key={t}>{t}</div>)
     }
     
<button onClick={()=>{setCount1(count1+1)}} className={`${item} btn`} style={{backgroundColor:'#be0ddd99'}} >{count1}</button>



<button onClick={()=>{setCount2(count2-1)}} className='item btn' style={{backgroundColor:'#be0ddd90'}}>{count2}</button>
      <button onClick={addTag} className=' item btn' style={{backgroundColor:'blue'}}>+</button>

      <button onClick={timer} className='item btn' style={{backgroundColor:'grey'}}>START</button>
      <button onClick={stop} className='item btn' style={{backgroundColor:'#ffeb3b'}}>STOP</button>

      <button onClick={endScroll}>END SCROLL</button>
    </ul>
  );
};

export default Tags;