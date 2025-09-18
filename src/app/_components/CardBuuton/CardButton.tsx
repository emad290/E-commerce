"use client"
import GetAllAddProducts from '@/CarAction/AddProduct'
import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import { toast } from 'sonner'
import { Cartcontsxt } from '../Context/CartContext'

export default function CardButton({id}:{id:string}) {

const {counter ,setcounter}=useContext(Cartcontsxt)

async function AddCrat(id:string){
    const res = await GetAllAddProducts(id)
  
    if(res.status=="success"){
setcounter(counter+1)
        toast.success("you add product successfuly",{position:"top-center",duration:5000})
    }else{
         toast.error("you cant add this product now !",{position:"top-center",duration:5000})
    }
}


  return (
<>
<Button onClick={()=>AddCrat(id)} className='bg-emerald-900 text-white font-bold text-2xl cursor-pointer'>Add cart</Button>
</>
  )
}
