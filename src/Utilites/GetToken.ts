"use server"
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function GetMytoken(){

const decodedToken= ((await cookies()).get("next-auth.session-token")?.value)|| 
((await cookies()).get("__secure-next-auth.session-token")?.value);
 const token = await decode({token :decodedToken ,secret:process.env.AUTH_SECRET!})
 return token?.token
}