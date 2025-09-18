import z from "zod";


export const CheckOutscema=z.object({
    details:z.string().nonempty("invalied details"),
     phone:z.string().nonempty("invalied phone number"),
     city:z.string().nonempty("invalied phone number")
        
})