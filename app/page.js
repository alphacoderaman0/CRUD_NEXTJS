import Link from "next/link"
export default function Home(){
  return (
    <div className="flex justify-center px-28 py-24">
      <div className="shadow-lg hover:shadow-xl border rounded-2xl px-8 py-8 bg-white" >
        <div className="flex justify-between items-center gap-40">
            <div className="leading-10">
              <h1 className="text-2xl">All Users</h1>
              <p className="text-sm">A list of all the users in your account including their name, title and email.</p>
            </div>
            <Link href="/pages/add_employee" className=" px-4 py-2 rounded-xl bg-green-500 text-white font-semibold uppercase hover:bg-green-700 hover:shadow-xl">Add</Link>
        </div>
        <table className="my-4 w-full">
          <tbody>
            <tr className=" border-t-0 border-r-0 border-l-0 border-2" >
              <th className="uppercase py-2">name</th>
              <th className="uppercase">age</th>
              <th className="uppercase">email</th>
              <th className="uppercase">phone number</th>
              <th className="uppercase">Action</th>
            </tr>
            <tr className="text-center my-6 border-t-0 border-r-0 border-l-0 border-2">
              <td className="py-3">Aman</td>
              <td>19</td>
              <td>aman@gmail.com</td>
              <td>9548552014</td>
              <td className="py-4 flex gap-3 justify-center items-center">
                <Link href="/pages/edit_employee" className=" px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold uppercase hover:bg-blue-700 hover:shadow-xl">edit</Link>
                <button className=" px-4 py-2 rounded-xl bg-red-500 text-white font-semibold uppercase hover:bg-red-700 hover:shadow-xl">delete</button>
              </td>
            </tr>
            <tr className="text-center my-6 border-t-0 border-r-0 border-l-0 border-2">
              <td className="py-3">Aman</td>
              <td>19</td>
              <td>aman@gmail.com</td>
              <td>9548552014</td>
              <td className="py-4 flex gap-3 justify-center items-center">
                <Link href="/pages/edit_employee" className=" px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold uppercase hover:bg-blue-700 hover:shadow-xl">edit</Link>
                <button className=" px-4 py-2 rounded-xl bg-red-500 text-white font-semibold uppercase hover:bg-red-700 hover:shadow-xl">delete</button>
              </td>
            </tr>
            <tr className="text-center my-6 border-t-0 border-r-0 border-l-0 border-2">
              <td className="py-3">Aman</td>
              <td>19</td>
              <td>aman@gmail.com</td>
              <td>9548552014</td>
              <td className="py-4 flex gap-3 justify-center items-center">
                <Link href="/pages/edit_employee" className=" px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold uppercase hover:bg-blue-700 hover:shadow-xl">edit</Link>
                <button className=" px-4 py-2 rounded-xl bg-red-500 text-white font-semibold uppercase hover:bg-red-700 hover:shadow-xl">delete</button>
              </td>
            </tr>
            <tr className="text-center my-6 border-t-0 border-r-0 border-l-0 border-2">
              <td className="py-3">Aman</td>
              <td>19</td>
              <td>aman@gmail.com</td>
              <td>9548552014</td>
              <td className="py-4 flex gap-3 justify-center items-center">
                <Link href="/pages/edit_employee" className=" px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold uppercase hover:bg-blue-700 hover:shadow-xl">edit</Link>
                <button className=" px-4 py-2 rounded-xl bg-red-500 text-white font-semibold uppercase hover:bg-red-700 hover:shadow-xl">delete</button>
              </td>
            </tr>
            
            
          </tbody>
        </table>
     </div>
     
    </div>
  )
}