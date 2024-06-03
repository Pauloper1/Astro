import React, { useEffect, useState } from 'react'

export const barchart = () => {
    const [barData, setBarData] = useState([])

    useEffect(async()=>{
        const response = await fetch('https://viaje.ai/mainvia_api/')
        const jsonData = await response.json()
        console.log(jsonData)
    },[barData])
  return (
    <div>barchart</div>
  )
}
