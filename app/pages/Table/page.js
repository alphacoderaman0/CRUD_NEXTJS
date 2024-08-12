import Link from "next/link"
export default function Table(props){
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
            <tr className="text-center my-6 border-t-0 border-r-0 border-l-0 border-2">
              <td className="py-3">{props.name}</td>
              <td>{props.age}</td>
              <td>{props.email}</td>
              <td>{props.phone}</td>
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
        </>
    )
}