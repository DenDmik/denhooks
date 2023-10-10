import React from "react";
const rend={
    // здес обозначаются счетчики 
    count1:0,
    count2:0,
}



export default React.memo(
    // id and value назначаются в counterMemo.js во время вызова(рендеринга) компонента Count в соответствующем
 function Count({id,value}){
    // здесь rend[`count${id}`] выбирается содержимое поля count в обьекте rend // [`count${id}`] =>запись поля  count1 или count2
    // в зависимости от id//
console.log(`Count${id} render:${++rend[`count${id}`]}`)
return(
    <div>
        <h1 className="cyan">{value}</h1>
    </div>
)
}
)