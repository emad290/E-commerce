import React from 'react'

import ProductsAll from '../Products/ProductsAll'
import Getallproducts from '../../../../Callapi/Getallproducts'
import { AllProductsType } from '@/Types/AllProducts.type'




export default async function MainProducts() {
const {data}= await  Getallproducts()

  return (
    <div>
      <div className='flex flex-wrap'>
      
      
      {data.map((product :AllProductsType)=> <ProductsAll key={product._id} data={product}/>
      
      )}
      
      </div>
    </div>
  )
}
