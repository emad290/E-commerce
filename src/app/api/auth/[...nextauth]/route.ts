
import NextAuth , {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const options :NextAuthOptions = {

providers: [
  CredentialsProvider({

    name: 'Credentials',
  
    credentials: {
      email: { label: "email", type: "email", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {

      const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
        method: 'POST',
        body: JSON.stringify({
          email:credentials?.email,
          password:credentials?.password
        }),
        headers: { "Content-Type": "application/json" }
      })
      const user = await res.json()

     
      if (res.ok && user) {
        return user
      }
    
      return null
    }
  })
],

session:{
  strategy:"jwt"
},

pages:{
  signIn:"/"
},

callbacks:{
    async session({ session, token, user }) {
    return {...session,...token,...user}
  },
  async jwt({ token, user }) {
    return {...token,...user}
  }
},


secret:process.env.AUTH_SECRET




}




const handler = NextAuth(options)

export { handler as GET, handler as POST }










// import CredentialsProvider from "next-auth/providers/credentials"
// import NextAuth, { NextAuthOptions } from "next-auth"

// export const options :NextAuthOptions ={

// providers: [
//   CredentialsProvider({

//     name: 'Credentials',

//     credentials: {
//       email: { label: "email", type: "email", placeholder: "jsmith" },
//       password: { label: "Password", type: "password" }
//     },
//     async authorize(credentials) {
   
   
//       const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
//         method: 'POST',
//         body: JSON.stringify(credentials),
//         headers: { "Content-Type": "application/json" }
//       })
//       const user = await res.json()

    
//       if (res.ok && user) {
//         return user
//       }
  
//       return null
//     }
//   })
// ],
// session:{
//     strategy:"jwt"
// },
// pages:{
//     signIn: '/Login',
// },
// callbacks:{
//       async session({ session, token, user }) {
//     return {...session,...token,...user}
//   },
//   async jwt({ token, user  }) {
//     return {...token,...user}
//   }
// },

// secret:process.env.AUTH_SECRET











// }

// const handler = NextAuth(options)

// export { handler as GET, handler as POST }