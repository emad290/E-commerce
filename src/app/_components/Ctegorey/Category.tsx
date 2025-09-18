import React from 'react'
import GetAllPrands from '../../../../Callapi/GetAllPrands'
import CatCard from '../CategoryCard/CatCard';

export default async function Category() {
    const {data}= await GetAllPrands();
    console.log(data)
  return (
    <div className='flex flex-wrap p-3 '>
        {data.map((prand)=> <CatCard data={prand} key={prand._id}/>)}
      
    </div>
  )
}
