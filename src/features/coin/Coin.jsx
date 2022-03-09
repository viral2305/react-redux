import { useSelector } from "react-redux"
import React from 'react'

function Coin() {
  const coin = useSelector((state) => state.counter.count)
  const themeTextColor = useSelector((state) => state.theme.color)
  console.log("themeTextColor",themeTextColor);
  return (
    <div>
        <span className="value" style={{color: themeTextColor}}>Coin:{coin} </span>
    </div>
  )
}

export default Coin