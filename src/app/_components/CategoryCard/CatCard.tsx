
import { Card,  CardDescription,  CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { CatType } from '@/Types/Categoroy.Types'

export default function CatCard({data}:{data:CatType} ) {




console.log(data)


  return (
<>
 <div className='w-full md:w-1/2 lg:w-1/5 '>
<div className='p-1.5'>

<Link href={`/Categorey/${data._id}`}>
<Card className='p-3 relative overflow-hidden group hover:shadow-xl hover:shadow-emerald-600 transition-all duration-500'>

<div className=' absolute  transition-all right-[-50px] z-10 group-hover:right-[0px] top-[100px]'>

<div className='flex flex-col gap-3'>
<button><i className="fa-solid fa-cart-shopping"></i></button>
<button><i className="fa-solid fa-heart"></i></button>
<button><i className="fa-solid fa-magnifying-glass-plus"></i></button>

</div>
</div>


  
  <CardHeader>
   
    <CardTitle>

<div className=' relative w-full h-[150px] bg-red-600'>
<Image alt='item' src={data.image}  fill></Image>
</div>
      
      </CardTitle>
    <CardDescription><p className='text-emerald-600 font-bold text-xl '>{data.name}</p></CardDescription>
    
  </CardHeader>





</Card>
</Link>







</div>
 </div>



</>
  )
}
