import React from 'react';

const Tags = () => {

  const[count,setCount]=React.useState(0)

  //почему 2 раза в консоли component did mount? потому . что выполняется WILL UNMOUNT!!!
  // ПОЧЕМУ ВЫПОЛНЯЕТСЯ WILL UNMOUNT ПРИ ПЕРВОЙ ЗАГРУЗКЕ????
  React.useEffect(()=>{
    console.log('component did mount');
    return(()=>{console.log('WILL UNMOUNT')})
  },[])
  //это тоже 2 раза при первой загрузке,потому . что выполняется WILL UNMOUNT!!!
  React.useEffect(()=>{
    console.log('component did update')
  })
  //это тоже 2 раза при первой загрузке,потому . что выполняется WILL UNMOUNT!!!
  React.useEffect(()=>{
    console.log('add count')
  },[count])
  let item ='item'
const[tag,setTag]=React.useState([1])
const addTag =()=>{
    setTag((prev)=>([...prev,prev[prev.length-1]+1])
    )
  console.log(tag)
}
//делаю таймер . добавляет тэг каждые 2 сек.
let timerId
const timer=()=>{
   timerId =  setInterval(addTag,2000)
}
// функция сброса таймера
const stop = ()=>{
    clearInterval(timerId)
}
// запускаю таймер
// timer()
  return (
    <div className='container'>
     {tag.map((t,index)=>
        <div className={item} key={t}>{t}</div>)
     }
<button onClick={()=>{setCount(count+1)}} className={`${item} btn`} style={{backgroundColor:'#be0ddd99'}} >{count}</button>
      <button onClick={addTag} className=' item btn' style={{backgroundColor:'blue'}}>+</button>

      <button onClick={timer} className='item btn' style={{backgroundColor:'grey'}}>START</button>
      {/*кнопка stop не останавливает timer() */}
      <button onClick={stop} className='item btn' style={{backgroundColor:'#ffeb3b'}}>STOP</button>
    </div>
  );
};

export default Tags;