"use client"


import z from "zod";

export const ScemaReg=z.object(
    {
    name:z.string().nonempty("this faild cant br empty").min(2,"min length 2 char").max(15,"max char 15 length"),
    email:z.string().nonempty().email("invalied email"),
    password:z.string().nonempty("invalied").min(6,"min password must be more than 6 char"),
    rePassword:z.string().nonempty("invalied"),
    phone:z.string().nonempty().min(11,"invalied number must be 11 num")
    }
).refine((object)=>object.password==object.rePassword,{
    path:["rePassword"],
    error:"repassword not match bassword"
})