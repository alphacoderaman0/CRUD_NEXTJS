"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function edit({params}){

    const navigaion = useRouter();
    const id = parseInt(params.id);
    const [user , setUser] = useState([]);
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const [mobno , setMobno] = useState('');
    const handleUpdateSubmit = async ()=>{
      const res =await fetch(`http://localhost:3000/api/users/${id}`,{
        method:'PUT',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({name,age,email,mobno})
      });
      navigaion.push('/');
  }
    useEffect(()=>{
        async function fetchUser(params){
          const data = await fetch(`http://localhost:3000/api/users/${params}`);
          setUser(await data.json());
        }
        fetchUser(id);
    },[])
    return(
        <div className=" px-96 flex  justify-center items-center h-[100vh]">
      <div className="w-full bg-white px-6 py-6 border rounded-xl shadow-lg hover:shadow-xl">
          <h1 className="text-3xl text-center font-bold uppercase">Update Employee Details</h1>
          <form onSubmit={handleUpdateSubmit} className="my-2 space-y-5 ">
            <div>
              <label htmlFor="name"className="block mb-2 text-lg font-medium text-gray-900 ">Name</label>
              <input  onChange={(e)=>setName(e.target.value)} type="text" id="name" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Name" required=""/>
            </div>
            <div>
              <label htmlFor="age"className="block mb-2 text-lg font-medium text-gray-900 ">Age</label>
              <input  onChange={(e)=>setAge(e.target.value)} type="number" id="age" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your age" required=""/>
            </div>
            <div>
              <label htmlFor="email"className="block mb-2 text-lg font-medium text-gray-900 ">E-mail</label>
              <input  onChange={(e)=>setEmail(e.target.value)} type="email" id="email" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your email" required=""/>
            </div>
            <div>
              <label htmlFor="mobno"className="block mb-2 text-lg font-medium text-gray-900 ">Phone Number</label>
              <input  onChange={(e)=>setMobno(e.target.value)} type="number" id="mobno" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Phone Number (only 10 digits)" required=""/>
            </div>
            {/* buttons */}
            <div className="flex justify-between">
              <Link
              href="/"
              className="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 uppercase"
              >
              back
              </Link>
              <input
              value="update"
              type="submit"
              className="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 uppercase"
            />
            </div>
          </form>
      </div>
    </div>
    )
}