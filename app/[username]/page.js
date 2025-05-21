import PaymentPage from '@/components/PaymentPage'
import React from 'react'
import { notFound } from 'next/navigation'
import connectDB from '@/db/connectDb'
import { fetchPayments, fetchUser } from '@/actions/useractions'



const Username = async({params}) => {
 await connectDB()
  const user = await fetchUser(params.username)
  
 if(!user){
  return notFound()

 }
  
 if(!user.name ){
  return notFound()
 }
const payment = await fetchPayments(params.username)
  return (
    <>
 

<PaymentPage
  currentUser={JSON.parse(JSON.stringify(user))}
  username={params.username}
  payment={JSON.parse(JSON.stringify(payment))}
/>

    </>
   
  )
}

export default Username

// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: `${params.username} - Get Me A Chai`,
  }
}