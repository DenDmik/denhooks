import React from 'react';

const Tags = () => {

  const[count,setCount]=React.useState(0)

  
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
  let item ='item'
const[tag,setTag]=React.useState([1])
const addTag =()=>{
    setTag((prev)=>([...prev,prev[prev.length-1]+1])
    )
  console.log(tag)
}
//делаю таймер . добавляет тэг каждые 2 сек.////работае с исп useRef
let timerIdRef=React.useRef()
const timer=()=>{
   timerIdRef.current=  setInterval(addTag,2000)
}
// функция сброса таймера//работае с исп useRef
const stop = ()=>{
    clearInterval(timerIdRef.current)
}
  /////////////////////////////////функция вывода на консоль при скроле
  // const hendlScroll=()=>{
  //   console.log('SCROLL')
  // }

  //////////////////////////////////добавили скролл
  // const ulRef = React.useRef()
  // React.useEffect(()=>{
  //  console.log(ulRef.current)
  // ulRef.current.addEventListener('scroll',hendlScroll)
  // },[])
  /////////////////////////////////убрали скролл
// const endScroll=()=>{
//   console.log(ulRef.current)
//     ulRef.current.removeEventListener('scroll',hendlScroll);
  ////////////как получить значение атрибута,,???
  // const atr = ulRef.current.getAttribute('scroll')
  // console.log(atr)
// }
  ////////////////////////////////


  return (
    <ul className='container' id='container' ref={null} >
     {tag.map((t,index)=>
        <div className={item} key={t}>{t}</div>)
     }
<button onClick={()=>{setCount(count+1)}} className={`${item} btn`} style={{backgroundColor:'#be0ddd99'}} >{count}</button>
<button onClick={()=>{setCount(count-1)}} className='item btn' style={{backgroundColor:'#be0ddd90'}}>{count}</button>
      <button onClick={addTag} className=' item btn' style={{backgroundColor:'blue'}}>+</button>

      <button onClick={timer} className='item btn' style={{backgroundColor:'grey'}}>START</button>
      {/*кнопка stop не останавливает timer() */}
      <button onClick={stop} className='item btn' style={{backgroundColor:'#ffeb3b'}}>STOP</button>
      {/*если сразу нажать кнопку с addTag, то END SCROLL не сбрасывает scroll, а console.log работает
      , если сразу нажать сброс скролл , то сбрасывается*/}
      <button onClick={null}>END SCROLL</button>
    </ul>
  );
};

export default Tags;