import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export const Barchart = () => {
  const [barData, setBarData] = useState([])
  const fetchData = async () => {
    const response = await fetch('https://viaje.ai/mainvia_api/')
    const jsonData = await response.json()
    setBarData(jsonData["data"])
    // barData.map(item => {
    //   console.log(item)
    //   console.log("helo")
    // })
    console.log(jsonData["data"])
  }
  useEffect(() => {

    fetchData()
    console.log(barData)
  }, [])
  const options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Bar Chart'
    },
    
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      name: 'Value 1',
      data: barData.map(item => item[1])
    }, {
      name: 'Value 2',
      data: barData.map(item => item[2]) 
    }, {
      name: 'Value 3',
      data: barData.map(item => item[3])
    }],
    xAxis: {
      categories: barData.map(item => item[0])
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
