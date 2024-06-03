import React, { useEffect, useState } from 'react'

export const table = () => {
    const [tableData, setTableData] = useState([])
    useEffect(async()=>{
        const response = await fetch('https://viaje.ai/seatinfo_api/')
        const jsonData = await response.json()
        console.log(jsonData)
    },[tableData])
  return (
    <div>table</div>
  )
}
