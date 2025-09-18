import React from 'react'
import GetAllCategoriy from '../../../Callapi/GetAllCategoriy'
import CatCard from '../_components/CategoryCard/CatCard'

export default async function Categorey() {

const {data}=await GetAllCategoriy()

  return (
    <div className=' contianer  w-[80%] mx-auto'>

      <h1 className='my-6 font-bold text-center text-3xl'>OUR CATEGOREY</h1>
      <div className='flex flex-wrap gap-3'>
{data.map((cat)=><CatCard data={cat} key={cat._id}/>)}


      </div>
    </div>
  )
}
