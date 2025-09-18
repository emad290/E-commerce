// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//     const token =request.cookies.get("next-auth.session-token");
//     if(!token){
//         return NextResponse.redirect(new URL('/Login', request.url))
//     }
//   return NextResponse.next()
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/","/Products"],
// }

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const toke=request.cookies.get("next-auth.session-token");
    if(!toke){
        return NextResponse.redirect(new URL('/Login', request.url))
    }
  return NextResponse.next()
}
 

export const config = {
  matcher: ["/","/Products","/Categorey"],
}
