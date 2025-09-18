"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { zodResolver } from '@hookform/resolvers/zod'



import { useParams,  } from 'next/navigation'
import { CheckVal } from '@/Types/CheckVal'
import { CheckOutscema } from '@/app/Scema/CheckOut.scema'
import GetCheckout from '@/app/CheckOutAction/GetCheckOUT'










export default function CheckOutlogin() {
   const[load,setload]=useState(false)
   
   
    const {id}:{id: string}=useParams()
   


const form = useForm({
  defaultValues:{
 
    details:"",
    phone:"",
    city:"",
  
  
  
  },
  resolver:zodResolver(CheckOutscema)
})

async function HandleCechOut (val:CheckVal){
setload(true)
const data = await GetCheckout(id,val)

if(data.status=="success"){

window.location.href=data.session.url
setload(false)
}
}





  return (
 <div className='w-1/2 mx-auto my-12 p-6 shadow bg-emerald-700 text-2xl text-white font-bold'>
   <Form {...form}>



 <form onSubmit={form.handleSubmit(HandleCechOut)}>
<h1 className='text-center my-3 font-bold'>CheckOut now</h1>


 <FormField
    control={form.control}
    name="details"
    render={({field}) => (
      <FormItem>
        <FormLabel className='mt-3'>details : </FormLabel>
        <FormControl>
         <Input type='text' {...field}/>
        </FormControl>
        
        <FormMessage />
      </FormItem>
    )}
  />

<FormField
    control={form.control}
    name="phone"
    render={({field}) => (
      <FormItem>
        <FormLabel className='mt-3'>your phone : </FormLabel>
        <FormControl>
         <Input {...field} type='tel'/>
        </FormControl>
        
        <FormMessage />
      </FormItem>
    )}
  />
<FormField
    control={form.control}
    name="city"
    render={({field}) => (
      <FormItem>
        <FormLabel className='mt-3'>your city : </FormLabel>
        <FormControl>
         <Input {...field} type='text'/>
        </FormControl>
        
        <FormMessage />
      </FormItem>
    )}
  />


<Button className='bg-white text-2xl text-emerald-800 my-3 w-full cursor-pointer' type='submit'>{load? "plase waite...":"pay now"} </Button>

 </form>

</Form>
   
   
   </div>
  )
}
