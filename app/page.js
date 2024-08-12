import Link from "next/link"
export default function Home(){
  return (
    <div className="flex justify-center px-28 py-32">
      <div className="border rounded-2xl px-8 py-8" >
        <div className="flex justify-between items-center gap-40">
            <div className="leading-10">
              <h1 className="text-2xl">All Users</h1>
              <p className="text-sm">A list of all the users in your account including their name, title and email.</p>
            </div>
            <Link href="/pages/add_employee" className=" px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold uppercase hover:bg-blue-700 hover:shadow-xl">Add</Link>
        </div>
        <table className="my-4 outline outline-1 outline-gray-300 outline-offset-2 rounded-xl uppercase w-full">
          <tr>
            <th className="">name</th>
            <th className="">age</th>
            <th className="">email</th>
            <th className="">phone number</th>
          </tr>
          <tr>
            <td>Aman</td>
            <td>19</td>
            <td>aman@gmail.com</td>
            <td>9548552014</td>
          </tr>
        </table>
     </div>
     
    </div>
  )
}