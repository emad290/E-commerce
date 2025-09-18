"use server"

import GetMytoken from "@/Utilites/GetToken"

export default async function GetAllAddProducts(id:string){
const token = await GetMytoken()as string

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
        method:"POST",
        headers:{
            token,
            "Content-Type": "application/json"
           
        },
        body:JSON.stringify({productId:id})
    })

    const data = await res.json()
    return data
}