"use client"
import React from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'
import { toast } from 'react-toastify'



const PaymentPage = ({ currentUser, username, payment }) => {
    const { data: session } = useSession()
    const [paymentform, setpaymentform] = useState({})
    const searchParams = useSearchParams()
    const router = useRouter()
    const { isAuthenticated } = useAuth()


    useEffect(() => {
        if ((!isAuthenticated) && (!session)) {
            router.push('/')
        } else {
            if (searchParams.get("paymentdone") == "true" && session) {
                toast("Thanks for your donation!!")
            }
            router.push(`/${username}`)
        }


    }, [session])




    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const pay = async (amount) => {
        //get the order id
        let u = currentUser
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": u.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Buy Me A Chai",
            "description": "Test Transaction",
            "image": "tea.gif",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
                "name": username,
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();

    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='w-full relative'>
                <div className='box1 w-full relative'>

                    <img className='object-cover w-full md:h-96 h-45 ' src="profilebg.gif" alt="" />
                    <h3 className='text-purple-200 font-serif md:text-xl text-lg font-extrabold absolute md:top-3/4 top-1/2 left-[30%] md:left-[43%]'>{`${currentUser.name}`}</h3>

                </div>
                <div className='absolute md:-bottom-14 -bottom-0 right-[40%] md:right-[47%] border-2 border-white rounded-full'>
                    <img className='rounded-full md:w-24 w-14' src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/beluga-cat-adam-sounji.jpg" alt="" />
                </div>
            </div>
            <div className="info gap-2 flex flex-col justify-center items-center my-24">
                <div className='font-bold text-lg'>
                    @{(username)}
                </div>


                <div className='text-slate-400'>Let&apos;s help {username} to get a chai</div>
                <div className='text-slate-400'>{payment.length} payments . ₹{payment.reduce((a, b) => a + b.amount, 0)} raised</div>

                <div className="payment flex md:flex-row flex-col gap-3 w-[80%] mt-12">
                    <div className="supporters md:w-1/2 p-5  bg-slate-900 text-white md:p-10 rounded-lg">
                        <h2 className='text-2xl p-1 font-bold'>Top 10 Supporters</h2>
                        <ul className='mx-5 text-lg'>
                            {Object.keys(payment).length === 0 ? (
                                <p className="text-gray-500 italic">No supporters yet. Be the first to support!</p>
                            ) : (
                                Object.values(payment).map((pay, index) => (
                                    <li key={index} className="my-4 flex gap-2 items-center">
                                        <img
                                            className="rounded-full"
                                            width={28}
                                            src="avatar.gif"
                                            alt={`${pay.name}'s avatar`}
                                        />
                                        <span>
                                            {pay.name} donated{' '}
                                            <span className="md:font-bold font-semibold">₹{pay.amount}</span> with a message &quot;{pay.message}&quot;
                                        </span>

                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                    <div className="makepayment md:w-1/2 bg-slate-900 text-white p-10 rounded-lg">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className="flex flex-col gap-2">
                            <input name='name' onChange={(e) => handleChange(e)} value={paymentform.name} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input name='message' onChange={(e) => handleChange(e)} value={paymentform.message} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input name='amount' onChange={(e) => handleChange(e)} value={paymentform.amount} type="number" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button onClick={() => pay(paymentform.amount)} type="button" className=" w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-800 disabled:from-purple-100" disabled={!paymentform.name?.length ||
                                !paymentform.message?.length ||
                                paymentform.amount == null ||
                                paymentform.amount > 100000}
                            >Pay</button></div>

                        <div className="flex gap-2 mt-5">
                            <button onClick={() => pay(1000)} className='bg-slate-800 p-3 rounded-lg'>Pay ₹10</button>
                            <button onClick={() => pay(2000)} className='bg-slate-800 p-3 rounded-lg'>Pay ₹20</button>
                            <button onClick={() => pay(3000)} className='bg-slate-800 p-3 rounded-lg'>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
