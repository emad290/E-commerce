"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { zodResolver } from '@hookform/resolvers/zod'
import { ScemaReg } from '../Scema/Register.scema'
import axios from 'axios'
import { RoRegisterTypeot } from '@/Types/Register.type'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'






export default function Register() {
let router = useRouter()
const form = useForm<RoRegisterTypeot>({
  defaultValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:""
  
  },
  resolver:zodResolver(ScemaReg)
})

 async function HandleRegister(val :RoRegisterTypeot){
  try{
  const respone=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,val);
  console.log(respone.data.message)
  if(respone.data.message=="success"){
toast.success("you create a new acount" ,{position:"top-center" ,duration:5000})
router.push('/Login') 
}
    
  }
catch(err){
 
  toast.error(err.response.data.message,{position:"top-center" ,duration:5000})
}
}

  return (
   <>
   <div className='w-1/2 mx-auto my-12 p-6 shadow bg-emerald-700 text-2xl text-white font-bold'>
   <Form {...form}>



 <form onSubmit={form.handleSubmit(HandleRegister)}>
<h1 className='text-center my-3 font-bold'>Register now</h1>
 <FormField
  
    control={form.control}
    name="name"
    render={({field}) => (
      <FormItem>
        <FormLabel className='mt-3'>Name : </FormLabel>
        <FormControl>
         <Input type='text' {...field}/>
        </FormControl>
        
        <FormMessage />
      </FormItem>
    )}
  />

 <FormField
    control={form.control}
    name="email"
    render={({field}) => (
      <FormItem>
        <FormLabel className='mt-3'>Email : </FormLabel>
        <FormControl>
         <Input type='email' {...field}/>
        </FormControl>
        
        <FormMessage />
      </FormItem>
    )}
  />

<FormField
    control={form.control}
    name="password"
    render={({field}) => (
      <FormItem>
        <FormLabel className='mt-3'>password : </FormLabel>
        <FormControl>
         <Input {...field} type='password'/>
        </FormControl>
        
        <FormMessage />
      </FormItem>
    )}
  />

<FormField
    control={form.control}
    name="rePassword"
    render={({field}) => (
      <FormItem>
        <FormLabel className='mt-3'>rePassword : </FormLabel>
        <FormControl>
         <Input {...field} type='password' />
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
         <Input {...field} type='tel'  />
        </FormControl>
        
        <FormMessage />
      </FormItem>
    )}
  />

<Button className='bg-white text-2xl text-emerald-800 my-3 w-full cursor-pointer' type='submit'>Register Now</Button>

 </form>

</Form>
   
   
   </div>
   
   
   </>
  )
}
