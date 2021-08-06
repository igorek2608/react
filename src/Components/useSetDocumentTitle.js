import React from 'react'
import { useState, useEffect } from 'react';


const useSetDocumentTitle=(initialCount, initialColor)=>{
    const [count, Setcount]=useState(initialCount)
    const [color, Setcolor]=useState(initialColor)

    useEffect(()=>{
      document.title=`вы нажали ${cout} раз. текущий цвет ${color}`

    },[count,color]);

    return {count,Setcount,color,Setcolor}


}



export default useSetDocumentTitle