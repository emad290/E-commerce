"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { zodResolver } from '@hookform/resolvers/zod'

import { useRouter } from 'next/navigation'
import { Loginscema } from '../Scema/Login.scema'

import {signIn} from 'next-auth/react'
import { LoginTypeot } from '@/Types/Login.type'








export default function Login() {
// const router =useRouter()
const rout=useRouter()
const form = useForm({
  defaultValues:{
 
    email:"",
    password:"",
  
  
  
  },
  resolver:zodResolver(Loginscema)
})

async function HandleLogin(val: LoginTypeot) {
  try {
    const res = await signIn("credentials", {
      email: val.email,
      password: val.password,
      redirect:true,
      callbackUrl:"/"
    })

    if (res && res.ok) {
      rout.push("/")
    } 
  } catch (err) {
    console.error(err)
  }
}





  return (
 <div className='w-1/2 mx-auto my-12 p-6 shadow bg-emerald-700 text-2xl text-white font-bold'>
   <Form {...form}>



 <form onSubmit={form.handleSubmit(HandleLogin)}>
<h1 className='text-center my-3 font-bold'>Login now</h1>


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



<Button className='bg-white text-2xl text-emerald-800 my-3 w-full cursor-pointer' type='submit'>Login </Button>

 </form>

</Form>
   
   
   </div>
  )
}
