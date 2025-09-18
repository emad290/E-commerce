import GetMytoken from "@/Utilites/GetToken"


export default async function ShowProducs(){
const token = await GetMytoken() as string


const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
    headers:{
        token,
         "Content-Type": "application/json"
    }
})

const data = await res.json()

return data
}