"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { initiateUser } from "../api/create-user/route";
import { fetchUser } from "@/actions/useractions";

const Dashboard = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    getDashboardInfo()
    document.title = 'Dashboard - Get Me A Chai'
    if (!session) {
      router.push('/login')
    }

  }, [session])

  const getDashboardInfo = async () => {
    if (session) {
      let u = await fetchUser(session.user.email.split("@")[0])
      if (u) {
        setFormData({
          name: u.name, 
          email: u.email, 
          username: u.username,
          profilePicture: u.profilepic,
          coverPicture: u.coverpic,
          razorpayId: u.razorpayid,
          razorpaySecret: u.razorpaysecret,
        })
      }
    }

  }

 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    profilePicture: "",
    coverPicture: "",
    razorpayId: "",
    razorpaySecret: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const saveUser = async (formData) => {
    await initiateUser(formData);
    alert("Saved Successfully!")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  }



  return (
    <div className="flex justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className=" p-2 rounded-lg-lg shadow-md max-w-lg w-full"
      >
        <h1 className="text-white text-2xl m-2 text-center font-bold">Welcome to your dashboard</h1>
        <div className="mb-2">
          <label className="block text-sm font-bold text-white mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 h-8 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-bold text-white mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 h-8 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-bold text-white mb-1" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 h-8 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-bold text-white mb-1" htmlFor="profilepic">
            Profile Picture
          </label>
          <input
            type="text"
            id="profilepic"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
            className="w-full p-2 h-8 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-bold text-white mb-1" htmlFor="coverpic">
            Cover Picture
          </label>
          <input
            type="text"
            id="coverpic"
            name="coverPicture"
            value={formData.coverPicture}
            onChange={handleChange}
            className="w-full p-2 h-8 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-bold text-white mb-1" htmlFor="razorpayId">
            Razorpay Id
          </label>
          <input
            type="text"
            id="razorpayId"
            name="razorpayId"
            value={formData.razorpayId}
            onChange={handleChange}
            className="w-full p-2 h-8 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold text-white mb-1" htmlFor="razorpaySecret">
            Razorpay Secret
          </label>
          <input
            type="text"
            id="razorpaySecret"
            name="razorpaySecret"
            value={formData.razorpaySecret}
            onChange={handleChange}
            className="w-full p-2 h-8 bg-gray-700 text-white rounded-lg"
          />
        </div>
        <button onClick={() => saveUser(formData)}
          type="submit"
          className="bg-blue-600 w-full p-2 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
