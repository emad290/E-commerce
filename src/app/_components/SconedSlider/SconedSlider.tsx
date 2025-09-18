import React from 'react'
import GetAllCategoriy from '../../../../Callapi/GetAllCategoriy'
import MainSlider from '../MainSlider/MainSlider'

export default async function SconedSlider() {

    const {data}= await GetAllCategoriy()
   
  return (
 <>
<MainSlider data={data}></MainSlider>
 
 </>
  )
}







