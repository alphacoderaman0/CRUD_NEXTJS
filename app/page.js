import Link from "next/link"
import Table from "./pages/Table/page"
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
        <Table name={'love'} age={24} email={'love@gmail.com'} phone={1234321532}/>
     </div>
     
    </div>
  )
}