import { CheckVal } from "@/Types/CheckVal";
import GetMytoken from "@/Utilites/GetToken";



export default async function GetCheckout(id:string,val:CheckVal){

    const token =await GetMytoken() as string

const res= await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`,{
    method:"POST",
    headers:{
        token,
         "Content-Type": "application/json"
    },
     body:JSON.stringify({
    shippingAddress:val
})
})

const data= await res.json()

return data

}