export default function employee() {
  return (
    <>
      <form action="/" className="space-y-8">
        <div>
          <label
            for="subject"
            className="block mb-2 text-xl font-medium text-gray-900 "
          >
            Name
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Kindly Enter your Name"
            required=""
          />
        </div>
        <div>
          <label
            for="email"
            className="block mb-2 text-xl font-medium text-gray-900 "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm text-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
            placeholder="Kindly Enter your Email"
            required=""
          />
        </div>
        <div className="sm:col-span-2">
          <label
            for="message"
            className="block mb-2 text-xl font-medium text-gray-900 "
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Send message
        </button>
      </form>
    </>
  );
}
