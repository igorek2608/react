import React from 'react'
import { useState, useEffect } from 'react';

function UseHook() {
    const [count, setCount] = useState(0);

  
  useEffect(() => {
    
    document.title = `Вы нажали ${count} раз`;
  },[count]);




    return (
        [count, setCount]
    )
}

export default UseHook
