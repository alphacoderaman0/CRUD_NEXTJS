"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function employee() {
  const router = useRouter();
  const [saveUser,setSaveUser] = useState({
    name: "",
    email: "",
    mobno: "",
    age: ""
  })
  const handleSaveChanges = ({target :{name,value}})=>{
    setSaveUser({...saveUser , [name] : value});
  }

  const handleAddSubmit= async (e)=>{
    e.preventDefault();

    const reqOption = {
      method : "POST",
      headers : {"Content-Type": "application/json"},
      body: JSON.stringify(saveUser)
    }
    const response = await fetch("http://localhost:3000/api/users",reqOption);
    const newUser = await response.json();
    router.push('/');
  }
  return (
    <div className=" px-96 flex  justify-center items-center h-[100vh]">
      <div className="w-full bg-white px-6 py-6 border rounded-xl shadow-lg hover:shadow-xl">
          <h1 className="text-3xl text-center font-bold uppercase">Add new Employee Details</h1>
          <form onSubmit={handleAddSubmit} className="my-2 space-y-5 ">

            <div>
              <label htmlFor="name"className="block mb-2 text-lg font-medium text-gray-900 ">Name</label>
              <input onChange={handleSaveChanges} value={saveUser.name} name="name" type="text" id="name" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Name" required=""/>
            </div>
            <div>
              <label htmlFor="age"className="block mb-2 text-lg font-medium text-gray-900 ">Age</label>
              <input maxLength="3" onChange={handleSaveChanges} value={saveUser.age} name="age" type="number" id="age" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Age" required=""/>
            </div>
            <div>
              <label htmlFor="email"className="block mb-2 text-lg font-medium text-gray-900 ">E-mail</label>
              <input onChange={handleSaveChanges} value={saveUser.email} name="email" type="email" id="email" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Email" required=""/>
            </div>
            <div>
              <label htmlFor="mobno"className="block mb-2 text-lg font-medium text-gray-900 ">Phone Number</label>
              <input onChange={handleSaveChanges} value={saveUser.mobno} name="mobno" type="number" id="mobno" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Phone Number (only 10 digits)" required=""/>
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
              type="submit"
              className="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 uppercase addCancel" value="add"/>
            </div>
           
          </form>
      </div>
    </div>
  );
}
