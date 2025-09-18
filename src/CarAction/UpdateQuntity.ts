"use server"
import GetMytoken from "@/Utilites/GetToken"


export default async function UpdateQuntety(id :string , count: string){
const token = await GetMytoken() as string

const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    method:"PUT",
    headers:{
token,
  "Content-Type": "application/json",
    },
    body:JSON.stringify({count})
})

const data= await res.json()
return data
}