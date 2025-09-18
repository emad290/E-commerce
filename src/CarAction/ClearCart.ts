"use server"

import GetMytoken from "@/Utilites/GetToken"

export default async function ClearCart(){
    const token =await GetMytoken() as string

    const res=await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
        method:"DELETE",
        headers:{
token,
  "Content-Type": "application/json"
        }
    })
    const data= await res.json()
    return data
}