"use client"
import { useEffect,useState } from "react";
import Link from "next/link";
export default function Table(props){
    const[data,setData] = useState(false);
    const [users,setUsers]= useState([]);
    console.log("users:",users);
    useEffect(()=>{
      async function fetchUser(){
        const allData = await fetch("http://localhost:3000/api/users") ;
        setUsers(await allData.json());
      }
      fetchUser();
    },[])
    return(
        <>
            <table className="my-4 w-full">
          <tbody>
            <tr className=" border-t-0 border-r-0 border-l-0 border-2" >
              <th className="uppercase py-2">name</th>
              <th className="uppercase">age</th>
              <th className="uppercase">email</th>
              <th className="uppercase">phone number</th>
              <th className="uppercase">Action</th>
            </tr>
            
            {
            users && users.map((user)=>(
            <tr  className="text-center my-6 border-t-0 border-r-0 border-l-0 border-2">
              <td key={user.id} className="py-3">{user.name}</td>
              <td key={user.id}>{user.age}</td>
              <td key={user.id}>{user.email}</td>
              <td key={user.id}>{user.mobno}</td>
              <td className="py-4 flex gap-3 justify-center propss-center">
                <Link href="/pages/edit_employee" className=" px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold uppercase hover:bg-blue-700 hover:shadow-xl">edit</Link>
                <button className=" px-4 py-2 rounded-xl bg-red-500 text-white font-semibold uppercase hover:bg-red-700 hover:shadow-xl">delete</button>
              </td>
            </tr>            
            ))
            
            }
            
        
            
          </tbody>
        </table>
        </>
    )
}