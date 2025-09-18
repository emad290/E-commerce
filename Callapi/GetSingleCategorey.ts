export default async function GetSingleCat(id:string){
    const res =await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
    const data = await res.json();
    return data
}


