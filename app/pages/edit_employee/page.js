import Link from "next/link"
export default function edit(){
    return(
        <div className=" px-96 flex  justify-center items-center h-[100vh]">
      <div className="w-full bg-white px-6 py-6 border rounded-xl shadow-lg hover:shadow-xl">
          <h1 className="text-3xl text-center font-bold uppercase">Update Employee Details</h1>
          <form action="/" method="put" className="my-2 space-y-5 ">
            <div>
              <label for="name"className="block mb-2 text-lg font-medium text-gray-900 ">Name</label>
              <input type="text" id="name" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Name" required=""/>
            </div>
            <div>
              <label for="age"className="block mb-2 text-lg font-medium text-gray-900 ">Age</label>
              <input type="number" id="age" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your age" required=""/>
            </div>
            <div>
              <label for="email"className="block mb-2 text-lg font-medium text-gray-900 ">E-mail</label>
              <input type="email" id="email" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your email" required=""/>
            </div>
            <div>
              <label for="mobno"className="block mb-2 text-lg font-medium text-gray-900 ">Phone Number</label>
              <input type="number" id="mobno" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your Phone Number (only 10 digits)" required=""/>
            </div>


            {/* buttons */}
            <div className="flex justify-between">
              <Link
              href="/"
              className="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 uppercase"
              >
              back
              </Link>
              <button
              type="submit"
              className="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 uppercase"
            >
              Update
              </button>
            </div>
          </form>
      </div>
    </div>
    )
}