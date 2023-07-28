export default function Navbar() {
    return (
        <nav className="bg-white-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src="https://www.pngitem.com/pimgs/m/175-1757329_my-blog-logo-png-transparent-png.png" alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-lg font-large" aria-current="page">Home</a>
                                <a href="/about" className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-large">About</a>
                                <a href="/contact" className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-large">Contact</a>
                                <a href="#" className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-large">Post a blog</a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                        <div className="flex flex-1 items-center justify-center gap-2">
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Login
                            </button>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Signup
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </nav>

    )
}