import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gray-100 flex-col gap-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Oops!</h1>
        <p>Page Not Found</p>
        <Link to="/">
          <button className="text-white bg-primary-700 hover:bg-primary-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Back To Home
          </button>
        </Link>
      </main>
    </>
  );
};

export default ErrorPage;
