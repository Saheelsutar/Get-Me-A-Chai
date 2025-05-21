import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import User from '@/models/User'
import connectDB from '@/db/connectDb'
// import EmailProvider from 'next-auth/providers/email'

export const authoptions= NextAuth({
    providers: [
      // OAuth authentication providers...
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
    //   AppleProvider({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET
    //   }),
    //   FacebookProvider({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET
    //   }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
    //   // Passwordless / email sign in
    //   EmailProvider({
    //     server: process.env.MAIL_SERVER,
    //     from: 'NextAuth.js <no-reply@example.com>'
    //   }),
    ],
    callbacks: {
      async signIn({ user, account}) {
      if(account.provider=='github'){
        await connectDB()
        const currentUser=await User.findOne({email:user.email})
        if(!currentUser){
          const newUser=await User.create({
            email:user.email,
            username:user.email.split("@")[0],
          })
        }
        return true;
      }
      else if(account.provider=='google'){
        await connectDB()
        const currentUser=await User.findOne({email:user.email})
        if(!currentUser){
          const newUser=await User.create({
            email:user.email,
            username:user.email.split("@")[0],
          })
        }
        return true;
      }
      },
      async session({ session }) {
        if (typeof window !== "undefined") {
          // Check if session exists in localStorage, otherwise return null
          if (!localStorage.getItem("userSession")) {
            return null;
          }
        }
        return session;
      },
    },
  });
  export { authoptions as GET, authoptions as POST };