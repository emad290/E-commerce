import z from "zod";


export const Loginscema=z.object({
    email:z.string().email("invalied email"),
     password:z.string().nonempty("invalied").min(6,"min password must be more than 6 char"),
        
})